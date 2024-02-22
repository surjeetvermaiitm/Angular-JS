function log(message) {
  console.log(message);
}

let message = "Hello world";

log(message);

function doSomething() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //   console.log("finally" + i);
}

doSomething();

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "a", false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {
  Red = 0,
  Green,
  Blue,
}

let bgColor = Color.Blue;

//type assertion

// let myMessage = "abc";
// let endsWith = myMessage.endsWith("c");

let myMessage;
myMessage = "abc";
// let endsWith = (<string>myMessage).endsWith("c");
let endsWith = (myMessage as string).endsWith("c");

//arrow fn

let doLog = (msg) => {
  console.log(message);
};

//interface
// let drawPint = (x, y, a, b, c) => {};
// let drawPint = (point: { x: number; y: number }) => {};

// interface Point {
//   x: number;
//   y: number;
//   draw: () => void;
// }
// let drawPint = (point: Point) => {};

// let getDistance = (pointA: Point, pointB: Point) => {
//   //
// };

class Point {
  x: number;
  y: number;
  draw() {}
  getDistance(another: Point) {}
}
let drawPint = (point: Point) => {};

let getDistance = (pointA: Point, pointB: Point) => {
  //
};
