import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TopicsPage from '../components/topics/TopicsPage';
import App from '../components/App';
import store from '../redux/store';

describe('pages test snapshots', () => {
  it('testing topics Page', async () => {
    const topicsPage = renderer
      .create(
        <Provider store={store}>
          <App>
            <TopicsPage />
          </App>
        </Provider>,
      )
      .toJSON();
    expect(topicsPage).toMatchSnapshot();
  });
});
