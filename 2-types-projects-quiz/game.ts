/**
 * Let's make a game 🕹
 */

type Direction = "up" | "down" | "left" | "right";
type Position = { x: number; y: number };

let position: Position = { x: 0, y: 0 };

const move = (direction: Direction): Position => {
  const { x, y } = position;
  switch (direction) {
    case "up":
      return (position = { ...position, y: y + 1 });
    case "down":
      return (position = { ...position, y: y - 1 });
    case "left":
      return (position = { ...position, x: x - 1 });
    case "right":
      return (position = { ...position, x: x + 1 });
    default:
      throw new Error("unknow direction");
  }
};

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
