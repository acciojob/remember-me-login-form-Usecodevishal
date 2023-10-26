//your JS code here. If required.
let formEle = document.querySelector("form");
let checkEle = document.querySelector("#submit")
formEle.addEventListener("submit", submitForm);

function submitForm(e){
	e.preventDefault();
	console.log(checkEle.checked);
	alert("checkbox status :", )
}
