module.exports = {
  run: [
    // Rumi itself is not part of this repository. It is cloned into app/ so the
    // launcher can be updated, reset and published on its own.
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: "git clone https://github.com/Orenda-Project/rumi-platform app"
      }
    },
    // The launcher's own dependency: qrcode, which draws the WhatsApp QR as an
    // image in the setup wizard. Express comes from app/bot (see onboarding/bridge.js).
    //
    // `npm ci` rather than `npm install` everywhere, so a lockfile is never
    // rewritten -- a dirty app/ checkout would make the `git pull` in update.js
    // refuse to run. Falls back to install if a lockfile has drifted.
    {
      method: "shell.run",
      params: {
        message: "npm ci --no-fund --no-audit || npm install --no-fund --no-audit"
      }
    },
    // Rumi's mechanical install (install.sh), minus the `npm link` -- a global
    // symlink has no place in a sandboxed launcher, and `node bin/rumi.js` is
    // documented as identical.
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
    },
    // Never clobber an existing .env -- it holds every credential this
    // deployment has. install.sh takes the same care.
    {
      when: "{{!exists('app/.env')}}",
      method: "fs.copy",
      params: {
        src: "app/.env.template",
        dest: "app/.env"
      }
    },
    // Rumi's queue and session state want a Redis. conda-forge has no Windows
    // build, so Windows users paste a hosted address into the setup wizard instead.
    {
      when: "{{platform !== 'win32'}}",
      method: "shell.run",
      params: {
        message: "conda install -y -c conda-forge redis-server"
      }
    }
  ]
}
