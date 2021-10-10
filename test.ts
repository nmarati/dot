// tests go here; this will not be compiled when this package is used as an extension.
dot.clearScreen();
dot.home();
dot.fillScreen();
dot.home();
dot.penDown();
dot.forward();
dot.turnRight();
dot.forward();
dot.turnLeft();
dot.backward();
dot.penUp();
dot.speed(6);
dot.forward();
dot.erase();
dot.forward();
dot.turnRight();
dot.forward();
dot.turnRight();
for (let i = 0; i < 3; i++) {
    dot.forward();
}

