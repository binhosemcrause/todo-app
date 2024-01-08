# Steps

## Install Node and NPM

### NPM
1 - npm init
2 - npm install jquery
3 - create folder front and back

### ReactJS
1 - into front 'npx create-react-app todo-app' - (Create Template Project)

### Importants Commands
- npm start - (Run the app in development mode)
- npm test - (Run unit tests)
- npm run build - (Build a production deployable unit)
- npm install --save react-router-dom - (Add a depency to your project)

### To work with router (routing pages)
- npm install react-router-dom

### To install bootstrap
- npm install bootstrap

#### Import the css file in index.js
- import from '/bootstrap/dist/css/bootstrap.min.css'

### Install framework Axios to call backend API
- npm install axios

### To work with form, you need to install formik and moment
- npm install formik
- npm install moment


# COMMON  PROBLEMS

## 1
If you're building a Todo App and are encountering error responses for your requests, don't worry, there's an easy solution. This issue is typically caused by a missing header.


## SOLUTION

1:  Change your CrossOrigins annotation in your JAVA code to @CrossOrigins(origins = "http://localhost:3000", allowCredentials = "true")

2: Add  Origin header to your requests

'Origin': 'http://localhost:3000'