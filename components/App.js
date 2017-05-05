import Header from './Header';
import Loader from './loader';

export default ({ children, pathname }) => (
  <main>
    {/* if(process.Window){
      var thing = createFragment(<Loader style={{display: document.readyState === "complete" ? "none" : "block"}}/>) */}


      <style jsx global>{`
       @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
       @import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css');
      * {
        font-family: Roboto;
      }
    `}</style>

      <Header pathname={pathname}/>
      <div className="container">

      { children }

      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"/>
  </main>
)
