# JOURNAL - A Blog Article App
`It's a basic blog PWA created using MERN stack.`

### Tech Stack
* Front-end: React.js
* Backend: Node.js using Express
* Database: MongoDB
* Password Hashing: Bcrypt and Salt
* Image Upload : Multer


### Feature
* Basic CRUD functionalities for the article like deleting, writing, updating.
* The HomePage consists of top articles of the user.
* Proper authetication and authorisation is implemented using JSON Web Tokens
* The Submitted Article Page renders the submitted articles by the user.

## Front-end

### How to run
In the project journal directory, you have to run the following commands:

```bash
    $ cd journal

    $ npm install

    $ npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

``` bash
    $ npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Deployment
### Static Server
For environments using Node, the easiest way to handle this would be to install serve and let it handle the rest:

```bash
    $ npm install -g serve
    $ serve -s build
```
The last command shown above will serve your static site on the port 5000. Like many of serve’s internal settings, the port can be adjusted using the -l or --listen flags:

``` bash
    $ serve -s build -l 4000
```
Run this command to get a full list of the options available:

## Back-end

### How to run

First, we have to installed Node.js, which can be done by :

``` bash
    sudo apt-get install node.js
```

and install npm packages by:

```bash
    npm install
```


Then, export the private keys using : 

``` bash
    $ export journal_jwtPrivateKey=<Any Keyname>
```
    and then run
``` bash
    $ node index.js
```

or you can continuously monitor the file in the terminal by running:

```bash
    $ nodemon index.js
```
Now, your web server is ruuning to serve the request by the client-side. Visit http://localhost:3001 and you will see a message saying.
