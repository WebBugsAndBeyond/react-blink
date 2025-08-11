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

## Coming soon...Marquee and StatusBarMarquee!!!

