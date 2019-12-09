import { Age } from './../src/scripts.js';

describe('Age', () => {

  test('should check the constructor function in the Age class', () => {
    let currentAge = new Age(80);
    expect(currentAge.age).toEqual(80);
  });

  test('should be able to calculate a human\'s age on the planet Mercury', () => {
    let currentAge = new Age(100);
    expect(currentAge.ageMercury()).toEqual(416);
  });

  test('should be able to calculate a human\'s age on the planet Venus', () => {
    let currentAge = new Age(100);
    expect(currentAge.ageVenus()).toEqual(161);
  });

  test('should be able to calculate a human\'s age on the planet Mars', () => {
    let currentAge = new Age(100);
    expect(currentAge.ageMars()).toEqual(53);
  });

  test('should be able to calculate a human\'s age on the planet Jupiter', () => {
    let currentAge = new Age(100);
    expect(currentAge.ageJupiter()).toEqual(8);
  });

  test('should be able to calculate a human\'s life span on the planet Mercury', () => {
    let currentAge = new Age(240);
    expect(currentAge.lifeMercury()).toEqual("You have lived 900 more years than an average human.");
  });
  test('should be able to calculate a human\'s life span on the planet Mercury', () => {
    let currentAge = new Age(20);
    expect(currentAge.lifeMercury()).toEqual("Your life span on Mercury is 17 more years.");
  });

  test('should be able to calculate a human\'s life span on the planet Venus', () => {
    let currentAge = new Age(620);
    expect(currentAge.lifeVenus()).toEqual("You have lived 900 more years than an average human.");
  });
  test('should be able to calculate a human\'s life span on the planet Venus', () => {
    let currentAge = new Age(20);
    expect(currentAge.lifeVenus()).toEqual("Your life span on Venus is 68 more years.");
  });

  test('should be able to calculate a human\'s life span on the planet Mars', () => {
    let currentAge = new Age(1880);
    expect(currentAge.lifeMars()).toEqual("You have lived 900 more years than an average human.");
  });
  test('should be able to calculate a human\'s life span on the planet Mars', () => {
    let currentAge = new Age(20);
    expect(currentAge.lifeMars()).toEqual("Your life span on Mars is 90 more years.");
  });

  test('should be able to calculate a human\'s life span on the planet Jupiter', () => {
    let currentAge = new Age(11860);
    expect(currentAge.lifeJupiter()).toEqual("You have lived 900 more years than an average human.");
  });
  test('should be able to calculate a human\'s life span on the planet Jupiter', () => {
    let currentAge = new Age(20);
    expect(currentAge.lifeJupiter()).toEqual("Your life span on Jupiter is 99 more years.");
  });
});
