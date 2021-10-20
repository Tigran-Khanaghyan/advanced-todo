export function findHorizontalMoveDirection(prevIndex, index) {
  let direction = null;

  if (prevIndex < index) {
    direction = "right";
  } else if (prevIndex > index) {
    direction = "left";
  }
  return direction;
}
