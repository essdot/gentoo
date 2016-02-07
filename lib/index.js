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
exports.loop = loop;
exports.everyN = everyN;

var _marked = [accum, compose, dedupe, filter, map, partition, pluck, loop, everyN].map(regeneratorRuntime.mark);

function accum(gen) {
  var results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, v;

  return regeneratorRuntime.wrap(function accum$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          results = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 4;
          _iterator = gen[Symbol.iterator]();

        case 6:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 14;
            break;
          }

          v = _step.value;

          results = results.concat(v);
          _context.next = 11;
          return results.slice();

        case 11:
          _iteratorNormalCompletion = true;
          _context.next = 6;
          break;

        case 14:
          _context.next = 20;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](4);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 20:
          _context.prev = 20;
          _context.prev = 21;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 23:
          _context.prev = 23;

          if (!_didIteratorError) {
            _context.next = 26;
            break;
          }

          throw _iteratorError;

        case 26:
          return _context.finish(23);

        case 27:
          return _context.finish(20);

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[4, 16, 20, 28], [21,, 23, 27]]);
}

function compose() {
  for (var _len = arguments.length, gens = Array(_len), _key = 0; _key < _len; _key++) {
    gens[_key] = arguments[_key];
  }

  var i;
  return regeneratorRuntime.wrap(function compose$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < gens.length)) {
            _context2.next = 6;
            break;
          }

          return _context2.delegateYield(gens[i], "t0", 3);

        case 3:
          i++;
          _context2.next = 1;
          break;

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function dedupe(gen, _eqFn) {
  var previousValue, valueSeen, eqFn, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _v;

  return regeneratorRuntime.wrap(function dedupe$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          previousValue = undefined;
          valueSeen = false;
          eqFn = _eqFn || identity;
          _iteratorNormalCompletion2 = true;
          _didIteratorError2 = false;
          _iteratorError2 = undefined;
          _context3.prev = 6;
          _iterator2 = gen[Symbol.iterator]();

        case 8:
          if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
            _context3.next = 18;
            break;
          }

          _v = _step2.value;

          if (!(!valueSeen || !eqFn(_v, previousValue))) {
            _context3.next = 13;
            break;
          }

          _context3.next = 13;
          return _v;

        case 13:

          valueSeen = true;
          previousValue = _v;

        case 15:
          _iteratorNormalCompletion2 = true;
          _context3.next = 8;
          break;

        case 18:
          _context3.next = 24;
          break;

        case 20:
          _context3.prev = 20;
          _context3.t0 = _context3["catch"](6);
          _didIteratorError2 = true;
          _iteratorError2 = _context3.t0;

        case 24:
          _context3.prev = 24;
          _context3.prev = 25;

          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }

        case 27:
          _context3.prev = 27;

          if (!_didIteratorError2) {
            _context3.next = 30;
            break;
          }

          throw _iteratorError2;

        case 30:
          return _context3.finish(27);

        case 31:
          return _context3.finish(24);

        case 32:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[6, 20, 24, 32], [25,, 27, 31]]);
}

function filter(gen, fn, thisValue) {
  var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _v2;

  return regeneratorRuntime.wrap(function filter$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _iteratorNormalCompletion3 = true;
          _didIteratorError3 = false;
          _iteratorError3 = undefined;
          _context4.prev = 3;
          _iterator3 = gen[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
            _context4.next = 13;
            break;
          }

          _v2 = _step3.value;

          if (!fn.call(thisValue, _v2)) {
            _context4.next = 10;
            break;
          }

          _context4.next = 10;
          return _v2;

        case 10:
          _iteratorNormalCompletion3 = true;
          _context4.next = 5;
          break;

        case 13:
          _context4.next = 19;
          break;

        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](3);
          _didIteratorError3 = true;
          _iteratorError3 = _context4.t0;

        case 19:
          _context4.prev = 19;
          _context4.prev = 20;

          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }

        case 22:
          _context4.prev = 22;

          if (!_didIteratorError3) {
            _context4.next = 25;
            break;
          }

          throw _iteratorError3;

        case 25:
          return _context4.finish(22);

        case 26:
          return _context4.finish(19);

        case 27:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[3, 15, 19, 27], [20,, 22, 26]]);
}

