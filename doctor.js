const redis = require('./scripts/redis.js')

module.exports = {
  run: [
    // Rumi's queue and session state want a local Redis (see scripts/redis.js).
    redis,
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "node bin/rumi.js doctor"
      }
    }
  ]
}
