import React from 'react';
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Experience = () => {
    return (
        <div className="section">
          <div className="container">
            <div className="promotion-container promotion">
              <Fade bottom cascade>
                <h1>{data.promotionHeading}</h1>
              </Fade>
              <p>{data.promotionPara}</p>
            </div>
          </div>
        </div>
      )
}

export default Experience