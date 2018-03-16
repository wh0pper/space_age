import {Age} from './../src/age';

describe('Age', function() {
  var testAge;

  beforeEach(function() {
    var testDOB = '1990-03-16';
    testAge = new Age(testDOB);
  });

  it('has property containing DOB as a Date object', function() {
    expect(testAge.dob instanceof Date).toEqual(true);
    expect(testAge.dob.toDateString()).toEqual('Fri Mar 16 1990')
  });

  it('has method .toSec that converts DOB to seconds', function() {
    expect(testAge.toSec()).toEqual(637545600);
  });

});
