$(function() {
  var VintageTxtTest = {
    
    el : $('#doThis'),
    
    go : function go() {
      this.el.vintageTxt({
         text : ["4 8 15 16 23 42",".  .  .  "]
        ,textSpeed: 300
        ,promptEnabled: false
        //,overlayImage : 'img/lostpcB.png'
        ,onFinishedTyping : this.intro
      });

    },

    intro : function intro() {
      var texts = [
        ["Just kidding!","Welcome to the VintageTxt demo."]
        ,["If you've seen this before and just want the code, click the GitHub thingy in the corner.","Otherwise type your name and hit Enter."]
      ];

      self.el.vintageTxt('updateOptions', {
        textSpeed: 60
        ,onFinishedTyping : null
        ,onEnterKey : this.pageOne
        ,promptEnabled : true
      });
      self.el.vintageTxt('playMany',texts);
    },

    pageOne : function pageOne(e, inputTxt) {
      var texts = [
        ["Did you see that, " + inputTxt + "?","It was an input prompt!","And it kinda, sorta works!"]
        ,["There's also cool features like..."]
      ];

      self.el.vintageTxt('updateOptions', {
        onFinishedTyping : null
        ,onEnterKey : null
      });
      self.el.vintageTxt('playMany',texts);
    },



    checkInput : function checkInput(e, inputResult) {
      var self = VintageTxtTest;
      if (inputResult && inputResult.toUpperCase() == 'HANSO' ) {
        self.el.vintageTxt('reset'
          ,[ "Welcome to the dharma initiative.", "You are located in the swan station.", "Please review the orientation video and enjoy your stay.","Namaste" ]
          ,{ onEnterKey : VintageTxtTest.go }
        );
      }
    }
  }
  var self = VintageTxtTest;

  VintageTxtTest.go();

});
