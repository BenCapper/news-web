import '../Feed/feed.css'
import { LinearProgress } from "@mui/material";

const Loader = ({title}) => {


    return (
        <>
        <div className="feed">
        <div className="header">
          <h3>{title}</h3>
  
        <div className="load"></div>
          <LinearProgress/>
          </div>
        </div>
        </>
      );
}

export default Loader;