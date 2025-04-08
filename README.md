# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

#Requirements
Node.js (version 18 or higher)

#Project setup
We’ll be using Vite to set up our project. Vite is a modern build tool optimized for speed and performance.

Open a terminal and create a new Vite project with the following command:

npm create vite@latest

You will be asked to name your project. For this tutorial, let’s go with “scanbot-tut”.

Then, when prompted to select a framework, choose React and select TypeScript as the variant.

#Now run:
cd scanbot-tut
npm install
npm run dev

#Initializing the SDK
Open another terminal, navigate to your project folder, and install the scanbot-web-sdk package with the following command:
npm i scanbot-web-sdk
The SDK contains WebAssembly binaries that should be hosted on your server. We ship these binaries with the npm package. Since Node.js doesn’t automatically copy the binaries to the target, you need to manually copy them to the desired destination (we recommend the public asset directory).

You can quickly copy them from node_modules to a folder called wasm in the public asset directory using the following command:

mkdir -p public/wasm && cp -r node_modules/scanbot-web-sdk/bundle/bin/barcode-scanner/* public/wasm

💡 To ensure these files are always copied to the same directory for all users and updated when the SDK itself is updated, you can add the command as a post-installation script to your package.json:

"postinstall": "mkdir -p public/wasm && cp -r node_modules/scanbot-web-sdk/bundle/bin/barcode-scanner/* public/wasm"

Back in App.tsx, add the code to import ScanbotSDK at the top of the file:

import ScanbotSDK from 'scanbot-web-sdk/ui';
