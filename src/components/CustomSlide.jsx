import React from "react";

export default function CustomSlide({ tattoo }) {
  return (
    <div>
      <div className="container-tattoo">
        <img src={tattoo.img} alt="" />
      </div>
    </div>
  );
}
