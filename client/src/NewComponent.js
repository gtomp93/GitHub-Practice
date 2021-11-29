import React from "react";

const newComponent = () => {
  return (
    <div>
      Doing some stuff in here
      <span>Putting something in here to cause a conflict</span>
      <span>Putting something in here to cause a conflict</span>
    </div>
  );
};

export default newComponent;
