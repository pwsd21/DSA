Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not Callable");
  }

  context.fn = this;
  context.fn(...args);
};

Function.prototype.myApply = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not Callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeErrir("CreateListFromArray like called on NAN Object");
  }

  context.fn = this;
  context.fn(...args);
};

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It's not Callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
