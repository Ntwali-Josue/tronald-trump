import reducer from '../redux/reducers/quotes';

describe('Testing reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ countQuotes: 0, fetchedQoutes: [], totalQuotes: 0 });
  });
});
