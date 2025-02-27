import {makeLines} from 'nodesplash';
import {readPackageSync} from 'read-pkg';

const logBanner = () => {
  console.log(makeLines({
    user: 'jocmp',
    repository: 'muse',
    version: readPackageSync().version,
    madeByPrefix: 'Made with <3 by ',
    buildDate: process.env.BUILD_DATE ? new Date(process.env.BUILD_DATE) : undefined,
    commit: process.env.COMMIT_HASH ?? 'unknown',
  }).join('\n'));
  console.log('\n');
};

export default logBanner;
