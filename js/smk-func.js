$(document).ready(function(){
    $('#page').delay(100).fadeIn(200);
});


$('.language-flag').click(function(){
	$('.language-select').slideToggle();
});

$('#open-menu').click(function(){
	$('.menu-mobile').css("box-shadow", "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)");
	$('.menu-mobile').css("height", "382px");
	$('#open-menu').css("display", "none");
	$('#close-menu').css("display", "inline-block");
	$('.menu-mobile').removeClass("no-bg");
});

$('#close-menu').click(function(){
	$('.menu-mobile').css("box-shadow", "none");
	$('.menu-mobile').css("height", "66px");
	$('#close-menu').css("display", "none");
	$('#open-menu').css("display", "inline-block");
});


function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function getQueryParam(param) {
	var param2 = null;
    location.search.substr(1)
	    .split("&")
    	.some(function(item) { // returns first occurence and stops
        	return item.split("=")[0] == param && (param2 = item.split("=")[1])
    	})
	return param2;
}

$(document).ready(function(){
	var paramLang = getQueryParam('lang');
	if( paramLang !== null)
	{
    paramLang = paramLang.replace('/', '');
		updateLang(paramLang);
		setCookie('smk_lang',paramLang);
	}
	$('.language-selector').click(function(){
		var $this = $(this);
		var language = $this.data('lang');
		setCookie('smk_lang',language);
		updateLang(language);
	});
	updateLang();

});


$('.language-selector').click(function() {
    location.reload();
});
