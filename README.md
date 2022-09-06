# deploy this

When you deploy this app it will fail with this error log as the legacy `_middlware.*` file seems to force the use of nodejs v14.x

```
[11:26:07.631] Retrieving list of deployment files...
[11:26:10.646] Downloading 24 deployment files...
[11:26:11.481] Warning: This framework uses the legacy File System API V2 which is no longer receiving updates. The maximum Node.js version supported is 14.
[11:26:11.505] Installing build runtime...
[11:26:20.686] Build runtime installed: 9.181s
[11:26:21.162] Looking up build cache...
[11:26:21.671] Build Cache not found
[11:26:22.109] yarn install v1.22.17
[11:26:22.183] [1/5] Validating package.json...
[11:26:22.189] error nextjs-vercel-middleware-bug@0.0.0: The engine "node" is incompatible with this module. Expected version ">=16.0.0". Got "14.19.3"
[11:26:22.201] error Found incompatible module.
[11:26:22.201] info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
[11:26:22.213] Error: Command "yarn install" exited with 1
```

### Fix

Make sure to name your middlware file `middlware.ts`/`middleware.js` and it's in your root dir `/`/

Docs https://nextjs.org/docs/messages/middleware-upgrade-guide