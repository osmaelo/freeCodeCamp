import { compose } from 'redux';
import { bonfire, html, js } from '../../utils/challengeTypes';

export function encodeScriptTags(value) {
  return value
    .replace(/<script>/gi, 'fccss')
    .replace(/<\/script>/gi, 'fcces');
}

export function decodeSafeTags(value) {
  return value
    .replace(/fccss/gi, '<script>')
    .replace(/fcces/gi, '</script>');
}

export function encodeFormAction(value) {
  return value.replace(
    /<form[^>]*>/,
    val => val.replace(/action(\s*?)=/, 'fccfaa$1=')
  );
}

export function decodeFccfaaAttr(value) {
  return value.replace(
    /<form[^>]*>/,
    val => val.replace(/fccfaa(\s*?)=/, 'action$1=')
  );
}

export function arrayToString(seedData = ['']) {
  seedData = Array.isArray(seedData) ? seedData : [seedData];
  return seedData.reduce((seed, line) => '' + seed + line + '\n', '\n');
}

export function buildSeed({ challengeSeed = [] } = {}) {
  return compose(
    decodeSafeTags,
    arrayToString
  )(challengeSeed);
}

const pathsMap = {
  [html]: 'html',
  [js]: 'js',
  [bonfire]: 'js'
};

export function getPreFile({ challengeType }) {
  return {
    name: 'index',
    ext: pathsMap[challengeType] || 'html',
    key: getFileKey({ challengeType })
  };
}

export function getFileKey({ challengeType }) {
  return 'index' + (pathsMap[challengeType] || 'html');
}

export function createTests({ tests = [] }) {
  return tests
    .map(test => ({
      text: ('' + test).split('message: ').pop().replace(/\'\);/g, ''),
      testString: test
    }));
}

export function loggerToStr(args) {
  args = Array.isArray(args) ? args : [args];
  return args
    .map(arg => typeof arg === 'undefined' ? 'undefined' : arg)
    .map(arg => {
      if (typeof arg !== 'string') {
        return JSON.stringify(arg);
      }
      return arg;
    })
    .reduce((str, arg) => str + arg + '\n', '');
}

export function getFirstChallenge(
  { superBlock, block, challenge },
  result
) {
  return challenge[
    block[
      superBlock[
        result[0]
      ].blocks[0]
    ].challenges[0]
  ];
}

export function getNextChallenge(
  current,
  entities,
  {
    isDev = false,
    skip = 0
  } = {}
) {
  const { challenge: challengeMap, block: blockMap } = entities;
  // find current challenge
  // find current block
  // find next challenge in block
  const currentChallenge = challengeMap[current];
  if (!currentChallenge) {
    return null;
  }
  const block = blockMap[currentChallenge.block];
  const index = block.challenges.indexOf(currentChallenge.dashedName);
  // use next challenge name to find challenge in challenge map
  const nextChallenge = challengeMap[
    // grab next challenge name in current block
    // skip is used to skip isComingSoon challenges
    block.challenges[ index + 1 + skip ]
  ];
  if (!isDev && nextChallenge && nextChallenge.isComingSoon) {
    // if we find a next challenge and it is a coming soon
    // recur with plus one to skip this challenge
    return getNextChallenge(current, entities, { isDev, skip: skip + 1 });
  }
  return nextChallenge;
}

export function getFirstChallengeOfNextBlock(
  current,
  entities,
  {
    isDev = false,
    skip = 0
  } = {}
) {
  const {
    challenge: challengeMap,
    block: blockMap,
    superBlock: SuperBlockMap
  } = entities;
  const currentChallenge = challengeMap[current];
  if (!currentChallenge) {
    return null;
  }
  const block = blockMap[currentChallenge.block];
  if (!block) {
    return null;
  }
  const superBlock = SuperBlockMap[block.superBlock];
  if (!superBlock) {
    return null;
  }
  // find index of current block
  const index = superBlock.blocks.indexOf(block.dashedName);

  // find next block name
  // and pull block object from block map
  const newBlock = blockMap[
    superBlock.blocks[ index + 1 + skip ]
  ];
  if (!newBlock) {
    return null;
  }
  // grab first challenge from next block
  const nextChallenge = challengeMap[newBlock.challenges[0]];
  if (isDev || !nextChallenge || !nextChallenge.isComingSoon) {
    return nextChallenge;
  }
  // if first challenge is coming soon, find next challenge here
  const nextChallenge2 = getNextChallenge(
    nextChallenge.dashedName,
    entities,
    { isDev }
  );
  if (nextChallenge2) {
    return nextChallenge2;
  }
  // whole block is coming soon
  // skip this block
  return getFirstChallengeOfNextBlock(
    current,
    entities,
    { isDev, skip: skip + 1 }
  );
}

export function getFirstChallengeOfNextSuperBlock(
  current,
  entities,
  superBlocks,
  {
    isDev = false,
    skip = 0
  } = {}
) {
  const {
    challenge: challengeMap,
    block: blockMap,
    superBlock: SuperBlockMap
  } = entities;
  const currentChallenge = challengeMap[current];
  if (!currentChallenge) {
    return null;
  }
  const block = blockMap[currentChallenge.block];
  if (!block) {
    return null;
  }
  const superBlock = SuperBlockMap[block.superBlock];
  if (!superBlock) {
    return null;
  }
  const index = superBlocks.indexOf(superBlock.dashedName);
  const newSuperBlock = SuperBlockMap[superBlocks[ index + 1 + skip]];
  if (!newSuperBlock) {
    return null;
  }
  const newBlock = blockMap[
    newSuperBlock.blocks[ 0 ]
  ];
  if (!newBlock) {
    return null;
  }
  const nextChallenge = challengeMap[newBlock.challenges[0]];
  if (isDev || !nextChallenge || !nextChallenge.isComingSoon) {
    return nextChallenge;
  }
  // coming soon challenge, grab next
  // non coming soon challenge in same block instead
  const nextChallengeInBlock = getNextChallenge(
    nextChallenge.dashedName,
    entities,
    { isDev }
  );
  if (nextChallengeInBlock) {
    return nextChallengeInBlock;
  }
  // whole block is coming soon
  // grab first challenge in next block in newSuperBlock instead
  const challengeInNextBlock = getFirstChallengeOfNextBlock(
    nextChallenge.dashedName,
    entities,
    { isDev }
  );

  if (challengeInNextBlock) {
    return challengeInNextBlock;
  }
  // whole super block is coming soon
  // skip this super block
  return getFirstChallengeOfNextSuperBlock(
    current,
    entities,
    superBlocks,
    { isDev, skip: skip + 1 }
  );
}

export function getCurrentBlockName(current, entities) {
  const { challenge: challengeMap } = entities;
  const challenge = challengeMap[current];
  return challenge.block;
}

export function getCurrentSuperBlockName(current, entities) {
  const { challenge: challengeMap, block: blockMap } = entities;
  const challenge = challengeMap[current];
  const block = blockMap[challenge.block];
  return block.superBlock;
}

// gets new mouse position
// getMouse(
//   e: MouseEvent|TouchEvent,
//   [ dx: Number, dy: Number ]
// ) => [ Number, Number ]
export function getMouse(e, [dx, dy]) {
  let { pageX, pageY, touches, changedTouches } = e;

  // touches can be empty on touchend
  if (touches || changedTouches) {
    e.preventDefault();
    // these re-assigns the values of pageX, pageY from touches
    ({ pageX, pageY } = touches[0] || changedTouches[0]);
  }

  return [pageX - dx, pageY - dy];
}
