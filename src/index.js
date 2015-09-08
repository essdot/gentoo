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

  function identity (a, b) {
    return a === b
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
  for (let v of gen) {
    yield (fn.call(thisValue, v))
  }
}

export function nthValue (gen, n) {
  for (let i = 0; i < n; i++) {
    gen.next()
  }

  return gen.next().value
}

export function * pluck (gen, name) {
  for (let v of gen) {
    yield (v[name])
  }
}

export function skip (gen, n) {
  for (let i = 0; i < n; i++) {
    gen.next()
  }
}

export function take (gen, n) {
  const results = []

  for (let v of gen) {
    results.push(v)

    if (results.length === n) {
      return results
    }
  }
}
