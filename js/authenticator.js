$(document).ready(checkAuthentication);

function checkAuthentication(){
	function isAtAuthPage(){
		return window.location.href.match(/auth\.html$/)!=null;
	}
	function hasSetCypher(){
		return localStorage.getItem('shinobi-auth-cypher')!=null;
	}

	//===========================
	if(isAtAuthPage()){
		return hasSetCypher()? null: setRandCypher();
	}

	var status = localStorage.getItem('shinobi-auth-status');
	if(!status){
		window.location.replace("./auth.html")
	}
}

function auth(){
	//TODO: auth 
	var val = $("#password").val();
	if(val !== "shinobi") return;

	localStorage.setItem('shinobi-auth-status', true);
	window.location.replace("./index.html")
}

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

function clearCypherStatus(){
	localStorage.setItem('shinobi-auth-cypher', null);
	localStorage.setItem('shinobi-auth-status', false);
}