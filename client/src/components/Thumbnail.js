import React from "react";



export default function Thumbnail(props) {
  const styles = {
    width: '200px',
    height:'200px'
  };

  return (
    <div className="col-lg-4 col-md-12 p-2 d-flex justify-content-center">
      <img
        src={props.src}
        onClick={props.onClick}
        className="img-thumbnail"
        style={styles}
      />
    </div>
  );
}


