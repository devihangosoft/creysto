import React from "react";
import {Link} from "react-router-dom";

function LeftSideImage() {
  return (
    <>
      <img
        src="./images/login_page_verctor_image.jpg"
        alt=""
        className="img-fluid mb-3 d-none d-md-block"
      />
      {/* <h1>Creysto</h1> */}
      {/* <p className="font-italic text-muted mb-0">
        <b className="text-primary">
	
          <Link to="/">
            CREYSTO 
          </Link>
		
        </b>
        &nbsp; provides you with unlimited opportunities to grow your business through
        a simple, easy-to-use platform for you and your customers.
      </p> */}
    </>
  );
}

export default LeftSideImage;
