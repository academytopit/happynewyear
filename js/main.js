function autoType(elementClass, typingSpeed){
    var thhis = $(elementClass);
    thhis.css({
      "position": "relative",
      "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    thhis.text("|");
    setTimeout(function(){
      thhis.css("opacity",1);
      thhis.prev().removeAttr("style");
      thhis.text("");
      for(var i = 0; i < amntOfChars; i++){
        (function(i,char){
          setTimeout(function() {        
            newString += char;
            thhis.text(newString);
          },i*typingSpeed);
        })(i+1,text[i]);
      }
    },1500);
  }

  function firework() {
    var firework = JS_FIREWORKS.Fireworks({
        id : 'fireworks-canvas',
        hue : 120,
        particleCount : 250,
        delay : 0,
        minDelay : 20,
        maxDelay : 40,
        boundaries : { // of respawn and target
            top: 500,
            bottom: 240,
            left: 800,
            right: 1100
        },
        fireworkSpeed : 1,
        fireworkAcceleration : 1.05,
        particleFriction : .95,
        particleGravity : 1.5
    });
    firework.start();
};
  
  $(document).ready(function(){
    // Now to start autoTyping just call the autoType function with the 
    // class of outer div
    // The second paramter is the speed between each letter is typed.   
    autoType(".type-js",120);
    firework();
  });