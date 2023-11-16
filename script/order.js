function validate() {
    var phone = $("#phone").val();
    var email = $("#email").val();
    var billadd = $("#billadd").val();
    var post = $("#post").val();
    var pickup = $("#pickup").prop("checked");
    var online = $("#online").prop("checked");
    var payonpick = $("#payonpick").prop("checked");
    var payonline = $("#payonline").prop("checked");
    var type = document.getElementById("type").value;
    var card = document.getElementById("card").value;

  
    var errMsg = "";							/* stores the error message */
	  var result = true;							/* assumes no errors */
  
    // error message if there's empty space

    if (phone == "") {
		errMsg += "Phone number cannot be empty.\n";
        }
        
    if (email == "") {
        errMsg += "Email cannot be empty.\n";
        }   
        
    if ((pickup == "")&&(online == "")) {
        errMsg += "Delivery option must be selected!\n";
        }

    if (billadd == "") {
    errMsg += "Billing Address cannot be empty.\n";
        }   

    if(post.length > 4){
      errMsg += "Wrong Post Code\n";
        }

    if ((payonpick == "")&&(payonline == "")) {
       errMsg += "A payment method must be selected.\n";
       } 

    // Credit card validation
       switch (type) {
        case "visa":
          if(card.slice(0,1)!="4" || card.length!=16){
            errMsg += "Card number is not valid.\n";
            result = false;
          }
          break;
        case "master card":
          var arr = ["51", "52", "53", "54", "55"];
          if(arr.indexOf(card.slice(0,2))==-1 || card.length!=16){
            errMsg += "Card number is not valid.\n";
            result = false;
          }
          break;
        case "american express":
          var arr = ["34","37"];
          if(arr.indexOf(card.slice(0,2))==-1 || card.length!=15){
            errMsg += "Card number is not valid.\n";
            result = false;
          }
          break;
     
      }

      if (errMsg != "") {
        alert (errMsg);
        result = false;
        } 
        return result;
    }

  
  // Billing address = delivery address function

  function SetBilling(checked) {  
    if (checked) {  
              document.getElementById('BillingAddress').value = document.getElementById('stname').value;    
    } else {  
              document.getElementById('BillingAddress').value = '';   
    }  
    }  


    // Function to show div
  function show1(){
     document.getElementById('div1').style.display ='none';
   }
  function show2(){
     document.getElementById('div1').style.display = 'block';
   }
  function show3(){
     document.getElementById('div2').style.display ='none';
   }
 function show4(){
     document.getElementById('div2').style.display = 'block';
   }




  
  
    
  
  
function init() {
	$("#regform").submit(validate);
}

 /* link HTML elements to corresponding event function */
 function init () {
	/* link the variables to the HTML elements */
  var regForm = 	document.getElementById("regform");

	/* assigns functions to corresponding events */
  regForm.onsubmit = validate;
  }



/* execute the initialisation function once the window*/
window.onload = init;
