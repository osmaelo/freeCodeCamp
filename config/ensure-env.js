require('dotenv').config();

const fs = require('fs-extra');

const env = require('./env');

fs.access('./api-server/server/rev-manifest.json', function(err) {
  if (err) {
    console.log('\n\ncreating manifest\n\n');
    return fs.writeFileSync('./api-server/server/rev-manifest.json', '{}');
  }
  console.log('\n\nrev-manifest present\n\n');
  return null;
});

fs.access('./api-server/server/resources/pathMigration.json', err => {
  if (err) {
    console.log('\n\ncreating pathMigration\n\n');
    return fs.writeFileSync(
      './api-server/server/resources/pathMigration.json',
      '{}'
    );
  }
  console.log('\n\npathMigration present\n\n');
  return null;
});

fs.ensureDir('./client/config/').then(() =>
  fs.writeFileSync('./client/config/env.json', JSON.stringify(env))
);
