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

//test cases for false

//test1
test('checks correctly if incorrect phone number', () => {
  expect(isPhoneNumber('1000-655')).toBe(false);
});

//test2

//Tests for isEmail

//test cases for true

//test1
test('checks correctly if correct email', () => {
  expect(isEmail('abc@gmail.com')).toBe(true);
});

//test2

//test cases for false

//test1
test('checks correctly if incorrect email', () => {
  expect(isEmail('def@gmail@amazon')).toBe(false);
});

//test2

//Tests for isStrongPassword

//test cases for true

//test1
test('checks correctly if correct password', () => {
  expect(isStrongPassword('Abcd_1234fgh')).toBe(true);
});

//test2

//test cases for false

//test1
test('checks correctly if incorrect password', () => {
  expect(isStrongPassword('dfe$_000')).toBe(false);
});

//test2

//Tests for isDate

//test cases for true

//test1
test('checks correctly if correct date', () => {
  expect(isDate('12/14/2045')).toBe(true);
});

//test2

//test cases for false

//test1
test('checks correctly if incorrect date', () => {
  expect(isDate('17/18/44556')).toBe(false);
});

//test2

//Tests for isHexColor

//test cases for true

//test1
test('checks correctly if correct hex', () => {
  expect(isHexColor('3ef')).toBe(true);
});

//test2

//test cases for false

//test1
test('checks correctly if incorrect hex', () => {
  expect(isHexColor('ffgghh89')).toBe(false);
});

//test2

