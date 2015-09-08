"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accum = accum;
exports.compose = compose;
exports.dedupe = dedupe;
exports.filter = filter;
exports.forEach = forEach;
exports.lastValue = lastValue;
exports.map = map;
exports.nthValue = nthValue;
exports.partition = partition;
exports.pluck = pluck;
exports.skip = skip;
exports.take = take;
var marked0$0 = [accum, compose, dedupe, filter, map, partition, pluck].map(regeneratorRuntime.mark);

function accum(gen) {
  var results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v;

  return regeneratorRuntime.wrap(function accum$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        results = [];
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 4;
        _iterator = gen[Symbol.iterator]();

      case 6:
        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
          context$1$0.next = 14;
          break;
        }

        v = _step.value;

        results = results.concat(v);
        context$1$0.next = 11;
        return results.slice();

      case 11:
        _iteratorNormalCompletion = true;
        context$1$0.next = 6;
        break;

      case 14:
        context$1$0.next = 20;
        break;

      case 16:
        context$1$0.prev = 16;
        context$1$0.t0 = context$1$0["catch"](4);
        _didIteratorError = true;
        _iteratorError = context$1$0.t0;

      case 20:
        context$1$0.prev = 20;
        context$1$0.prev = 21;

        if (!_iteratorNormalCompletion && _iterator["return"]) {
          _iterator["return"]();
        }

      case 23:
        context$1$0.prev = 23;

        if (!_didIteratorError) {
          context$1$0.next = 26;
          break;
        }

        throw _iteratorError;

      case 26:
        return context$1$0.finish(23);

      case 27:
        return context$1$0.finish(20);

      case 28:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this, [[4, 16, 20, 28], [21,, 23, 27]]);
}

function compose() {
  for (var _len = arguments.length, gens = Array(_len), _key = 0; _key < _len; _key++) {
    gens[_key] = arguments[_key];
  }

  var i;
  return regeneratorRuntime.wrap(function compose$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        i = 0;

      case 1:
        if (!(i < gens.length)) {
          context$1$0.next = 6;
          break;
        }

        return context$1$0.delegateYield(gens[i], "t0", 3);

      case 3:
        i++;
        context$1$0.next = 1;
        break;

      case 6:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[1], this);
}

function dedupe(gen, _eqFn) {
  var previousValue, valueSeen, eqFn, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, v;

  return regeneratorRuntime.wrap(function dedupe$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        previousValue = undefined;
        valueSeen = false;
        eqFn = _eqFn || identity;
        _iteratorNormalCompletion2 = true;
        _didIteratorError2 = false;
        _iteratorError2 = undefined;
        context$1$0.prev = 6;
        _iterator2 = gen[Symbol.iterator]();

      case 8:
        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
          context$1$0.next = 18;
          break;
        }

        v = _step2.value;

        if (!(!valueSeen || !eqFn(v, previousValue))) {
          context$1$0.next = 13;
          break;
        }

        context$1$0.next = 13;
        return v;

      case 13:

        valueSeen = true;
        previousValue = v;

      case 15:
        _iteratorNormalCompletion2 = true;
        context$1$0.next = 8;
        break;

      case 18:
        context$1$0.next = 24;
        break;

      case 20:
        context$1$0.prev = 20;
        context$1$0.t0 = context$1$0["catch"](6);
        _didIteratorError2 = true;
        _iteratorError2 = context$1$0.t0;

      case 24:
        context$1$0.prev = 24;
        context$1$0.prev = 25;

        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
          _iterator2["return"]();
        }

      case 27:
        context$1$0.prev = 27;

        if (!_didIteratorError2) {
          context$1$0.next = 30;
          break;
        }

        throw _iteratorError2;

      case 30:
        return context$1$0.finish(27);

      case 31:
        return context$1$0.finish(24);

      case 32:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[2], this, [[6, 20, 24, 32], [25,, 27, 31]]);
}

function filter(gen, fn, thisValue) {
  var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, v;

  return regeneratorRuntime.wrap(function filter$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iteratorNormalCompletion3 = true;
        _didIteratorError3 = false;
        _iteratorError3 = undefined;
        context$1$0.prev = 3;
        _iterator3 = gen[Symbol.iterator]();

      case 5:
        if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
          context$1$0.next = 13;
          break;
        }

        v = _step3.value;

        if (!fn.call(thisValue, v)) {
          context$1$0.next = 10;
          break;
        }

        context$1$0.next = 10;
        return v;

      case 10:
        _iteratorNormalCompletion3 = true;
        context$1$0.next = 5;
        break;

      case 13:
        context$1$0.next = 19;
        break;

      case 15:
        context$1$0.prev = 15;
        context$1$0.t0 = context$1$0["catch"](3);
        _didIteratorError3 = true;
        _iteratorError3 = context$1$0.t0;

      case 19:
        context$1$0.prev = 19;
        context$1$0.prev = 20;

        if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
          _iterator3["return"]();
        }

      case 22:
        context$1$0.prev = 22;

        if (!_didIteratorError3) {
          context$1$0.next = 25;
          break;
        }

        throw _iteratorError3;

      case 25:
        return context$1$0.finish(22);

      case 26:
        return context$1$0.finish(19);

      case 27:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[3], this, [[3, 15, 19, 27], [20,, 22, 26]]);
}

