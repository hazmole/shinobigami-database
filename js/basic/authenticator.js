var Config;

checkAuthentication();

function checkAuthentication(){
	if(isAtAuthPage()) return ;

	var status = localStorage.getItem(Config.auth_status_key);
	if(status !== "true"){
		window.location.replace("./auth.html")
	}

	//================================
	function isAtAuthPage(){
		return window.location.href.match(/auth\.html$/)!=null;
	}

}

function auth(){
	//TODO: auth 
	var val = $("#password").val();
	if(val !== Config.auth_password){
		document.getElementById("password").setCustomValidity('暗號錯誤');
		return;
	}

	localStorage.setItem(Config.auth_status_key, true);
	window.location.replace("./index.html")
}

function clearAuthStatus(){
	localStorage.setItem(Config.auth_status_key, false);
}



/*
function setRandCypher(){
	function randInt(max){
		return Math.floor(Math.random()*max);
	}
	//===========================
	var cypher = [];
	cypher.push(randInt(6));
	cypher.push(randInt(6));
	cypher.push(randInt(6));
	localStorage.setItem('shinobi-auth-cypher', cypher);
}
*/

