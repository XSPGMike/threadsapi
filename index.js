const { getThreadsProfile } = require('./threads.js');

(async() => {
  const user = await getThreadsProfile('rampcapitalllc');
  console.log(user)
})();
