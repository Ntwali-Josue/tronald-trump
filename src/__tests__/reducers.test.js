import reducer, { fetchQuotes } from '../redux/reducers/quotes';

describe('Testing reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      countQuotes: 0, fetchedQoutes: [], totalQuotes: 0, filteredTopics: {},
    });
  });
  test('should test fetchqoutes function', () => {
    const fetchedQoutes = fetchQuotes('OBAMA');
    expect(fetchedQoutes).toHaveLength(1);
  });
});
