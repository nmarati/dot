// tests go here; this will not be compiled when this package is used as an extension.
dot.clearScreen();
dot.home();
dot.fillScreen();
dot.home();
dot.penDown();
dot.moveForward();
dot.turnRight();
dot.moveForward();
dot.turnLeft();
dot.moveBackward();
dot.penUp();
dot.speed(6);
dot.moveForward();
dot.erase();
dot.moveForward();
dot.turnRight();
dot.moveForward();
dot.turnRight();
for (let i = 0; i < 3; i++) {
    dot.moveForward();
}
dot.home();

