import React from "react";


// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
export default function Thumbnail(props) {
  const styles = {
    width: '200px'
  };

  return (
    <img
      src={props.src}
      onClick={props.onClick}
      className="img-thumbnail"
      style={styles}
    />
  );
}


