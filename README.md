# Cambridge-Experience-Lab

### How to run the front-end js app

Navigate to the front-end folder called 'WebSockets' using `cd WebSockets` in the terminal.

Then run `http-server` to start the front-end app.

### How run the socket server

Navigate to the server server folder called 'WebSocketsServer' using `cd WebSocketsServer` in the terminal.

Then run `node pagesocket.js` to start the socket server.

### Navigation

There are 7 pages in this app you can navigate to. Each one corresponding to a monitor in the experience lab.

You can use `http://{ip-address}:8080/{page-number}`.
_look at the Troubleshooting for info about the 'ip-address'_

Page Numbers:

page1 = this is the biggest screen in the lab. 6 monitors linked together into one. You can miss it.

page2, page3, page4 = These corresponds to the top three screens on the right of the big screen. Unlike their siblings to the bottom these aren't touch screens.

page5, page6, page7 = These corresponds to the bottom three monitors in the lab. These monitors are touch screen.

### Troubleshooting

When you start the http server you can see the ip address your app is running on after the line 'Available on:'.

    Make sure this is the same ip address being used on the *pageLogic.js* file in the front-end and the *pageSocket.js* file in the server.
