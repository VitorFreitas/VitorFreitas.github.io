var minify = require("minify"),
	fs = require("fs"),
	glob = require("glob");


glob("*(*.js|*.html|*.css)" , { matchBase : true } , function(err , files){
	files.forEach(function(e) { 
		if (e.search("node_modules") == -1) {
			console.log(e);
		};
	})
});

minify('index-original.html', function(error, data) {
    if (error)
        console.error(error.message);
    else
        console.log("data");
});