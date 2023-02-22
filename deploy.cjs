const ghPages = require('gh-pages');

ghPages.publish('dist', {
  branch: 'deploy',
  repo: 'https://github.com/mjsdo/clock1.git',
});
