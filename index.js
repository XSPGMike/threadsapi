const { getThreadsProfile, getUserThreads } = require('./threads.js');

(async() => {
  const user = await getThreadsProfile('zuck');
  const threads = await getUserThreads('zuck');
  console.log(
    user,
    threads
  )
})();
