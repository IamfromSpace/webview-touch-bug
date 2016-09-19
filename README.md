# Chromium Touch + Prevent Default Bug Example

For this example to work, you will need to serve this directory on port 7500. If you have Python installed on your local machine, use the following command to serve the directory: `python -m SimpleHTTPServer 7500`.

Next you need to add it to Chromium.  Navigate to `chrome://extensions/`.  On the extension page, check `Developer mode`, click `Load unpacked extension...` and select this project's root directory.  Click `Launch` for the newly added `Webview Touch + Prevent Default Bug Example`.

### How this example works

The green space within the black border is a Webview.  Both the top level frame and the webview have counters that increment whenever clicked.  The webview also has a counter that will prevent default and increment when it receives a 'touchstart' event.

### Issues:

##### In touch emulation mode (in chrome 52 and below, fixed in 55):
  - no mouse events occur in webviews

#####  With a Planar Touch screen on Windows 7 and Windows 10:
  - mouse events correctly occur in the webview under normal circumstances
  - If an element is tapped that calls `e.preventDefault()` on `touchstart`:
    - Mouse events will _NOT_ occur on the next click in a different context (webview, or main frame)
    - These effects "stack."  Tapping the element four times will mean that four taps do not fire mouse clicks when switching contexts.

##### As an example:
  0. You must be using Windows (or linux?) with an actual touchscreen--_not_ emulation
  1. Tap back and forth between the main and webview click counters
    - they will increment exactly once for each tap
  2. Tap the `Prevent touchstart default:` button
    - it will increment once
  3. Tap the main click counter button twice.
    - The first touch is ignored, and the second increments the counter
    - it _should_ increment twice
  4. Tap the webview click counter button twice.
    - The first touch is ignored, and the second increments the counter
    - it _should_ increment twice
  5. Tap the `Prevent touchstart default:` multiple times
    - it will increment once per tap
  6. Tap the main click counter button one more times than the value shown on the `Prevent touchstart default:` button
    - Only the last touch will create a click event and the rest will not
    - it _should_ increment once per tap

For additional clarity the following events are written to console from both the main frame and the webview:
 - focus
 - blur
 - touchstart
 - touchmove
 - touchend
 - mousedown
 - mouseup
 - mousemove
 - click

You can launch the webview inspector by going to `chrome://inspect/`, clicking `Apps` and then `Inspect` for the webview.
