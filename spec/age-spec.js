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

  it('has method .agePlanet that returns age on a given planet', function() {
    let planet = "Mercury";
    let earthYears = testAge.ageToSec()/secondsInYear; //exact decimal value
    let mercuryYears = earthYears*.24;
    expect(testAge.agePlanet(planet)).toEqual(mercuryYears);
  });


});
