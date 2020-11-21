// Function declaration
function middlewareOne(req, res, next) {
  console.log('middleware one is called');
  next();
}

function middlewareTwo(req, res, next) {
  console.log('middleware two is called');
  next();
}

function middlewareThree(req, res, next) {
  console.log('middleware three is called');
  next();
}

module.exports = { middlewareOne, middlewareTwo, middlewareThree };
