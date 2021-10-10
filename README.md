# Kodley dot 

A micro:bit extension for **dot** an implementation of LOGO like turtle. 
**dot** is a single pixel LED that can be moved around the micro:bit screen. Primary focus of **dot**, is to introduce concepts like sequencing, loops etc.

# Kodely dot reference

## home #home
`dot.home()` moves the **dot** to the center of the screen. **dot** will be facing forward and pen will be in down mode

```sig
dot.home()
```
## move forward #move_forward
`dot.moveForward()` moves the **dot** one step forward, in the current direction. If the pen is set to down,  it will highlight the LED in that position.

```javascript
dot.moveForward();
```
## move backward #move_backward
`dot.moveBackward()` moves the **dot** one step backward based on the current direction. If the pen is set to down, it will highlight the LED in that position.

```javascript
dot.moveBackward();
```
## turn right #turn_right
`dot.turnRight()` turns the **dot** to the right 90 degrees.

```javascript
dot.turnRight();
```
## turn left #turn_left
`dot.turnLeft()` turns the **dot** to the left 90 degrees.

```javascript
dot.turnLeft();
```
## penDown #pendown
`dot.penDown()` sets the **dot**  draw mode to ON. Turns the LEDs when it moves.

```javascript
dot.penDown();
```
## penUp #penup
`dot.penUp()` sets the **dot** draw mode to OFF. Does not the LEDs when it moves.

```javascript
dot.penUp();
```
## erase #erase
`dot.erase()` turns OFF the LED at the current position.

```javascript
dot.erase();
```
## fillScreen #fillscreen
`dot.fillScreen()` turns ON all the LEDs on the screen and sets **dot** to home position.

```javascript
dot.fillScreen();
```
## clearScreen #clearscreen
`dot.clearScreen()` turns OFF all the LEDs on the screen and sets **dot** to home position.

```javascript
dot.clearScreen();
```
## speed #speed
`dot.speed()` determines the speed of how fast **dot** moves on the screen. It is set to default speed of 5.

```javascript
dot.speed();
```

# License

MIT

# Supported targets

* for PXT/microbit

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
