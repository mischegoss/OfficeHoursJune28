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
        
//It would be better to use class here but this  works
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






}

checkTime()

})



