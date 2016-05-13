export function * accum (gen) {
  let results = []
  for (let v of gen) {
    results = results.concat(v)
    yield (results.slice())
  }
}

export function * compose (...gens) {
  for (let i = 0; i < gens.length; i++) {
    yield* (gens[i])
  }
}

export function * dedupe (gen, _eqFn) {
  let previousValue
  let valueSeen = false
  const eqFn = _eqFn || identity

  for (let v of gen) {
    if (!valueSeen || !eqFn(v, previousValue)) {
      yield v
    }

    valueSeen = true
    previousValue = v
  }
}

export function * filter (gen, fn, thisValue) {
  for (let v of gen) {
    if (fn.call(thisValue, v)) {
      yield v
    }
  }
}

export function forEach (gen, fn, thisValue) {
  for (let v of gen) {
    fn.call(thisValue, v)
  }
}

export function lastValue (gen) {
  const arr = Array.from(gen)
  return arr[arr.length - 1]
}

export function * map (gen, fn, thisValue) {
  while (true) {
    let v = gen.next()

    if (v.done && !v.value) {
      return
    }

    let result = fn.call(thisValue, v.value)

    if (v.done) {
      return result
    }

    yield result
  }
}

export function nthValue (gen, n) {
  for (let i = 0; i < n; i++) {
    gen.next()
  }

  return gen.next().value
}

export function * partition (gen, fn) {
  const yes = []
  const no = []

  for (let v of gen) {
    if (fn(v)) {
      yes.push(v)
    } else {
      no.push(v)
    }

    yield [yes.slice(), no.slice()]
  }
}

export function * pluck (gen, name) {
  for (let v of gen) {
    yield (v[name])
  }
}

export function skip (gen, n) {
  for (let i = 0; i < n; i++) {
    if (gen.next().done) {
      return
    }
  }
}

export function take (gen, n) {
  const results = []

  for (let i = 0; i < n; i++) {
    let v = gen.next()

    results.push(v.value)

    if (v.done) {
      break
    }
  }

  return results
}

export function * loop (gen) {
  const results = []
  let i = 0

  while (true) {
    let v = gen.next()

    if (v.done) {
      break
    } else {
      results.push(v.value)
      yield v.value
    }
  }

  while (true) {
    yield results[i++]

    i = i % results.length
  }
}

export function * everyN (gen, n, takeFirst = true) {
  let count = 0

  if (takeFirst) {
    yield gen.next().value
  }

  for (let v of gen) {
    count++

    if (count === n) {
      yield v
      count = 0
    }
  }
}

export function reduce (gen, fn, initial) {
  let memo = initial

  for (let v of gen) {
	  memo = fn(memo, v);
  }

  return memo;
}

export function * range (start, stop, step) {
  let modifiedStep = step || 1
  let i = start

  while (i < stop) {
    yield i
    i += modifiedStep
  }

}

function identity (a, b) {
  return a === b
}
