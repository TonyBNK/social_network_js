import React from "react";
import azgard from "../../../img/azgard.jpg";
import cat_with_glasses from "../../../img/cat_with_glasses.jpg";
import c from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return(
      <div>
          <div>
              <img src={azgard}
                   alt="типа космос"/>
          </div>
          <div className={c.descriptionBlock}>
              <img src={cat_with_glasses} alt="котэ" width={150}/>
              + description
          </div>
      </div>
  );
};