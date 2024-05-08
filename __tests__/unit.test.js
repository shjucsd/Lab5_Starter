// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//Tests for isPhoneNumber

//test cases for true

//test1
test('checks correctly if correct phone number', () => {
  expect(isPhoneNumber('655-555-0100')).toBe(true);
});

//test2
test('checks correctly if correct phone number', () => {
  expect(isPhoneNumber('925-872-4820')).toBe(true);
});

//test cases for false

//test1
test('checks correctly if incorrect phone number', () => {
  expect(isPhoneNumber('1000-655')).toBe(false);
});

//test2
test('checks correctly if incorrect phone number', () => {
  expect(isPhoneNumber('chicken')).toBe(false);
});

//Tests for isEmail

//test cases for true

//test1
test('checks correctly if correct email', () => {
  expect(isEmail('abc@gmail.com')).toBe(true);
});

//test2
test('checks correctly if correct email', () => {
  expect(isEmail('fetang@gmail.com')).toBe(true);
});

//test cases for false

//test1
test('checks correctly if incorrect email', () => {
  expect(isEmail('def@gmail@amazon')).toBe(false);
});

//test2
test('checks correctly if incorrect email', () => {
  expect(isEmail('www.google.com')).toBe(false);
});

//Tests for isStrongPassword

//test cases for true

//test1
test('checks correctly if strong password', () => {
  expect(isStrongPassword('Abcd_1234fgh')).toBe(true);
});

//test2
test('checks correctly if strong password', () => {
  expect(isStrongPassword('j1bd4f92nd8sn')).toBe(true);
});

//test cases for false

//test1
test('checks correctly if not strong password', () => {
  expect(isStrongPassword('dfe$_000')).toBe(false);
});

//test2
test('checks correctly if not strong password', () => {
  expect(isStrongPassword('abcabc')).toBe(false);
});

//Tests for isDate

//test cases for true

//test1
test('checks correctly if correct date', () => {
  expect(isDate('12/14/2045')).toBe(true);
});

//test2
test('checks correctly if correct date', () => {
  expect(isDate('05/07/2024')).toBe(true);
});

//test cases for false

//test1
test('checks correctly if incorrect date', () => {
  expect(isDate('17/18/44556')).toBe(false);
});

//test2
test('checks correctly if incorrect date', () => {
  expect(isDate('228899999')).toBe(false);
});

//Tests for isHexColor

//test cases for true

//test1
test('checks correctly if correct hex', () => {
  expect(isHexColor('3ef')).toBe(true);
});

//test2
test('checks correctly if correct hex', () => {
  expect(isHexColor('6c')).toBe(true);
});

//test cases for false

//test1
test('checks correctly if incorrect hex', () => {
  expect(isHexColor('ffgghh89')).toBe(false);
});

//test2
test('checks correctly if incorrect hex', () => {
  expect(isHexColor('3zst')).toBe(false);
});
