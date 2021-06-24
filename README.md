# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

### Functional Components ###
- They don't contain private state of the component
- Use Functional Component as much as possible
- Absense of 'this' keyword
- Using solution without state (but since the release of hooks, functional components can use states)
- Mainly responsible for the UI
- Stateless/Dumb/Presentational 

### Class Components ###
- They can maintain their own private data - state
- Complex UI Logic
- Provide Lifecycle Hooks
- Statefule/Smart/Container

### JSX ###
- Extension to Javascript Syntax
- Write XML like code for elements and components
- JSX tags have a tag name, attributes and children
- JSX is not necessary to write React code
- makes codes simple and elegant
- ultimately transpiles to pure javascript which is understood by the browser
- class -> className
- for -> htmlFor
- camelCase naming convention
 - onclick -> onClick

### Props vs State ###
Props
- gets passed to components
- function paramters
- props are immutable
- props - Functional Components
- this.props - Class Components

State
- state is managed within the component
- variables declared in the function body
- state can be changed
- useState Hook - Functional Components
- this.state - Class Components

### setState ###
- always make use of setState and never modify the state directly
- code has to be executed after the state has been updated ? Place that code in the call back function which is the second argument to the setState method
- when you have to update state based on the previous state value, pass in function as an argument instead of the regular object

### CSS Styling ###
1. CSS Stylesheets
2. Inline Styling
3. CSS Modules
4. CSS in JS Modules (Styled Components)

### Life Cycle Methods ###
React Version 16.4
- Mounting (when an instance of a component is being created and inserted into the DOM)
  -- constructor, static getDerivedStateFromProps, render and componentDidMount
- Updating (when a component is either rendered as a result of changes to either its props or state)
  --  static getDerivedStateFromProps, componentShouldUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate
- Unmounting (when a component is being removed from the DOM)
  -- componentWillUnmount
- Error Handling (when there is error during rendering, in a lifecycle method, or in the constructor of any child component)
  --  static getDerivedStateFromError, componentDidCatch

### Fragments ###
- hep in grouping elements without adding an extra node

### Refs ###
- access DOM nodes
- use cases - focus input field on page load