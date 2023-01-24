import '../Feed/feed.css'
import { LinearProgress } from "@mui/material";

const Loader = ({title}) => {


    return (
        <>
        <div className="header">
          <h3>{title}</h3>
          <div>
        <div className="load"></div>
          <LinearProgress/>
          </div>
        </div>
        <div className="flip">
      </div>
          
        </>
      );
}

export default Loader;