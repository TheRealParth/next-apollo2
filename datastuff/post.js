export default (props) => (

  <div className="card-panel grey lighten-5 z-depth-2">
  <div className="row valign-wrapper">
    <div className="col s2">
      <img src={props.image ? props.image : "static/placeholder.jpg"} alt="" className="circle responsive-img" />
    </div>
    <div className="col s10">
      <div className="postTitle" style={{marginBottom: 8 + 'px', fontSize: 20 + 'px'}}>{props.title ? props.title : "< Empty > "}</div>
      <span className="black-text">
        {props.body ? props.body : "< Empty >"}
      </span>
    </div>
  </div>
</div>
);
