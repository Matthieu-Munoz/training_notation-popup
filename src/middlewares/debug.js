function debugMiddleWare() {
  return function (next) {
    return function (action) {
      next(action);
    };
  };
}

export default debugMiddleWare;
