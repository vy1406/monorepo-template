## Resources:
https://rachitabansal.medium.com/introduction-to-lerna-3fb7382a4d4e
https://github.com/lerna/lerna
https://www.linkedin.com/pulse/why-we-choose-lerna-monorepo-front-end-projects-marek-kowalski/
https://github.com/ZackDeRose/demo-trivial-packages

# Usefull commands:

npx lerna init --dryRun
npx lerna run build --scope=header --concurrency=5
npx nx graph


remix vs rollup ? 

personal presentation tips:
1. problem  + solution
2. nx + caching
3. project graph
4. publishing  - versioning

to gpt:

ok, so i need you to create a basic lerna monorepo, for my presentation.
those are the resources:

## Resources:
https://rachitabansal.medium.com/introduction-to-lerna-3fb7382a4d4e
https://github.com/lerna/lerna
https://www.linkedin.com/pulse/why-we-choose-lerna-monorepo-front-end-projects-marek-kowalski/
https://github.com/ZackDeRose/demo-trivial-packages



but my project should contain, packages folder.

inside package folder it should have 
- partner app ( app1 )
- landing page ( app2 )
- sc-lib-ui
- sc-lib-contracts
- sc-lib-configs


app1 should be a basic react app with vite.
app2 should be also basic react app with vite.


# ------ #

# Create base folder
mkdir my-monorepo && cd my-monorepo

# Init root project
npm init -y
npm install --save-dev lerna
npx lerna init

# Enable workspaces
# Update package.json
cat > package.json <<EOL
{
  "name": "my-monorepo",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "devDependencies": {
    "lerna": "^7.3.1"
  }
}
EOL

# Update lerna.json
cat > lerna.json <<EOL
{
  "packages": [
    "packages/*"
  ],
  "version": "0.0.0",
  "useWorkspaces": true
}
EOL

# Create folders
mkdir -p packages/{app1,app2,scs-ui,scs-contracts,scs-configs}

# -----------------------------
# Initialize app1 (React + Vite)
cd packages/app1
npm create vite@latest . -- --template react-ts
npm install
npm install @my-scope/scs-ui @my-scope/scs-configs @my-scope/scs-contracts
cd ../../

# Initialize app2 (React + Vite)
cd packages/app2
npm create vite@latest . -- --template react-ts
npm install
npm install @my-scope/scs-ui @my-scope/scs-configs
cd ../../

# -----------------------------
# scs-ui setup (React + TS + Tree shaking)
cd packages/scs-ui
npm init -y
npm install react react-dom
npm install --save-dev typescript vite

cat > package.json <<EOL
{
  "name": "@my-scope/scs-ui",
  "version": "1.0.0",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "build": "tsc && vite build"
  }
}
EOL

mkdir src
cat > src/Button.tsx <<EOL
import React from 'react';

export const Button = ({ label }: { label: string }) => {
  return <button>{label}</button>;
};
EOL

cat > src/index.ts <<EOL
export * from './Button';
EOL

cd ../../

# -----------------------------
# scs-contracts setup
cd packages/scs-contracts
npm init -y

cat > package.json <<EOL
{
  "name": "@my-scope/scs-contracts",
  "version": "1.0.0",
  "main": "index.js",
  "types": "index.d.ts"
}
EOL

cat > index.ts <<EOL
export interface Partner {
  id: string;
  name: string;
}

export function parsePartner(data: any): Partner {
  return {
    id: String(data.id),
    name: data.name || 'Unknown'
  };
}
EOL

cd ../../

# -----------------------------
# scs-configs setup
cd packages/scs-configs
npm init -y

cat > package.json <<EOL
{
  "name": "@my-scope/scs-configs",
  "version": "1.0.0"
}
EOL

# example shared tsconfig
cat > tsconfig.base.json <<EOL
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
EOL

# example eslint config
cat > .eslintrc.js <<EOL
module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single']
  }
};
EOL

cd ../../

# -----------------------------
# Bootstrap the workspace
npx lerna bootstrap

