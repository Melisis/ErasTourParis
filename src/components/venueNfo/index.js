import React from "react";
import { Zoom } from "react-awesome-reveal";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";

const VenueNfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">

          <Zoom className="vn_item">
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_purple"></div>
                  <div className="vn_icon">
                    <BsFillCalendar2HeartFill size={50}/> 
                  </div>
                  <div className="vn_title">
                    Event Dates
                  </div>
                  <div className="vn_desc">
                    9,10,11,12 <br></br>May <br></br>2024 
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

         
          <Zoom className="vn_item">
            <div>
           
              <div className="vn_outer">
                <div className="vn_inner">
                
                  <div className="vn_icon_square bck_pink"></div>
                  <div className="vn_icon">
                  
                    <FaMapLocationDot size={50}/>
                  </div>
                  <div className="vn_title">
                    Venue Location
                  </div>
                  <div className="vn_desc">
                  99 Jard. de l'Arche, 92000 Nanterre, France
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

        </div>
      </div>
    </div>
  );
}

export default VenueNfo;
