import App from '../components/App'
import withData from '../lib/withData';

export default withData((props) => (
      <App pathname={props.url.pathname} >

            <h1> Hello </h1>
      </App>
))
