$(document).ready(buildNavBar);

var Config;
const NAVBAR = Config.navbar;

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