### `continuous-student-testing-server`

A group project to aggregate student test results in real time. Server side, based on Express and Sequelize.

This app shows student progress in data transformation exercises in real time. It compiles the latest submission by each student for each question she/he attempted using Jest tests in their local computers. Test results are sent to a database by a server. This is the back end, where the routes are set to read/write from/to the database.

### `installation and other relevant repositories`

To install this app, run git clone and npm install. For the project to run locally, it needs a local PostgreSQL database (in the app it is currently set to Heroku, so it needs this change when it is time to edit). This server must be running on node or nodemon.

The front end of the app is available [here](https://github.com/ajvanliere/Continuous-Testing-Client/).

The exercises and jest tests are available [here](https://github.com/kerenKi/dataTransFormationExercises).
