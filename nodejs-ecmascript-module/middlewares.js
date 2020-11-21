// Function expression
const middlewareOne = (req, res, next) => {
  console.log('middleware one is called');
  next();
};

const middlewareTwo = (req, res, next) => {
  console.log('middleware two is called');
  next();
};

const middlewareThree = (req, res, next) => {
  console.log('middleware three is called');
  next();
};

export { middlewareOne, middlewareTwo, middlewareThree };
