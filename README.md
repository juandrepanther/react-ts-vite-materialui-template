# React + TypeScript + Vite + Material UI + Zustand Template

Created by running commands below:

- `yarn create vite . --template react-ts`
- `yarn install`
- `yarn add @mui/material @emotion/react @emotion/styled`
- `yarn add @mui/icons-material @mui/material @emotion/styled @emotion/react`
- `yarn add react-router-dom @types/react-router-dom`
- `yarn add zustand`
- `yarn add -D @commitlint/config-conventional @commitlint/cli`
- `yarn add husky --dev`
- `yarn husky install`
- `npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'`

# Additionally, have been added:

- Dockerfile
- nginx.conf
- .prettierrc
- etc.
- added husky + commitlint

# Deploying commands (examples):

## with docker-compose.yml file

First need to create and configure the docker-compose.yml file on remote server and then run:

- `docker compose up -d`

## with Dockerfile only

- `docker build -t app-name .`
- `docker run -d --restart=unless-stopped --network network-name --name app-name app-name`
