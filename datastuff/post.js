import PostUpvoter from './PostUpvoter'
import PostDownVoter from './PostDownVoter'
const IMAGEFINDER = "https://robohash.org/set_set3/bgset_bg2/";
export default (props) => (

  <div className="card-panel grey lighten-5 z-depth-2">
  <div className="row valign-wrapper" style={{marginBottom: -5 + 'px'}}>
    <div className="col s3 m3">
      <div className="row" style={{marginBottom: -15 + 'px'}}>
        <div className="col s12 m8">
          <div className="row">
            <img src={props.post.author.username ? IMAGEFINDER + props.post.author.username : IMAGEFINDER + props.post.author.username} alt="" className="circle responsive-img" />
          </div>
          <div className="row" style={{textAlign: 'center', marginTop: -15 + 'px'}}>
              <div className="col s12 m12"><span>{props.post.author.username ? props.post.author.username : "Anonymous"}</span></div>
          </div>
        </div>
      </div>
      <div className="row" style={{marginBottom: 0 + 'px',  textAlign: 'center',  marginTop: 5 + 'px'}}>
        <div className="col s12" style={{color: props.post.votes >= 0 ? '#00e676' : '#FF1744',fontSize: 1.5 + 'em'}}>
          {props.post.votes}
        </div>
      </div>
    </div>
    <div className="col s10">
      <div className="postTitle" style={{marginBottom: 8 + 'px', fontSize: 20 + 'px'}}>{props.post.title ? props.post.title : "< Empty > "}</div>
      <span className="black-text">
        {props.post.body ? props.post.body : "< Empty >"}
      </span>
    </div>
    <div className="row">
      <div className="col s5">
        <PostDownVoter id={props.post.id} />
      </div>
      <div className="col s5">
        <PostUpvoter id={props.post.id}/>
      </div>

    </div>


  </div>

</div>
);
