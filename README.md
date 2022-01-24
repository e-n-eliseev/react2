# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
+npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader webpack webpack-cli style-loader webpack-dev-server
+
Security
If you didn’t already notice, I removed my API-key when I pasted my code in for the getForecast function. React is a front-end framework, so all of our code gets sent to the client. That would mean our API-key could be viewed by anyone that was able to see our source code if they opened up the developer tools.

If we wanted to create an optimized build of our application we could run npm run build and all of our code would be made small and bundled for performance. Even if we put the API-key in a .env file and imported it with process.env.REACT_AP_API_KEY (this is built-in support for non-sensitive environment variables) our key could still be found.

What that means is this code should not be put on a server, or CDN, to maintain the integrity of our API-key. I can only recommend that you set up a backend Node.js server for our weather app.

What we can prevent is committing our API-key to Github when we share it with version control. This is where the /.env file is useful.

Notice that when the app was created for us a /.gitignore file was created automatically at the root of the project directory. Files and folders in this file will not be committed to remote repositories. Explaining version control in depth is outside the scope of this article, so please bear with me.

Inside this file there are a few .env files.

.env.local
.env.development.local
.env.test.local
.env.production.local
We are going to create a permanent .env file named .env because our API-key is not a test or development key.

Add .env to our .gitignore file.
Create the .env file at the root of our directory. Inside the file, add the following line:
REACT_APP_API_KEY=yourapikey
It’s important that the variable starts with ‘REACT_APP_’. If it doesn’t it will not be recognized.

In Forecast.js, replace your current API-key with process.env.REACT_APP_API_KEY. The line should like the line below:
...
           "x-rapidapi-key": process.env.REACT_APP_API_KEY
...
Restart the development server (Ctrl+C in bash and then npm start to restart it).
Test app by entering a city name.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
