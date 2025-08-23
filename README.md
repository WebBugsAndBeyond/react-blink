# react-blink
Reviving the blink tag from back in the day when the Web was good.

The project files were created using Create React App.

## Usage

1. ```$ npm install```
2. ```$ npm run start```

## Blink Component Usage

The Blink React component defines two props to customize its behavior.

* timeout: number
* smoothing: BlinkSmoothing

The ```timeout``` prop defines the blink tag timer effect in milliseconds. The default is 1000.

The ```smoothing``` prop defines the smoothing effect which will change the CSS ```transition-timing-function``` property value. See the ```src/components/Blink.tsx``` and ```src/components/Blink.css``` files for details.

## Usage In Your Own Project

To use the Blink component in your own project simply copy the TypeScript and CSS files into your own project as appropriate (```src/components/Blink.tsx```, and ```src/components/Blink.css```).

## Marquee Components

There are two scrolling marquee components

* Marquee: scrolling text marquee.
* DocumentTitleMarquee: scrolling title bar text marquee.

To use them provide a positive integer for the ```timeout```, and a string for the ```message``` prop.

The scrolling text component renders the marquee message in a ```&lt;span&gt;``` element. It's useful to wrap
in a component with a ```width```, ````overflow-y: hidden```, and ```white-space: nowrap``` if necessary.


