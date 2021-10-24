# Would You Rather - React-Redux Final Project
## Author
Developer: Pedram Rahmanian
contact: prahmanian @gmail .com

This is my final project for the Udacity React Nanodegree. The objective was to simulate a real-world implementation of React and Redux.
In this app, I developed a version of the classic 'Would you Rather' game, in which players are tasked to pick between two options.

## About This App
This app is a version of the classic 'Would you Rather...' game. It features a list of questions asking the player which of two options they would rather pick. Players are only allowed to answer a question once, so once submitted it is locked in. Players can both ask new questions and answer existing questions. A player's score is the number of questions asked and answered. The current rankings are displayed on our leaderboard page.


## Installation and Startup
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
At the project directory in the terminal, you can install the dependencies by running the command `yarn install`.
Once all dependencies are installed, you can start the development server by running the `yarn start` command.

```bash
yarn install
yarn start
```

## Supported Functionality
The app supports user sign up, switching between users, answering questions as a specific user, asking new questions, and viewing results. The app also provides a real-time leaderboard with scores calculated off user participation.

## Data Persistence
The initial data is loaded from the given starter files. This app leverages localStorage to persist the state of our redux store, allowing for an improved UX when reloading the page from the browser or directly accessing a path. When a user directly access a path without being authenticated, they are rerouted to login and upon authentication are rerouted back to their rquested path.

### Supported Actions
- SIGN_IN_USER
- SIGN_OUT_USER
- ADD_USER
- ADD_QUESTION
- SAVE_ANSWER

## Views and Components

### /Dashboard
The Dashboard component serves as the root for a loged in user. A toggleable view presents unanswered / answered questions, rendering a preview with a link to open the question.


### /Questions/:id
The Question component displays the full content of a question in an interactable view. Users can submit their vote which dispatches the SAVE_ANSWER action (this is irreversable). Once a user has submited a response to a specific question, the results of that question will be displayed.

### /Login
The Login component allows one to select a user to play as. On submit, the SIGN_IN_USER action is dispatched and the user is redirected to the dashboard.

### /Signup
The Signup component allows for the creation of a new user. It dispatches the ADD_USER action.

### /Add
The AddQuestion component allows an euthenticated user to post a new question to the game. 

### /Leaderboard
The Leaderboard component displays users in decreasing order of engagement, calculated as the number of questions asked and answered by that user. No actions get dispatched by this component.





## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `yarn install`
Installs project dependencies listed in package.json file.

##### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

##### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

##### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

##### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

##### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

##### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
