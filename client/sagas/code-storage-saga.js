import { Observable } from 'rx';
import store from 'store';

import { makeToast } from '../../common/app/toasts/redux/actions';
import types from '../../common/app/routes/challenges/redux/types';
import {
  savedCodeFound,
  updateMain
} from '../../common/app/routes/challenges/redux/actions';
import {
  updateContents
} from '../../common/utils/polyvinyl';

const legacyPrefixes = [
  'Bonfire: ',
  'Waypoint: ',
  'Zipline: ',
  'Basejump: ',
  'Checkpoint: '
];
const legacyPostfix = 'Val';

function getCode(id) {
  if (store.has(id)) {
    return store.get(id);
  }
  return null;
}

function getLegacyCode(legacy) {
  const key = legacy + legacyPostfix;
  let code = null;
  if (store.has(key)) {
    code = '' + store.get(key);
    store.remove(key);
    return code;
  }
  return legacyPrefixes.reduce((code, prefix) => {
    if (code) {
      return code;
    }
    return store.get(prefix + key);
  }, null);
}

function legacyToFile(code, files, key) {
  return { [key]: updateContents(code, files[key]) };
}

export default function codeStorageSaga(actions$, getState) {
  return actions$
    .filter(({ type }) => (
      type === types.saveCode ||
      type === types.loadCode
    ))
    .flatMap(({ type }) => {
      let finalFiles;
      const {
        challengesApp: {
          id = '',
          files = {},
          legacyKey = '',
          key
        }
      } = getState();
      if (type === types.saveCode) {
        store.set(id, files);
        return null;
      }

      const codeFound = getCode(id);
      if (codeFound) {
        finalFiles = codeFound;
      } else {
        const legacyCode = getLegacyCode(legacyKey);
        if (legacyCode) {
          finalFiles = legacyToFile(legacyCode, files, key);
        }
      }

      if (finalFiles) {
        return Observable.of(
          makeToast({
            message: 'I found some saved work. Loading now'
          }),
          savedCodeFound(finalFiles),
          updateMain()
        );
      }
      return Observable.empty();
    });
}
