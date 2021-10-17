import { useEffect, useRef, useState } from "react";

export default function DragAndDrop({ child, classes }) {
  const elemRef = useRef(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    console.log(elemRef.current.getBoundingClientRect());
    console.log(elemRef.current)
  }, [click]);
  const handleClick = (event) => {
    setClick(!click);
    event.stopPropagation();
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <div className='drag-and-drop' ref={elemRef} onClick={handleClick}>
      {child}
    </div>
  );
}
