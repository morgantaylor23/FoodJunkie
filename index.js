/*var restaurants = {
    [
        {
            "name": "McDonalds",
            "price": "1",
            "meals": [
                
            ]
            //Other stuff, put whatever you want here
            // be carefule of commas!
        },
        {
            // Here's another one
        }
    ]
};*/

$(document).ready(function() {
    var viewport_height = $(window).height() - $("nav").outerHeight(true);
    $("#main").height(viewport_height);
    $("#chooser").height(viewport_height);
    $("#preference").height(viewport_height);
    $("#cuisines").height(viewport_height);
    
    $('.cuisines input[type="checkbox"]').on("click", function() {
		console.log(this);
		console.log($(this).data("ex"));
	});
});
