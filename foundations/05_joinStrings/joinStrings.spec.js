const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Nina', () => {
    expect(values.firstName).toEqual('Nina');
  });
  test.skip('lastName is Nguyen', () => {
    expect(values.lastName).toEqual('Nguyen');
  });
  test.skip('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test.skip('birthYear is 2006', () => {
    expect(values.birthYear).toEqual(2006);
  });
  test.skip('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Nina Nguyen and I am 20 years old.');
  });
});

describe('step 3', () => {
  test.skip('fullName is Carlos Stevenson', () => {
    expect(values.fullName).toEqual('Carlos Stevenson');
  });
  test.skip('age is 18', () => {
    expect(values.age).toEqual(18);
  });
});
