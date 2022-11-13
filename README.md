# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is meant as a minimal project to show that react, tailwindcss and [container-query-polyfill](https://cdn.jsdelivr.net/npm/container-query-polyfill@1/dist/container-query-polyfill.modern.js)
are not playing well together.

The example is a simle line of text that should underling at 640px and wider.

For testing the polyfill. I'm using:

- Mac Firefox 106.0.5 (64-bit)
- MacOS 12.6.1

`npm install`
`npm run prod`

Why `npm run prod`? This was working when running in development mode (`npm start`). So, I spend time implemetng it for several components only to have it fail in prod. I assume some sort of optimization is stomping on things. I have not yet found which one. In my 'real' app we use craco and I disabled minification and that did not help. IDK.

Noticed some oddity in that if I reload the page many times, it occasionally works. More often it fails.

## Available Scripts

In the project directory, you can run:

### `npm run prod`

Builds a production version of the app and then runs `server -s build` on the output.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
