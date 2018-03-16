import {Age} from './../src/age';

describe('Age', function() {
  const secondsInYear = 31536000;
  var testAge;
  var nowObj;

  beforeEach(function() {
    var testDOB = '1990-03-13 PST';
    testAge = new Age(testDOB);
    nowObj = new Date(Date.now());
  });

  it('has property containing DOB as a Date object', function() {
    expect(testAge.dob instanceof Date).toEqual(true);
    expect(testAge.dob.toDateString()).toEqual('Tue Mar 13 1990');
  });

  it('has method .ageToSec that returns current age in seconds', function() {
    expect(Math.floor(testAge.ageToSec()/secondsInYear)).toEqual(nowObj.getFullYear() - testAge.dob.getFullYear()); //note this test will only pass for the next year
  });

  it('has method .dateDifference that returns difference between two dates in seconds', function() {
    let date1 = '2017/3/13';
    let date2 = '03-13-2018';
    expect(testAge.dateDifference(date1,date2)).toEqual(secondsInYear);
  });

  it('has method .agePlanet that returns age on a given planet (mercury)', function() {
    let planet = "mercury";
    let earthYears = testAge.ageToSec()/secondsInYear; //exact decimal value
    let mercuryYears = (earthYears*.24).toFixed(3);
    expect(testAge.agePlanet(planet)).toEqual(mercuryYears);
  });

  it('has method .agePlanet that returns age on a given planet (venus)', function() {
    let planet = "venus";
    let earthYears = testAge.ageToSec()/secondsInYear; //exact decimal value
    let venusYears = (earthYears*.62).toFixed(3);
    expect(testAge.agePlanet(planet)).toEqual(venusYears);
  });

  it('has method .agePlanet that returns age on a given planet (mars)', function() {
    let planet = "mars";
    let earthYears = testAge.ageToSec()/secondsInYear; //exact decimal value
    let marsYears = (earthYears*1.88).toFixed(3);
    expect(testAge.agePlanet(planet)).toEqual(marsYears);
  });

  it('has method .agePlanet that returns age on a given planet (jupiter)', function() {
    let planet = "jupiter";
    let earthYears = testAge.ageToSec()/secondsInYear; //exact decimal value
    let jupiterYears = (earthYears*11.86).toFixed(3);
    expect(testAge.agePlanet(planet)).toEqual(jupiterYears);
  });

  it('has method .lifeExpectancy() that uses simple logic rules to calc a life expectancy', function() {
    let sex = 'female';
    let country = 'United States';
    expect(testAge.lifeExpectancy(sex, country)).toEqual(80);
  });


});
