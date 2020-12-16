import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const ExampleTransition = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      {console.log("isVisible: ", isVisible)}

      <CSSTransition in={isVisible} timeout={300} classNames="sample">
        <div>Now you see me, click you don't.</div>
      </CSSTransition>
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        Click to show/hide.
      </button>
    </div>
  );
};

export default ExampleTransition;
