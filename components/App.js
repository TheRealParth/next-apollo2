import Header from './Header';
import Loader from './loader';

export default ({ children, props }) => (
  <main className="darken-2">
    {/* if(process.Window){
      var thing = createFragment(<Loader style={{display: document.readyState === "complete" ? "none" : "block"}}/>) */}

      <style jsx global>{`
       @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
       @import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css');
      * {
        font-family: Roboto;

      }
      body {
        color: #404040;
      }
      h3{
        font-weight: 200;
      }
    `}</style>

      <Header pathname={props.url.pathname} username={props.url.username}/>
      <div className="container">

      { children }

      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"/>
  </main>
)
