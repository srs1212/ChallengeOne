var personOne = {firstName: "john", lastName: "johnson", phoneNumber: '404-333-3232'};
var personTwo = {firstName: "sally", lastName: "johnson", phoneNumber: '404-334-2323'};
var personThree = {firstName: "sue", lastName: "johnson", phoneNumber: '404-335-3223'};

var people = [personOne, personTwo, personThree];
var $output = $('#contactInfo');

people.forEach(function(folks) {
	$output.append ('<tr>\
					<td>' + folks.firstName + '\
					</td>\
					<td>' + folks.lastName + '\
					</td>\
					<td>' + folks.phoneNumber + '\
					</td>\
				</tr>');
});


// Loop through the array in the javascript file and spit the items out on to the page.

function submitIt (event){
	event.preventDefault();
	var firstNameVal = $("#firstName").val();
	var lastNameVal = $("#lastName").val();
	var phoneNoVal = $("#phone").val();

		if(firstNameVal && lastNameVal && phoneNoVal) {
				$output.append ('<tr>\
						<td>' + firstNameVal + '\
						</td>\
						<td>' + lastNameVal + '\
						</td>\
						<td>' + phoneNoVal + '\
						</td>\
					</tr>');
	alert("Hi " + firstNameVal + " Good luck with the challenge")	;
				
	var firstNameVal = $("#firstName").val("");
	var lastNameVal = $("#lastName").val("");
	var phoneNoVal = $("#phone").val("");
	}		
};

$('#submit-button').on('click', submitIt);





// Give the form functionality - when the user clicks submit
//  - an alert pops up that contains the information in the fields. 
//  (BONUS: Append the content to the page)
// Open a popup with a challenge in it.