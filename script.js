
//Always start off with this and wrap it around all of your Javascript
$( document ).ready( function() {



    $(".btn").on("click", function() {
    
    var valText = $(this).siblings(".text-value").val();
        
        console.log(valText);
   
 //Grabs ID of textArea so we can keep it in the right place
 
 var textColumn = $(this).siblings(".time-column").attr("id")

 //You can then use textColumn as your Key for local storage
 // and valText to store your information you need to have retrieved
        
        })

function checkTime() {
      //Grabs the value of the associated time stamp
    
      var momentTime = moment().hours(); // This uses 24 hour time!!!! 
    

//Note: To stay in JQuery I refactored this to include each.
//Thanks Cassie for your question. It helped me write better code.  

      $(".row").each( function() {
          var finalTime; 
          var valTime = $(this).children(".time-column").text()
          // Grabs the first two characters (note times like 8 am need to be written 08)
          var cutTime = valTime.charAt(0) + valTime.charAt(1)
         
          if (cutTime.length = 2) {
              finalTime = parseInt(cutTime)
          }else {
              finalTime = parseInt(cutTime.charAt(1))
          }
        
//It would be better to use class here but this works and show you how to add
//css directly. Note: Please use a css sheet, not inline CSS like I did in my
//HTML.

          if (cutTime < momentTime) {
            var checkedString = $(this).children(".text-value").text()
          
            if (checkedString.length != null) {
            $(this).children(".text-value").css('text-decoration','line-through');
            }
           
        } else {
            //Get rid of style. Note this pattern! 
            $(this).children(".text-value").css('text-decoration','none');
        }
          

      })

//Here is the basic putting time in.
//I looked up the format from Moment

var mytime = moment().format("dddd, MMMM, Do");

$(".moment-time").text( mytime);




}

checkTime()

})



/* Alternate ways of grabbing the time:
* You could use the area where you make show your time a button which makes it something with an 
* input. By making it a button (that doesn't do anything on click) you can use value and grab it.
* You could also make this a feature by making the button do something. This is a bit of a hack
* but would save you a few lines of code.

*  You could also assign each text area an id and then use the id. To do this it would be best
* to give it name like text-8 and then split it on the '-' to get the 8. This also requires 
* string manipulation */

/* I mentioned using parseInt to make sure you had integers but you can also test for type
 * using .type() in JQuery */
 

 /* For local storage the most important thing to remember is that every text-area needs to 
  * have its own key so you can put it back in the right place. If you don't you will just
  * overwrite what you previously saved. I gave you a hint above */ 