$(document).ready(function () {
  console.log("Initiating custom voodoo animations...");

  // create new scrollmagic controller
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.panel2", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })  // in from right
    .fromTo("section.panel.panel3", 1, { y: "100%" }, { y: "0%", ease: Linear.easeNone })  // in from bottom
    .fromTo("section.panel.panel4", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone }); // in from left

  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "300%"
  })
    .setPin("#pinContainer")
    .setTween(wipeAnimation)
    .addTo(controller);
});
