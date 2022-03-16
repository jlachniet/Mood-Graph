# Mood Graph

_A simple way to track your mental health._

<https://moodgraph.app/>

## Installation

**Prerequisites**: [Node.js 14.x](https://nodejs.org/en/download/), [Yarn 1.x](https://classic.yarnpkg.com/en/docs/getting-started), [Firebase CLI 10.x](https://firebase.google.com/docs/cli)

```bash
yarn install
firebase init
```

Create a `.env.local` file with the following environment variables:

```dosini
FIREBASE_SERVICE_ACCOUNT="<your-service-account-json-uri-encoded>"
FIREBASE_AUTH_EMULATOR_HOST="localhost:9099"
FIRESTORE_EMULATOR_HOST="localhost:8080"
```

The project is intended to work correctly with the Firebase emulator tools in dev mode or deployed to Vercel in production. Other environments may not work correctly.

## Usage

To start the dev server:

```bash
yarn dev
```

To check for warnings or errors:

```bash
yarn lint
```

## License

**Mood Graph** is released under the GNU General Public License v3.0. For more information, please see the [LICENSE](https://github.com/jlachniet/Mood-Graph/blob/main/LICENSE).