function forEach(gen, fn, thisValue) {
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = gen[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var _v3 = _step4.value;

      fn.call(thisValue, _v3);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
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
  var _v4, result;

  return regeneratorRuntime.wrap(function map$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          if (!true) {
            _context5.next = 11;
            break;
          }

          _v4 = gen.next();

          if (!(_v4.done && !_v4.value)) {
            _context5.next = 4;
            break;
          }

          return _context5.abrupt("return");

        case 4:
          result = fn.call(thisValue, _v4.value);

          if (!_v4.done) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", result);

        case 7:
          _context5.next = 9;
          return result;

        case 9:
          _context5.next = 0;
          break;

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked[4], this);
}

function nthValue(gen, n) {
  for (var _i = 0; _i < n; _i++) {
    gen.next();
  }

  return gen.next().value;
}

function partition(gen, fn) {
  var yes, no, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _v5;

  return regeneratorRuntime.wrap(function partition$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          yes = [];
          no = [];
          _iteratorNormalCompletion5 = true;
          _didIteratorError5 = false;
          _iteratorError5 = undefined;
          _context6.prev = 5;
          _iterator5 = gen[Symbol.iterator]();

        case 7:
          if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
            _context6.next = 15;
            break;
          }

          _v5 = _step5.value;

          if (fn(_v5)) {
            yes.push(_v5);
          } else {
            no.push(_v5);
          }

          _context6.next = 12;
          return [yes.slice(), no.slice()];

        case 12:
          _iteratorNormalCompletion5 = true;
          _context6.next = 7;
          break;

        case 15:
          _context6.next = 21;
          break;

        case 17:
          _context6.prev = 17;
          _context6.t0 = _context6["catch"](5);
          _didIteratorError5 = true;
          _iteratorError5 = _context6.t0;

        case 21:
          _context6.prev = 21;
          _context6.prev = 22;

          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }

        case 24:
          _context6.prev = 24;

          if (!_didIteratorError5) {
            _context6.next = 27;
            break;
          }

          throw _iteratorError5;

        case 27:
          return _context6.finish(24);

        case 28:
          return _context6.finish(21);

        case 29:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked[5], this, [[5, 17, 21, 29], [22,, 24, 28]]);
}

function pluck(gen, name) {
  var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _v6;

  return regeneratorRuntime.wrap(function pluck$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _iteratorNormalCompletion6 = true;
          _didIteratorError6 = false;
          _iteratorError6 = undefined;
          _context7.prev = 3;
          _iterator6 = gen[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
            _context7.next = 12;
            break;
          }

          _v6 = _step6.value;
          _context7.next = 9;
          return _v6[name];

        case 9:
          _iteratorNormalCompletion6 = true;
          _context7.next = 5;
          break;

        case 12:
          _context7.next = 18;
          break;

        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](3);
          _didIteratorError6 = true;
          _iteratorError6 = _context7.t0;

        case 18:
          _context7.prev = 18;
          _context7.prev = 19;

          if (!_iteratorNormalCompletion6 && _iterator6.return) {
            _iterator6.return();
          }

        case 21:
          _context7.prev = 21;

          if (!_didIteratorError6) {
            _context7.next = 24;
            break;
          }

          throw _iteratorError6;

        case 24:
          return _context7.finish(21);

        case 25:
          return _context7.finish(18);

        case 26:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked[6], this, [[3, 14, 18, 26], [19,, 21, 25]]);
}

function skip(gen, n) {
  for (var _i2 = 0; _i2 < n; _i2++) {
    if (gen.next().done) {
      return;
    }
  }
}

function take(gen, n) {
  var results = [];

  for (var _i3 = 0; _i3 < n; _i3++) {
    var _v7 = gen.next();

    results.push(_v7.value);

    if (_v7.done) {
      break;
    }
  }

  return results;
}

function loop(gen) {
  var results, i, _v8;

  return regeneratorRuntime.wrap(function loop$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          results = [];
          i = 0;

        case 2:
          if (!true) {
            _context8.next = 13;
            break;
          }

          _v8 = gen.next();

          if (!_v8.done) {
            _context8.next = 8;
            break;
          }

          return _context8.abrupt("break", 13);

        case 8:
          results.push(_v8.value);
          _context8.next = 11;
          return _v8.value;

        case 11:
          _context8.next = 2;
          break;

        case 13:
          if (!true) {
            _context8.next = 19;
            break;
          }

          _context8.next = 16;
          return results[i++];

        case 16:

          i = i % results.length;
          _context8.next = 13;
          break;

        case 19:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked[7], this);
}

function everyN(gen, n) {
  var takeFirst = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

  var count, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _v9;

  return regeneratorRuntime.wrap(function everyN$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          count = 0;

          if (!takeFirst) {
            _context9.next = 4;
            break;
          }

          _context9.next = 4;
          return gen.next().value;

        case 4:
          _iteratorNormalCompletion7 = true;
          _didIteratorError7 = false;
          _iteratorError7 = undefined;
          _context9.prev = 7;
          _iterator7 = gen[Symbol.iterator]();

        case 9:
          if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
            _context9.next = 19;
            break;
          }

          _v9 = _step7.value;

          count++;

          if (!(count === n)) {
            _context9.next = 16;
            break;
          }

          _context9.next = 15;
          return _v9;

        case 15:
          count = 0;

        case 16:
          _iteratorNormalCompletion7 = true;
          _context9.next = 9;
          break;

        case 19:
          _context9.next = 25;
          break;

        case 21:
          _context9.prev = 21;
          _context9.t0 = _context9["catch"](7);
          _didIteratorError7 = true;
          _iteratorError7 = _context9.t0;

        case 25:
          _context9.prev = 25;
          _context9.prev = 26;

          if (!_iteratorNormalCompletion7 && _iterator7.return) {
            _iterator7.return();
          }

        case 28:
          _context9.prev = 28;

          if (!_didIteratorError7) {
            _context9.next = 31;
            break;
          }

          throw _iteratorError7;

        case 31:
          return _context9.finish(28);

        case 32:
          return _context9.finish(25);

        case 33:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked[8], this, [[7, 21, 25, 33], [26,, 28, 32]]);
}

function identity(a, b) {
  return a === b;
}