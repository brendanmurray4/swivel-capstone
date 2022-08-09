# swivel-app

## Getting Started

The setup this project uses is best suited for VSCode. You may use other editors, however, you must then follow code style guides and lint your code manually if no automation is available.

Once you open the `swivel-app` project in VSCode it will ask you to install some recommended extensions. Install these. If you are not prompted to install the extensions, the following are necessary:
- Eslint - Code Linter

This is a React-Native project built with Expo CLI. To set up your environment please make sure you have the following installed:
- [NodeJS v12+](https://nodejs.org/en/) - JavaScript Runtime (`node --version`)
- [NPM](https://docs.npmjs.com/) - Node Package Manager (`npm --version`), used to install Yarn, our main package manager
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) - Package Manager (`yarn --version`)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) - Development Tools (`expo-cli --version`)
- Expo Go - Search for this app in the Android or iOS store, and install it on your phone.

To get started developing this project locally, open a terminal and enter the `swivel-app` root directory.

## Pierre: To install yarn on windows 10, you may need to go to Powershell (Admin) and 
## Set-ExecutionPolicy RemoteSigned -- To allow Windows to run scripts 
## Set-ExecutionPolicy Restricted -- To disable Windows to run scripts once you're done using yarn

Install all of required dependencies
```
yarn install
```

To run the app locally, follow the instructions below. You will see a QRCode pop up which you will scan on your phone to preview the app.

```
yarn start


yarn run v1.22.17
$ expo start
Starting project at /home/nafana/src/swivel/swivel-app
Starting Metro Bundler
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █ ██▀▀ █▄▀█ ▄▄▄▄▄ █
█ █   █ █  ▀█ ▀█▀██ █   █ █
█ █▄▄▄█ █▀  █▄█▀▄██ █▄▄▄█ █
█▄▄▄▄▄▄▄█▄█ ▀▄█▄█▄█▄▄▄▄▄▄▄█
█  ██  ▄███▄█▄▀▄ ███ ▀▄▄ ▄█
█▄█▄▀▄▄▄ █ ▄█▀█▀ ▀▀ █▄  ▀██
█ ▄▀ ▀ ▄█ ▀▀▄▀█▄▀▄▀▄▀▀▄ ▀██
███▄▄▄█▄  ▄▄ ▄█▀▄▄▄█▄▀ ▀███
█▄▄▄█▄█▄█▀█▀█▄▀▄▄ ▄▄▄ ▀ ▄▄█
█ ▄▄▄▄▄ █▀ ██▀██▀ █▄█ ▀▀▀██
█ █   █ █▄▄ ▄ ▀▄█▄▄ ▄▄▀ ▀▀█
█ █▄▄▄█ █▀█  ███▄██▄▀█▀▀ ██
█▄▄▄▄▄▄▄█▄▄▄███▄████▄▄▄▄▄▄█

› Metro waiting on exp://192.168.1.74:19000
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
Started Metro Bundler
```
Open the Expo Go app on your phone. Scan the QRCode in your terminal (*on Android you can do this through the app, on iOS you will need to do this through your camera app*). A preview of the app will be shown to you.

## Development

Please make sure you are following the coding standards and linting guidelines. Before you push any commits you must check if your code follows all linting checks:

```
yarn lint:fix
```

If you encounter any errors please fix them. Eslint integrates with VSCode and you will see all these errors in your editor directly without having to run this command. If you cannot see these errors, your configuration is not setup properly.


