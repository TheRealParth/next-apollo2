import App from '../components/App'
import  withData from '../lib/withData';

export default withData((props) => (
  <App data={props}>
          <h3>Create a post</h3>
          <p>Share your thoughts with people around you.</p>
  </App>
))
