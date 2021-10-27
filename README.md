# Kodley dot 

A micro:bit extension for **dot**, an implementation of LOGO like turtle. 
**dot** is a single pixel LED that can be moved around the micro:bit screen. Primary focus of **dot**, is to introduce concepts like sequencing, loops etc.

Using **dot**, students can work on various patterns/puzzles such as drawing a line, creating shapes like 
 a square, a triangle, or forming numbers and letters using LEDs. To get **dot** to complete the puzzles, students experience how to break down puzzles into simple, repeatable steps and, in the process, learn the importance of making sure the steps in the program are written in the correct sequence. Students will practice their sequencing and debugging skills while completing the puzzles and learn how to order **dot** commands such as move forward, move backward, change directions using turn left or turn right as sequential steps in a program.


## Setup & Intro Videos

dot introductory videos 

[Walk-thru setting up dot video](https://www.youtube.com/watch?v=1nse-mlKPsA)  

[dot intro video](https://youtu.be/jNrXkMRNLGw)

## dot Tutorials 
Tutorials to get you started with dot

[Learning to use move forward block](https://makecode.microbit.org/#tutorial:github:kodely-io/dottutorials/dotstep1)  

[Learning to use move backward block](https://makecode.microbit.org/#tutorial:github:kodely-io/dottutorials/dotstep2)  

[Using move forward and move backward blocks](https://makecode.microbit.org/#tutorial:github:kodely-io/dottutorials/dotstep3)  

[Using turn left and turn right blocks](https://makecode.microbit.org/#tutorial:github:kodely-io/dottutorials/dotstep4)  

# Kodely dot reference

## home #home
`dot.home()` moves the **dot** to the center of the screen. **dot** will be facing forward and pen will be in down mode

```blocks
dot.home()
```
## move forward #moveforward
`dot.moveForward()` moves the **dot** one step forward, in the current direction. If the pen is set to down,  it will highlight the LED in that position.

```blocks
dot.moveForward()
```
## move backward #movebackward
`dot.moveBackward()` moves the **dot** one step backward based on the current direction. If the pen is set to down, it will highlight the LED in that position.

```blocks
dot.moveBackward()
```
## turn right #turnright
`dot.turnRight()` turns the **dot** to the right 90 degrees.

```blocks
dot.turnRight()
```
## turn left #turnleft
`dot.turnLeft()` turns the **dot** to the left 90 degrees.

```blocks
dot.turnLeft()
```
## penDown #pendown
`dot.penDown()` sets the **dot**  draw mode to ON. Turns the LEDs when it moves.

```blocks
dot.penDown()
```
## penUp #penup
`dot.penUp()` sets the **dot** draw mode to OFF. Does not the LEDs when it moves.

```blocks
dot.penUp()
```
## erase #erase
`dot.erase()` turns OFF the LED at the current position.

```blocks
dot.erase()
```
## fillScreen #fillscreen
`dot.fillScreen()` turns ON all the LEDs on the screen and sets **dot** to home position.

```blocks
dot.fillScreen()
```
## clearScreen #clearscreen
`dot.clearScreen()` turns OFF all the LEDs on the screen and sets **dot** to home position.

```blocks
dot.clearScreen()
```
## speed #speed
`dot.speed()` determines the speed of how fast **dot** moves on the screen. It is set to default speed of 5.

```blocks
dot.speed()
```

# License

MIT

# Supported targets

* for PXT/microbit

#### Metadata (used for search, rendering)

* for PXT/microbit
