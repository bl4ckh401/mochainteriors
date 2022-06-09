# Mocha Interior Designs

### Introduction

This project was build with react and Django. Interior design web page.
Color Schemes are:
White,
Gray,
Gold

## To Run this app in Development.

First you need to clone the repository into your local machine, After that. Run

##### React front End

## `npm install`

This is to ensure that all dependencies are installed into your local machine.

##### Django backEnd

Also on the this directory make sure to also install the django dependencies in the requirements.txt file.
Do this by:

Create virtualenv and install all requirements in **backend** directory:

    cd shopping-cart/backend/
    python3 -m venv venv_name
    source venv_name/bin/activate
    pip install -r requirements.txt

Prepare database in postgreSQL:

    sudo -u postgres psql
    CREATE DATABASE mochainteriors; # Don't forget the semicolon in the end

    # Quit postgresql shell
    \q

Set up database connection in **shopping-cart/backend/backend/settings.py** in DATABASES section:

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'mochainteriors',
            'USER': 'YOUR_USERNAME', # replace with your own username
            'PASSWORD': 'YOUR_PASSWORD', # replace with your own password
            'HOST': 'localhost',
            'PORT': ''
        }
    }

## `pip install -r requirements.txt`

Make sure this is done in a virtualenv. This installs all the dependencies listed in the requirements.txt file

Fire up **backend** server:

    cd shopping-cart/backend/
    python manage.py migrate
    python manage.py runserver

Open another terminal for **frontend** server:

    cd shopping-cart/frontend/
    yarn start

or with npm:

    npm start

## Available Scripts

In the project directory, you can run:

## FRONT END

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

## BACKEND

### `python3 ./manage.py makemigrations`

Creates builds to the model.py file and prepares for the migratioin.

### `python3 ./manage.py migrate`

makes changes to the database and imporrts the new tables.

### `python3 ./manage.py runserver`

starts the development server and ensures the django app is running

## Built With

- [React](https://facebook.github.io/react/) - A JavaScript library for building UI

* [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps
* [Django REST framework](http://www.django-rest-framework.org/) - A powerful and flexible toolkit for building Web APIs
* [django-rest-framework-jwt](http://getblimp.github.io/django-rest-framework-jwt/) - JSON Web Token Authentication support for Django REST framework
