import Header from './Header';
import Loader from './loader';


export default ({ children, props }) => (
  <main className="darken-2">
    {/* if(process.Window){
      var thing = createFragment(<Loader style={{display: document.readyState === "complete" ? "none" : "block"}}/>) */}


      <Header pathname={props.url.pathname} username={props.url.username}/>
      <div className="container">

      { children }

      </div>
  </main>
)
