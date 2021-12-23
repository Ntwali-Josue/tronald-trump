import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import SearchPage from '../components/topics/SearchPage';
import App from '../components/App';
import store from '../redux/store';

describe('pages test snapshots', () => {
  it('testing search Page', async () => {
    const searchPage = renderer
      .create(
        <Provider store={store}>
          <App>
            <SearchPage />
          </App>
        </Provider>,
      )
      .toJSON();
    expect(searchPage).toMatchSnapshot();
  });
});
