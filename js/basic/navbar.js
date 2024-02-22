$(document).ready(buildNavBar);

const NAVBAR = [
	{ type:"link", text: "首頁", url: "index.html", style: "background:var(--color-TitleBar-bg);" },
	{ type:"folder", text: "▼ 規則速查", folderKey: "rule-ref", list: [
			{ type:"link", text: "斜齒書擴充", url: "rule-expansion-hasuba-pack.html" },
			{ type:"link", text: "御齋書擴充", url: "rule-expansion-otogi-pack.html" },
			{ type:"link", text: "隱忍書擴充", url: "rule-expansion-oni-pack.html" },

		]
	},
	{ type:"folder", text: "▼ 資料一覽", folderKey: "player-data", list: [
			{ type:"link", text: "忍法", url: "ninpo-list.html" },
			{ type:"link", text: "背景", url: "trait-list.html" },
		]
	},
	//{ text: "奧義(X)", url: "#" },
	//{ text: "創角模擬器", url: "character-generator.html", style:"bright" },
]; 

function buildNavBar(){
	var navbarObj = $("#FrameNavbar");
	if(!navbarObj) return;

	// generate Nav Button
	var navObjList = [];
	NAVBAR.map( obj => {
		if(obj.type == "folder"){
			navObjList.push(obj);
			for(var subObj of obj.list) {
				subObj.toggleDepend = obj.folderKey;
				navObjList.push(subObj);
			}
		}
		if(obj.type == "link"){
			navObjList.push(obj);
		}
	});
	var navElemList = navObjList.map( obj => {
		if(obj.type == "folder") return buildFolderBtn(obj);
		if(obj.type == "link") return buildLinkBtn(obj);
	});
	navbarObj.empty();
	navbarObj.append(`<div id="FrameNavbarInner">${navElemList.join('')}</div>`);

	// Handle Folder actions
	$(".navfolder").on('click', function(){
		var key = $(this).attr("data-folderkey")
		$(`.navitem[data-dependkey=${key}]`).toggle(200);
	});
	var url = window.location.pathname
	var currentPageUrl = url.substring(url.lastIndexOf('/')+1);
	var currentPageObj = navObjList.find( obj => obj.url == currentPageUrl );
	$(".navitem[data-dependkey]").hide();
	if(currentPageObj!=null && currentPageObj.toggleDepend!=null){
		$(`.navitem[data-dependkey=${currentPageObj.toggleDepend}]`).show();
	}	

	// Handle Shrink-Screen
	$("#FrameContentHeader").prepend('<div id="NavbarToggleBtn"></div>');
	var navbarBtnObj = $("#NavbarToggleBtn");
	navbarBtnObj.on('click', function(){
		$("#FrameNavbar").toggleClass("show");
	});
	

	//====================
	function buildLinkBtn(obj){
		return `<a href="${obj.url}"><div class="navitem pseudoBtn"
				style="${obj.style? obj.style: ""}"
				${ obj.toggleDepend!=null? (`data-dependkey="${obj.toggleDepend}"`): "" }>
		 	${obj.text}
	 	</div></a>`.fmt();
	}
	function buildFolderBtn(obj){
		return `<div class="navitem navfolder pseudoBtn" data-folderkey="${obj.folderKey}">${obj.text}<i class="arrow right"></i></div>`;
	}
}