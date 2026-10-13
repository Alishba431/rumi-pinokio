module.exports = {
  run: [
    // The launcher scripts...
    {
      method: "shell.run",
      params: {
        message: "git pull"
      }
    },
    // ...and Rumi itself, from github.com/Orenda-Project/rumi-platform.
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "git pull"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "npm ci --no-fund --no-audit || npm install --no-fund --no-audit"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "npm ci --no-fund --no-audit || npm install --no-fund --no-audit"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/bot",
        message: "npm ci --no-fund --no-audit || npm install --no-fund --no-audit"
      }
    }
  ]
}
