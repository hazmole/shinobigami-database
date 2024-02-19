var Utils = {};

/* Copy */
Utils.CopyToClipboard = function(evt, text){
	navigator.clipboard.writeText(text);

	var x = (evt.clientX + 15);
	var y = (evt.clientY - 5);

	$('<div id="CopyMsg"></div>')
		.appendTo("body")
		.css("top",  y+"px")
		.css("left", x+"px")
		.fadeIn(200)
		.fadeOut(200, function() {
      		$(this).remove(); 
    	});
}

/* Loading */
Utils.BlockUI = function(){
	$('body').append(`<div id="Loading"><div class="lds-dual-ring"></div></div>`);
}
Utils.UnblockUI = function(){
	$("#Loading").remove();
}


/* Expand Method */
Array.prototype.last = function(){
    return this[this.length - 1];
};
String.prototype.fmt = function(){
	return this.replace(/[\t]/g, '')
}
Function.prototype.bindAppend = function(context) {
    var func = this;
    var args = [].slice.call(arguments).slice(1);
    return function() {
        return func.apply(context, [].slice.call(arguments).concat(args));
    }
}