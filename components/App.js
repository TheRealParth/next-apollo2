import Header from './Header';
export default ({ children, pathname }) => (
  <main>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"/>
      <style jsx global>{`
       @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
       @import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css');
      * {
        font-family: Roboto;
      }
      body{
        margin: 0px;
      }
    `}</style>
      <Header pathname={pathname}/>
      { children }
  </main>
)
