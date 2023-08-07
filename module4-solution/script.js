
(function (window){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];



for ( var count in names) {

  var name = names[count];
  
   var firstLetter = name.charAt(0);
   firstLetter = firstLetter.toLowerCase();


  if (firstLetter === 'j') {
    byeSpeaker.speak(name);
  } else {
     helloSpeaker.speak(name);
  }
}

})(window);

