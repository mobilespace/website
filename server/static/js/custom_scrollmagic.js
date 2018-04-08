$(document).ready(function () {
  console.log("Initiating custom voodoo animations...");

  // create new scrollmagic controller
  var controller = new ScrollMagic.Controller();

  // create a animation scene
  var textAnimationScene = new ScrollMagic.Scene({ triggerElement: "#text-trigger", triggerHook: 0, duration: 600 })
    // animate font size in relation to scroll position
    .setTween("#text-animate", { 'font-size': 32 })
    .addIndicators({ name: "text size animate (duration: 600)" }) // add indicators (requires plugin)
    .addTo(controller);

  // create a animation scene
  var viewAnimationScene = new ScrollMagic.Scene({ triggerElement: "#text-trigger", triggerHook: 0, duration: 600 })
    // animate font size in relation to scroll position
    .setTween("#sextant-container", { 'background-color': 'rgba(245, 98, 94, 1)' })
    .addIndicators({ name: "text size animate (duration: 600)" }) // add indicators (requires plugin)
    .addTo(controller);
});
