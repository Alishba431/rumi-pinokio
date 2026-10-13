module.exports = {
  // Back to a fresh download. app/ holds Rumi, its dependencies, your .env and
  // the linked WhatsApp session, so all of those go with it.
  run: [
    {
      method: "fs.rm",
      params: {
        path: "app"
      }
    },
    {
      method: "fs.rm",
      params: {
        path: "node_modules"
      }
    }
  ]
}
