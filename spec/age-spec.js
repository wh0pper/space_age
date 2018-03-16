import {Age} from './../src/age';

describe('Age', function() {
  var testAge;

  beforeEach(function() {
    var testDOB = '1990-03-16';
    testAge = new Age(testDOB);
  });

  it('has properties containing DOB in string and millisecond format when instantiated', function() {
    expect(testAge.dobString).toEqual('1990-03-16');
    expect(testAge.dobMs).toEqual(637545600000);
  });

});
