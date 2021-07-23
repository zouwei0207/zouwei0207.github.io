var usercode=document.getElementById('usercode');
var btncheck=document.getElementById('codecheck');
var usercontent=document.getElementById('content');
var encryptcontent=document.getElementById('encryptcontent');
var photogroup=document.getElementById("photos");
var oldcode;
var today=new Date();
var currentcode=today.getFullYear().toString();

// Build the current code based on current date --> month = actual month - 1
if(today.getMonth()<10){
	currentcode+="0" + today.getMonth().toString();
} else {
	currentcode+=today.getMonth().toString();
}

if(today.getDate()<10){
	currentcode+="0" + today.getDate().toString();
} else {
	currentcode+=today.getDate().toString();
}

// initial the page
usercode.value="please input your code";
usercode.focus();
usercontent.hidden=true;
encryptcontent.hidden=true;
photogroup.hidden=true;
encryptcontent.innerHTML="Please input your correct code!";

usercode.addEventListener("click" | "keypress",function(){
	oldcode=usercode.value;
	if(usercode.value==="please input your code"){
		usercode.value="";
	}
});

usercode.addEventListener("keypress",function(){
	if(usercode.value==="please input your code"){
		usercode.value="";
	}

	//TODO: after enter key pressed, the page will reload again??
	if(window.event.keyCode==13){   // if enter key pressed
		codecheck();
	}
	if(window.event.keyCode==27){  // if esc key pressed
		usercode.value=oldcode;
	}
});

btncheck.addEventListener("click",function(){
	codecheck();
});

function codecheck(){
	if(usercode.value == currentcode){
		// alert("Welcome back, Daniel");
		usercontent.hidden=false;
		encryptcontent.hidden=true;
		photogroup.hidden=false;
	} else {
		// alert("Please check your code.");
		usercontent.hidden=true;
		encryptcontent.hidden=false;
		photogroup.hidden=true;
	}
	usercode.focus();
}
