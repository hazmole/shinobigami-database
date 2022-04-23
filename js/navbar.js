$(document).ready(buildNavBar);

const NAVBAR = [
	{ text: "首頁", url: "index.html" },
	{ text: "忍法列表", url: "ninpo-list.html" },
	{ text: "背景列表", url: "background-list.html" },
]; 

function buildNavBar(){
	var navbarObj = $("#navbar");
	if(!navbarObj) return;

	navbarObj.html("");
	for(var obj of NAVBAR){
		navbarObj.append(`<a href="${obj.url}"><div class="navitem">${obj.text}</div></a>`);
	}

}

