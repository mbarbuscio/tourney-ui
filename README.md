# Tourney at Harrenhal - UI App

The UI app for the Tourney at Harrenhal project. Built with Angular2 using Angular-CLI.

## Development server
* Run `ng serve` to launch the app in the dev server. Navigate to `http://localhost:4200/`
* The app will automatically reload if you change any of the source files

## Running unit tests
* Run `ng test` to execute the unit tests via Karma
* Run `ng test --code-coverage` to execute the unit tests and generate coverage report (in `/coverage` directory)

## Running end-to-end tests
* Run `ng e2e` to execute the end-to-end tests via Protractor
* Before running the tests make sure you are running the app via `ng serve`

## Running the UI app with backend service
* Run `ng serve --proxy-config proxy.conf.json` to launch the UI app with the proxy to the backend service.
* Ensure that the backend service is running. See the service repo for how to: https://github.com/pinbar/tourney-at-harrenhal