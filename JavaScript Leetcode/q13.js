// 2715. Timeout Cancellation
// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of t, fn should be called with args passed as parameters unless cancelFn was invoked before the delay of t milliseconds elapses, specifically at cancelT ms. In that case, fn should never be called.

var cancellable = function(fn, args, t) {
    var timeout = setTimeout(() =>
        fn(...args), t);
 
    var cancelFn = () => clearTimeout(timeout);

    return cancelFn;
};