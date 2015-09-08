# Gentoo - *Gen*erator *too*ls

Tools for [ES6 generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators).

## accum

`accum(gen) -> Generator`

Returns a new generator which yields an array accumulating the values from `gen`. Every time `next()` is called, the newest value from `gen` is added to the end of the array the generator yields.

```javascript

function * genInfinite () {
  let i = 0
  while (true) {
    yield ++i
  }
}

const accumGen = gentoo.accum(genInfinite())

accumGen.next().value
// [1]

accumGen.next().value
// [1, 2]

accumGen.next().value
// [1, 2, 3]
```

## compose

`compose(...generators) -> Generator`

Compose any number of generators. The returned generator will yield the values of the first generator until it's done, then the values of the second until it's done, etc.

```javascript

function * gen1() {
  yield 1
}

function * gen2() {
  yield 2
}

function * gen3() {
  yield 3
}

const composed = gentoo.compose(gen1(), gen2(), gen3())

[...composed]

// [1, 2, 3]
```

## filter

`filter(gen, fn, thisValue) -> Generator`

Returns a generator which will iterate over values from `gen` until `fn` returns a truthy result.

Every time `next()` is called, a value is retrieved from`gen` and passed to `fn`, until the result of calling `fn` is truthy. At that point, the value from `gen` will be yielded.

`thisValue` can optionally passed in, for the context `fn` is called in.

```javascript

function gen() {
  yield 1 
  yield 2 
  yield 3 
}

function even (n) {
  return n % 2 === 0
}

const filterGen = gentoo.filter(gen(), even)

filterGen.next().value
// 2
```

## forEach

`forEach(gen, fn [, thisValue]) -> void`

Calls `fn` for each value of `gen`.

`thisValue` can optionally passed in, for the context `fn` is called in.

```javascript
function gen() {
  yield 1 
  yield 2 
  yield 3 
}

gentoo.forEach(gen(), (n) => console.log(n))

// logs "1 2 3"
```

## lastValue

`lastValue(gen) -> [any]`

Returns the last value from `gen`. **NOTE:** you should only pass `lastValue` a generator which will end. If `gen` has an infinite number of values, `lastValue` will never finish.

```javascript

function gen() {
  yield 1 
  yield 2 
  yield 3 
}

gentoo.lastValue(gen())
// 3
```

## map

`map(gen, fn [, thisValue]) -> Generator`

Returns a generator that maps `fn` over the values of `gen`. Every time `next()` is called, the next value of `gen` will be passed to `fn`, and the result will be yielded.

`thisValue` can optionally be passed in, for the context `fn` is called in.

```javascript
function gen() {
  yield 1 
  yield 2 
  yield 3 
}

function multiplyBy2(n) {
  return n * 2
}

const doubleGen = gentoo.map(gen(), multiplyBy2)

[...doubleGen]
// [2, 4, 6]
```

## nthValue

`nthValue(gen, n) -> [any]`

Returns the `n`th value (zero-based) from `gen`.

```javascript
function gen() {
  yield 1 
  yield 2 
  yield 3 
}

gentoo.nthValue(gen(), 1)
// 2
```

## pluck

`pluck(gen, name) -> Generator`

Returns a generator that plucks the property `name` from each of `gen`'s values. Every time `next()` is called, the next value from `gen` is retrieved, and the `name` property of that value is yielded.

```javascript
function * gen () {
  yield {a: 1, b: 2, c: 3}
  yield {a: 4, b: 5, c: 6}
  yield {a: 7, b: 8, c: 9}
}

const pluckGen = gentoo.pluck(gen(), 'b')

pluckGen.next().value
// 2

pluckGen.next().value
// 5

pluckGen.next().value
// 8
```

## skip

`skip(gen, n) -> void`

"Skips" the first `n` values of `gen`.

```javascript
function * genInfinite () {
  let i = 0
  while (true) {
    yield ++i
  }
}

const gen = genInfinite()

gentoo.skip(gen, 2)

gen.next().value
// 2

gen.next().value
// 3

gen.next().value
// 4
```

## take

`take(gen, n) -> Array`

Takes `n` values from `gen` and returns the values in an array.

```javascript
function gen() {
  yield 1 
  yield 2 
  yield 3 
}

gentoo.take(gen(), 2)
// [1, 2]
```