function forEach(gen, fn, thisValue) {
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = gen[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var v = _step4.value;

      fn.call(thisValue, v);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
        _iterator4["return"]();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
}

function lastValue(gen) {
  var arr = Array.from(gen);
  return arr[arr.length - 1];
}

function map(gen, fn, thisValue) {
  var v, result;
  return regeneratorRuntime.wrap(function map$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        if (!true) {
          context$1$0.next = 11;
          break;
        }

        v = gen.next();

        if (!(v.done && !v.value)) {
          context$1$0.next = 4;
          break;
        }

        return context$1$0.abrupt("return");

      case 4:
        result = fn.call(thisValue, v.value);

        if (!v.done) {
          context$1$0.next = 7;
          break;
        }

        return context$1$0.abrupt("return", result);

      case 7:
        context$1$0.next = 9;
        return result;

      case 9:
        context$1$0.next = 0;
        break;

      case 11:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[4], this);
}

function nthValue(gen, n) {
  for (var i = 0; i < n; i++) {
    gen.next();
  }

  return gen.next().value;
}

function partition(gen, fn) {
  var yes, no, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, v;

  return regeneratorRuntime.wrap(function partition$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        yes = [];
        no = [];
        _iteratorNormalCompletion5 = true;
        _didIteratorError5 = false;
        _iteratorError5 = undefined;
        context$1$0.prev = 5;
        _iterator5 = gen[Symbol.iterator]();

      case 7:
        if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
          context$1$0.next = 15;
          break;
        }

        v = _step5.value;

        if (fn(v)) {
          yes.push(v);
        } else {
          no.push(v);
        }

        context$1$0.next = 12;
        return [yes.slice(), no.slice()];

      case 12:
        _iteratorNormalCompletion5 = true;
        context$1$0.next = 7;
        break;

      case 15:
        context$1$0.next = 21;
        break;

      case 17:
        context$1$0.prev = 17;
        context$1$0.t0 = context$1$0["catch"](5);
        _didIteratorError5 = true;
        _iteratorError5 = context$1$0.t0;

      case 21:
        context$1$0.prev = 21;
        context$1$0.prev = 22;

        if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
          _iterator5["return"]();
        }

      case 24:
        context$1$0.prev = 24;

        if (!_didIteratorError5) {
          context$1$0.next = 27;
          break;
        }

        throw _iteratorError5;

      case 27:
        return context$1$0.finish(24);

      case 28:
        return context$1$0.finish(21);

      case 29:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[5], this, [[5, 17, 21, 29], [22,, 24, 28]]);
}

function pluck(gen, name) {
  var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, v;

  return regeneratorRuntime.wrap(function pluck$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iteratorNormalCompletion6 = true;
        _didIteratorError6 = false;
        _iteratorError6 = undefined;
        context$1$0.prev = 3;
        _iterator6 = gen[Symbol.iterator]();

      case 5:
        if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
          context$1$0.next = 12;
          break;
        }

        v = _step6.value;
        context$1$0.next = 9;
        return v[name];

      case 9:
        _iteratorNormalCompletion6 = true;
        context$1$0.next = 5;
        break;

      case 12:
        context$1$0.next = 18;
        break;

      case 14:
        context$1$0.prev = 14;
        context$1$0.t0 = context$1$0["catch"](3);
        _didIteratorError6 = true;
        _iteratorError6 = context$1$0.t0;

      case 18:
        context$1$0.prev = 18;
        context$1$0.prev = 19;

        if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
          _iterator6["return"]();
        }

      case 21:
        context$1$0.prev = 21;

        if (!_didIteratorError6) {
          context$1$0.next = 24;
          break;
        }

        throw _iteratorError6;

      case 24:
        return context$1$0.finish(21);

      case 25:
        return context$1$0.finish(18);

      case 26:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[6], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}

function skip(gen, n) {
  for (var i = 0; i < n; i++) {
    if (gen.next().done) {
      return;
    }
  }
}

function take(gen, n) {
  var results = [];

  for (var i = 0; i < n; i++) {
    var v = gen.next();

    results.push(v.value);

    if (v.done) {
      break;
    }
  }

  return results;
}

function identity(a, b) {
  return a === b;
}