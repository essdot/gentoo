import * as lib from '../lib'

const test = require('tape')

test('accum', t => {
  const accumGen = lib.accum(makeInfiniteGenerator())

  t.deepEqual(accumGen.next().value, [2])
  t.deepEqual(accumGen.next().value, [2, 4])
  t.deepEqual(accumGen.next().value, [2, 4, 6])

  t.end()
})

test('compose', t => {
  const composed = lib.compose(
    makeGenerator(),
    makeGenerator2(),
    makeGenerator3()
  )

  t.deepEqual([...composed], [1, 2, 3, 4, 5, 6, 7, 8, 9])

  t.end()
})

test('compose w/infinite generator', t => {
  const composed = lib.compose(makeGenerator(), makeInfiniteGenerator())

  t.equal(composed.next().value, 1)
  t.equal(composed.next().value, 2)
  t.equal(composed.next().value, 3)
  t.equal(composed.next().value, 2)
  t.equal(composed.next().value, 4)
  t.equal(composed.next().value, 6)

  t.end()
})

test('dedupe', t => {
  const dedupeGen = lib.dedupe(makeDupeGenerator())

  t.deepEqual([...dedupeGen], [1, 2, 3])

  t.end()
})

test('dedupe w/function', t => {
  t.plan(9)

  const dedupeGen = lib.dedupe(makeDupeGenerator(), eq)

  t.equal(dedupeGen.next().value, 1)
  t.equal(dedupeGen.next().value, 2)
  t.equal(dedupeGen.next().value, 3)
  t.ok(dedupeGen.next().done)

  t.end()

  function eq (a, b) {
    t.pass('eq called')

    return a === b
  }
})

test('filter', t => {
  const moduloSix = (n) => n % 6 === 0
  const filterGen = lib.filter(makeInfiniteGenerator(), moduloSix)

  t.equal(filterGen.next().value, 6)
  t.equal(filterGen.next().value, 12)
  t.equal(filterGen.next().value, 18)

  t.end()
})

test('forEach', t => {
  const results = []

  lib.forEach(makeGenerator(), val => results.push(val))
  t.deepEqual(results, [1, 2, 3])

  t.end()
})

test('lastValue', t => {
  t.equal(lib.lastValue(makeGenerator()), 3)

  t.end()
})

test('map', t => {
  const minusOne = n => n - 1
  const mapGen = lib.map(makeInfiniteGenerator(), minusOne)

  t.equal(mapGen.next().value, 1)
  t.equal(mapGen.next().value, 3)
  t.equal(mapGen.next().value, 5)

  t.end()
})

test('map is done when underlying generator done', t => {
  const minusOne = n => n - 1
  const mapGen = lib.map(makeGen(), minusOne)

  t.deepEqual(mapGen.next(), {value: 0, done: false})
  t.deepEqual(mapGen.next(), {value: 1, done: false})
  t.deepEqual(mapGen.next(), {value: 2, done: true})

  t.end()

  function * makeGen () {
    yield 1
    yield 2
    return 3
  }
})

test('nthValue', t => {
  t.equal(lib.nthValue(makeInfiniteGenerator(), 0), 2)
  t.equal(lib.nthValue(makeInfiniteGenerator(), 1), 4)
  t.equal(lib.nthValue(makeInfiniteGenerator(), 2), 6)

  t.end()
})

test('pluck', t => {
  const pluckGen = lib.pluck(makeObjectGenerator(), 'b')

  t.deepEqual([...pluckGen], [2, 5, 8])

  t.end()
})

test('skip', t => {
  const gen = makeInfiniteGenerator()

  lib.skip(gen, 2)

  t.equal(gen.next().value, 6)
  t.equal(gen.next().value, 8)

  t.end()
})

test('take', t => {
  t.deepEqual(lib.take(makeInfiniteGenerator(), 3), [2, 4, 6])
  t.deepEqual(lib.take(makeInfiniteGenerator(), 2), [2, 4])
  t.deepEqual(lib.take(makeInfiniteGenerator(), 1), [2])

  t.end()
})

test('thisValue', t => {
  let thisObj = {}
  t.plan(9)

  lib.forEach(makeGenerator(), checkThis, thisObj)
  Array.from(lib.map(makeGenerator(), checkThis, thisObj))
  Array.from(lib.filter(makeGenerator(), checkThis, thisObj))

  t.end()

  function checkThis () {
    t.equal(this, thisObj)
  }
})

function * makeGenerator () {
  yield 1
  yield 2
  yield 3
}

function * makeGenerator2 () {
  yield 4
  yield 5
  yield 6
}

function * makeGenerator3 () {
  yield 7
  yield 8
  yield 9
}

function * makeDupeGenerator () {
  yield 1
  yield 1
  yield 2
  yield 2
  yield 3
  yield 3
}

function * makeInfiniteGenerator () {
  let i = 2

  while (true) {
    yield i
    i += 2
  }
}

function * makeObjectGenerator () {
  yield {a: 1, b: 2, c: 3}
  yield {a: 4, b: 5, c: 6}
  yield {a: 7, b: 8, c: 9}
}
