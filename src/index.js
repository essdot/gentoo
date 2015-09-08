module.exports.accum = accum
module.exports.compose = compose
module.exports.lastValue = lastValue
module.exports.filter = filter
module.exports.forEach = forEach
module.exports.map = map
module.exports.nthValue = nthValue
module.exports.pluck = pluck
module.exports.skip = skip
module.exports.take = take

function * accum (gen) {
  let results = []
  for (let v of gen) {
    results.push(v)
    yield results
  }
}

function * compose (...gens) {
  for (let i = 0; i < gens.length; i++) {
    yield* (gens[i])
  }
}

function * pluck (gen, name) {
  for (let v of gen) {
    yield (v[name])
  }
}

function lastValue (gen) {
  const arr = Array.from(gen)
  return arr[arr.length - 1]
}

function nthValue (gen, n) {
  for (let i = 0; i < n; i++) {
    gen.next()
  }

  return gen.next().value
}

function take (gen, n) {
  const results = []

  for (let v of gen) {
    results.push(v)

    if (results.length === n) {
      return results
    }
  }
}

function skip (gen, n) {
  for (let i = 0; i < n; i++) {
    gen.next()
  }
}

function * map (gen, fn, thisValue) {
  for (let v of gen) {
    yield (fn.call(thisValue, v))
  }
}

function * filter (gen, fn, thisValue) {
  for (let v of gen) {
    if (fn.call(thisValue, v)) {
      yield v
    }
  }
}

function forEach (gen, fn, thisValue) {
  for (let v of gen) {
    fn.call(thisValue, v)
  }
}
