(function(window, jQuery) {
	
    var $head = $("head");
    var css_url = chrome.extension.getURL('assets/css/travel_book.css');
    var $css = "<link href=" + css_url +" rel='stylesheet'>";
    $head.append($css);
    
    $(window).on('hashchange', function() {
        var hash = window.location.hash.slice(1);
        if(hash.indexOf('eventpage_6') > -1){
            $("#maincell .ep-ea.noprint").append("<div class='travel_book'>Request Travel Booking</div>");
        }        
    });
    
    $(document).on('click','.travel_book', function(){
        var baseUrl = "https://tkbcn.typeform.com/to/qyZRCw?location=<location>&from=<from>&to=<to>";
        var location = $("input[placeholder='Enter a location']").val();
        var from = $(".text.dr-date").eq(0).val();
        var to = $(".text.dr-date").eq(1).val();
        
        baseUrl = baseUrl.replace('<location>',location).replace('<from>',from).replace('<to>',to);
        
        win = window.open(baseUrl, '_blank');
    });
	
})(window, $)