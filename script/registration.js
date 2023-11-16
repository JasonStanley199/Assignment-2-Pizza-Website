/* write functions that define the action for each event */
function validate() {
    var sid = $("#sid").val();
    var pwd1 = $("#pwd1").val();
    var pwd2 = $("#pwd2").val();
    var name = $("#name").val();
    var email = $("#email").val();

    var genm = $("#genm").prop("checked");
    var genf = $("#genf").prop("checked");
 
	var errMsg = "";							/* stores the error message */
	var result = true;							/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;				/* regular expression for letters and spaces only */

    /*  Check all required inputs have value */
    	
	if (sid == "") {
		errMsg += "User ID cannot be empty.\n";
		}

	if (pwd1 == "") {
		errMsg += "Password cannot be empty.\n";
		}

	if (pwd2 == "") {
		errMsg += "Retype password cannot be empty.\n";
		}

	if (name == "") {
		errMsg += "User name cannot be empty.\n";
		}

	if ((genm == "")&&(genf == "")) {
		errMsg += "A gender must be selected.\n";
        }
        
    if (email == "") {
        errMsg += "Email cannot be empty.\n";
        }
    
		
	/* Check if the Email contains an @ symbol  */
	

	if (email.indexOf('@') == 0 ) {
		errMsg += "Email cannot start with an @ symbol.\n";
		}

	if (email.indexOf('@') < 0 ) {
		errMsg += "Email ID must contain an @ symbol.\n";
		}
		
	
	/* Check if password and retype password are the same & Length must be more than 8 characters */
	if (pwd1 != pwd2) {
		errMsg += "Passwords do not match.\n";
    }
    
    if(pwd1.length < 8){
        errMsg += "Password is too short.\n";
        }
    
    
	/* Check if name contains only letters and spaces */
	if (! name.match (pattern)) {
		errMsg += "Name contains symbols.\n";
	}

	/* Display error message any error(s) is/are detected */
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

/* link HTML elements to corresponding event function */
function init () {
	/* link the variables to the HTML elements */
  var regForm = 	document.getElementById("regForm");

	/* assigns functions to corresponding events */
  regForm.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;

