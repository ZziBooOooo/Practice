// Alternative Versions:

// - CSS view-timeline 2022 + Polyfill: https://codepen.io/bramus/pen/dyeVmvg 
// - JS ScrollTimeline 2022 Syntax + Polyfill: https://codepen.io/bramus/pen/WNzZmdP 
// - JS Motion One: https://codepen.io/bramus/pen/MWVvrEE
// - CSS @scroll-timeline: https://codepen.io/bramus/pen/QWGbOBQ
// - JS ScrollTimeline 2021 Syntax: https://codepen.io/bramus/pen/jOVWpyr 👈 = The version you are currently looking at

// Polyfill for browsers with no Scroll-Timeline support
import 'https://rawcdn.githack.com/flackr/scroll-timeline/637746fa559c3f9d01fcdaf2fcb7e649d18dfc33/dist/scroll-timeline.js';

const $sectionPin = document.querySelector("#sectionPin");
const $slidingContent = document.querySelector(".pin-wrap");

const sectionHeightInVh = 500; // 👈 The scrolling distance over which the horizontal section should slide across

// Adjust wrapper
// - Change height so that we have room to scroll in
// - Add fix to make position: sticky work
$sectionPin.style.height = `${sectionHeightInVh}vh`;
$sectionPin.style.overflow = `visible`;

// Adjust content
// - Make it stick to the top
$slidingContent.style.position = "sticky";
$slidingContent.style.top = 0;

new Animation(
  new KeyframeEffect(
    $slidingContent,
    {
      transform: ["translateX(0)", `translateX(calc(-100% + 100vw))`]
    },
    { duration: 1, fill: "both" }
  ),
  new ScrollTimeline({
    scrollSource: document.documentElement,
    timeRange: 1,
    fill: "both",
    scrollOffsets: [
      { target: $sectionPin, edge: "start", threshold: 1 },
      { target: $sectionPin, edge: "end", threshold: 1 }
    ]
  })
).play();