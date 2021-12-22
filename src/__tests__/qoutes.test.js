import renderer from 'react-test-renderer';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Qoutes from '../components/quotes/Quotes';
import App from '../components/App';
import store from '../redux/store';
import { fetchQuotes } from '../redux/reducers/quotes';

describe('pages test snapshots', () => {
  it('testing qoutes page', async () => {
    await store.dispatch(fetchQuotes('women'));
    const qoutesPage = renderer
      .create(
        <Provider store={store}>
          <App>
            <Qoutes />
          </App>
        </Provider>,
      )
      .toJSON();
    expect(qoutesPage).toMatchSnapshot();
  });
});

describe('Render Data', () => {
  test('display lists of qoutes', () => {
    render(
      <Provider store={store}>
        <App>
          <Qoutes />
        </App>
      </Provider>,
    );
    screen.queryAllByRole('link').forEach((role) => expect(role).toBeInTheDocument());
    expect(screen.queryAllByRole('link').length).toBe(9);
  });
});
