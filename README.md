# anto-bug-bounty-challenge

Created with CodeSandbox.

## Frontend Bug Bounty Challenge

This solution fixes the bugs listed on the home page:

- Adds stable React keys for the issue list.
- Renders the `<b>known</b>` i18n marker as bold text without changing the English locale.
- Stores the fetched user in the MobX `user` field so the avatar appears.
- Handles partial user names safely when building avatar initials.
- Cleans up the countdown interval on unmount and prevents negative display values.
- Adds an English/German language switcher and German locale strings.

## Verification

Run the unit tests with:

```bash
CI=true npm test -- --watchAll=false
```

For a production build on modern Node versions, `react-scripts@4` needs the legacy OpenSSL flag. The existing ESLint plugin also has parser issues with this scaffold, so the build can be checked with:

```bash
DISABLE_ESLINT_PLUGIN=true NODE_OPTIONS=--openssl-legacy-provider npm run build
```
