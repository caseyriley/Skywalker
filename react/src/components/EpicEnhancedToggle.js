import React from 'react';

const EpicEnhancedToggle = (props) => {
  return (
    <div id={"enhanced-toggle"} onClick={props.toggleEnhancedState}>
      <span id={"enhanced-toggle__enhanced"}>Enhanced</span>
      <span id={"enhanced-toggle__natural"}>Natural</span>
      <div id={"enhanced-toggle__switch"} className={props.epicEnhancedState ? "enhaced-state" : "natural-state"} ></div>
    </div>
  )
}
export default EpicEnhancedToggle;