var awsWrapper = require('./awsWrapper');

awsWrapper.getChildren('empty/')
    .then(console.log, console.err);

awsWrapper.getChildren('nonexist/')
    .then(console.log, console.err);

awsWrapper.getChildren('hello/')
    .then(console.log, console.err);