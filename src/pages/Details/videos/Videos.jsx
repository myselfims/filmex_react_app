import React, { useEffect } from "react";
import "./style.css";
import Img from "../../../components/lazyLoad/lazyLoad";
import {FaPlayCircle} from 'react-icons/fa'
import useFetch from "../../../customhooks/useFetch";
import { useParams } from "react-router-dom";


const Videos = ({data,togglePlayer}) => {


  return (
    <div className="videos">
      <div className="head">
        <h3>Official Vidoes</h3>
      </div>
      <div className="thumbnails">
        {data?.results?.map((item)=>{
            return(
                <div key={item.id} className="thumbnail" onClick={()=>togglePlayer(item.key)}>
                <Img
                    image={{
                        src: `https://img.youtube.com/vi/${item.key}/mqdefault.jpg`
                    }}
                    />
                    <FaPlayCircle className="playBtn"/>
                </div>

            )
        })}
      </div>
    </div>
  );
};

export default Videos;
