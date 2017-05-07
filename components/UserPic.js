
const IMAGEFINDER = "https://robohash.org/set_set3/bgset_bg2/";
export default (props) => (
<img style={props.style} src={props.username ? IMAGEFINDER + props.username : IMAGEFINDER + props.username} alt={props.username} className="circle responsive-img" />
)
