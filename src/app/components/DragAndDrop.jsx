import { useEffect, useRef } from "react";

export default function DragAndDrop({ child, classes }) {
  // const elemRef = useRef(null);

  // useEffect(() => {
  //   elemRef.current.addEventListener('click', handlClick)
  //   elemRef.current.addEventListener("mousedown", handleMove);
  //   elemRef.current.addEventListener("dragstart", () => {
  //     return false;
  //   });
  // });

  // const handleMove = (event) => {

  //   let element = elemRef.current;

  //   event.stopPropagation();
  //   event.preventDefault();

  //   element.style.position = "absolute";
  //   element.style.zIndex = 1000;
  //   document.body.append(element);

  //   moveAt(event.pageX, event.pageY);
  //   function moveAt(pageX, pageY) {
  //     element.style.left = pageX - element.offsetWidth / 2 + "px";
  //     element.style.top = pageY - element.offsetHeight / 2 + "px";
  //   }

  //   function onMouseMove(event) {
  //     moveAt(event.pageX, event.pageY);
  //   }
  //   document.addEventListener("mousemove", onMouseMove);

  //   element.onmouseup = function () {
  //     document.removeEventListener("mousemove", onMouseMove);
  //     element.onmouseup = null;
  //   };
  // };
  // const handlClick = (event) => {
  //   console.log(event.target.name)
  // }

  return <div className={classes}>{child}</div>;
}
