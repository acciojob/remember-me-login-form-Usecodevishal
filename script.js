//your JS code here. If required.
let formEle = document.querySelector("form");
let checkEle = document.querySelector("#checkbox").checked;
formEle.addEventListener("submit", submitForm);

function submitForm(e){
	e.preventDefault();
	
	alert("checkbox status :", checkEle);
}
