$(document).ready(buildNavBar);

const NAVBAR = [
	{ text: "首頁", url: "index.html" },
	{ text: "忍法列表", url: "ninpo-list.html" },
	{ text: "背景列表", url: "trait-list.html" },
	//{ text: "奧義(X)", url: "#" },
	//{ text: "創角模擬器", url: "character-generator.html", style:"bright" },
]; 

function buildNavBar(){
	var navbarObj = $("#navbar");
	if(!navbarObj) return;

	navbarObj.html("");
	for(var obj of NAVBAR){
		navbarObj.append(`<a href="${obj.url}"><div class="navitem ${obj.style}">${obj.text}</div></a>`);
	}

}

