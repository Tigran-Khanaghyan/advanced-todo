import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {  getCoordinates } from "../redux/actions/elementsParametersAction";

export default function DragAndDrop({ child, classes, name, elems}) {
  const elemRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    let newCoordinates = elemRef.current.getBoundingClientRect();
    if (newCoordinates) {
       elems.push(newCoordinates)
       dispatch(getCoordinates(elems)); 
      }
      elemRef.current.addEventListener("mousedown", onMouseDown);
      elemRef.current.ondragstart = function () {
        return false;
      };
    });
    function onMouseDown(event) {
      if (event.target.type === "submit") {
        elemRef.current.onmousedown = null;
        return false;
      }
      event.stopPropagation();
      event.preventDefault();
      
      console.log(elems)
    
    let element = elemRef.current;
    let shiftX = event.clientX - element.getBoundingClientRect().left;
    let shiftY = event.clientY - element.getBoundingClientRect().top;
    
    element.style.position = "fixed";
    element.style.zIndex = 1000;
    document.body.append(element);
    
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
      element.style.left = pageX - shiftX + "px";
      element.style.top = pageY - shiftY + "px";
      // console.log(elemRef.current.getBoundingClientRect());
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener("mousemove", onMouseMove);

    element.onmouseup = function () {
      document.removeEventListener("mousemove", onMouseMove);
      element.onmouseup = null;
    };
  }

  return (
    <div id={name} className={classes} ref={elemRef}>
      {child}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     coordinates: state.coordinates,
//   };
// };

// const mapdispatchToprops = (dispatch) => {
//   return {
//     getCoordinates: () => dispatch(getCoordinates()),
//   };
// };

// export default connect(mapStateToProps, mapdispatchToprops)(DragAndDrop);
