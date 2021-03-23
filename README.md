# Cambridge-Experience-Lab Media Wall

## Reading Prerequisites

### Technical Diagram of Software

Here's a [technical diagram/overview](CambridgeExperienceLabTechnicalFindings.pdf) of the software and its subsequent parts.

## Software Prerequisites

### Check if you have Node installed

In the terminal, check if you have node installed by running `node --version`.

If there's an error, install node from this site: <https://nodejs.org/en/download/>

### Install http-server locally

After downloading node, you need to install http-server locally using this command: `npm install http-server`.

This will allow you to run the front-end js app.

## Run the front-end js app

Navigate to the front-end folder called 'WebSockets' using `cd WebSockets` in the terminal.

Run `npm install` to install the dependencies.

Then run `http-server` to start the front-end app.

## Run the socket server

Navigate to the server server folder called 'WebSocketsServer' using `cd WebSocketsServer` in the terminal.

Run `npm install` to install the dependencies.

Then run `node pagesocket.js` to start the socket server.

## Starting up the hardware on the 6th Floor

Once the software is running on terminal, it's time to start the Media Wall itself. Here's how: [Media Wall Basic Start-up instructions](CX%20Media%20Wall%20Basic%20Instr_02-2021.pdf).

This will guide you on how to start the different monitors and PCs connected to the Media Wall on the 6th floor.

## Navigation

There are 7 pages in this app you can navigate to. Each one corresponding to a monitor in the experience lab.

You can use `http://{ip-address}:8080/{page-number}`.
_look at the Troubleshooting for info about the 'ip-address'_

### Page Numbers

`page1` = this is the biggest screen in the lab. 6 monitors linked together into one. You can't miss it.

`page2, page3, page4` = These corresponds to the top three screens on the right of the big screen. Unlike their siblings to the bottom these aren't touch screens.

`page5, page6, page7` = These corresponds to the bottom three monitors in the lab. These monitors are touch screen.

## Troubleshooting

When you start the **http server** you can see the ip address your app is running on after the line **'Available on:'**.

Make sure this is the same ip address being used on the **pageLogic.js** file in the front-end and the **pageSocket.js** file in the server.
