var WindowCtrl = {};

// size: Large | Normal
WindowCtrl.popupWindow = function(content, size){
	var frame = `
	<div id="WindowFrameHead"><span class="cross-stand-alone" onClick="WindowCtrl.cancel()">&nbsp;</span></div>
	<div id="WindowFrameContent">${content}</div>`;

	$('body').append(`<div id="BlackLayout" onClick="WindowCtrl.cancel()"></div>`);
	$('body').append(`<div id="WindowFrame" class="${size}">${frame}</div>`);
}
WindowCtrl.cancel = function(){
	$("#BlackLayout").remove();
	$("#WindowFrame").remove();
}