# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @maridoh13/lotide`

**Require it:**

`const _ = require('@maridoh13/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function head`: returns the first element of an array
* `function tail`: removes the first element of an array and returns the rest
* `function middle`: returns the middle elements of an array
* `function assertArraysEqual`: compares the actual and expected results (when arrays)
* `function assertEqual`: compares actual and expected values (cannot be used with arrays and objects)
* `function assertObjectsEqual`: compares the actual and expected results (when objects)
* `function countLetters`: counts each letter of a given string
* `function countOnly`: counts specific items in an array
* `function eqArrays`: compares arrays
* `function eqObjects`: compares objects
* `function findKey`: finds the main key when going through values that are objects
* `function findKeyByValue`: returns the key from an object when inputing the value
* `function flatten`: returns a simple array when inputing an array with (simple) arrays inside
* `function letterPositions`: returns the positions of the characters of a string (ignores spaces)
* `function map`: returns a new array of elements 'filtered' by the (callback) function
* `function takeUntil`: returns the first part of an array that has been sliced up to a given 'parameter'
* `function without`: returns a new array that has been 'subtracted' of any given elements (input)
