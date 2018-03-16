import {Age} from './../src/age';

describe('Age', function() {
  var testAge;
  var nowObj;

  beforeEach(function() {
    var testDOB = '1990-03-13 PST';
    testAge = new Age(testDOB);
    nowObj = new Date(Date.now());
  });

  it('has property containing DOB as a Date object', function() {
    expect(testAge.dob instanceof Date).toEqual(true);
    expect(testAge.dob.toDateString()).toEqual('Tue Mar 13 1990')
  });

  it('has method .ageToSec that returns current age in seconds', function() {
    expect(Math.floor(testAge.ageToSec()/31536000)).toEqual(nowObj.getFullYear() - testAge.dob.getFullYear()); //note this test will only pass for the next year
  });



});
