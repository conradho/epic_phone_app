initial setup
- create an avd image
    - /Users/noob/Library/Android/sdk/tools/bin/avdmanager list

every time:
- start device `cd /Users/noob/Library/Android/sdk/tools/; emulator -avd Nexus_5X_API_25_x86`
- npm run build
- npm run server

setup apk signing
- https://gist.github.com/marty-wang/5a71e9d0a6a2c6d6263c
- then reference npm run release
