https://threads.net API to retrieve threads and post threads from scripts.

currently only commonjs.

Usage:
```js
const { getThreadsProfile, getUserThreads } = require("./threads.js");
(async() => {
  const user = await getThreadsProfile('zuck'); // profile metadata
  const threads = await getUserThreads('zuck'); // actual threads
})();
```
