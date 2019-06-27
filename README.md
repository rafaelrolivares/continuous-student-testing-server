### `continuous-student-testing-server`

A group project to aggregate student test results in real time. Server side, based on Express and Sequelize.

This app shows student progress in data transformation exercises in real time. It compiles the latest submission by each student for each question she/he attempted using Jest tests in their local computers. Test results are sent to a database by a server. This is the back end, where the routes are set to read/write from/to the database.

### `installation and other relevant repositories`

To install and run this app:

For testing purposes you must have a PostgreSQL database running (and point to it on line 2 of file 'db.js'). If you use Docker, [here](https://docs.docker.com/engine/reference/commandline/start/) is how to do it.

Once it is up and running, go to the terminal and run the following commands:

```
$ git clone git@github.com:rafaelrolivares/continuous-student-testing-server.git
$ cd continuous-student-testing-server
$ npm install
$ nodemon .
// nodemon will restart the app after every saved changes.
```
<b>Important note</b>: if you submit mock data to test using httpie, it will not work. We recommend posting using axios or superagent.

The front end of the app is available [here](https://github.com/ajvanliere/Continuous-Testing-Client/).

The exercises and jest tests are available [here](https://github.com/kerenKi/dataTransFormationExercises).

### API documentation

The current base URL is https://continuous-testing.herokuapp.com/.

To get all students: https://continuous-testing.herokuapp.com/students.

To get all exercise groups: https://continuous-testing.herokuapp.com/exercises.

To get all questions: https://continuous-testing.herokuapp.com/questions.

To get all evaluations: https://continuous-testing.herokuapp.com/evaluations.

To get how many students have a passing result for each question: https://continuous-testing.herokuapp.com/evaluations-by-question.

To get how many questions each student has passed: https://continuous-testing.herokuapp.com/evaluations-by-student.

