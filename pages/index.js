import App from '../components/App'
import withData from '../lib/withData';
export default withData((props) => (
      <App props={props}>
            <h3> Hello </h3>
            <p> This is a yik yak style app that shows you posts that people posted near you. <br/> Check out the discover section! </p>
      </App>
))
