import App from '../components/App'
import  withData from '../lib/withData';
import AuthorDetails from '../datastuff/AuthorDetails'
export default withData((props) => (
  <App data={props}>
          <h3>{props.url.query.username}</h3>

          <AuthorDetails username={props.url.query.username ? props.url.query.username : "unknown"} />
  </App>
))
