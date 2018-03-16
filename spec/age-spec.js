import {Age} from './../src/age';

describe('Age', function() {
  var testAge;

  beforeEach(function() {
    var testDOB = '1990-03-16';
    testAge = new Age(testDOB);
  });

  it('has property containing DOB as a Date object', function() {
    expect(testAge.dob).toEqual('Thu Mar 15 1990 16:00:00 GMT-0800 (PST)');
    expect(testAge.dob instanceof Date).toEqual(true);
  });

  it('has method .toSec that converts DOB to seconds', function() {
    expect(testAge.dob).toEqual('Thu Mar 15 1990 16:00:00 GMT-0800 (PST)');
    expect(testAge.dob instanceof Date).toEqual(true);
  });

});
