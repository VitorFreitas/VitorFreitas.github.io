var minify = require("minify"),
	fs = require("fs"),
	glob = require("glob");


fs.mkdir("min", function(err){});
fs.mkdir("min/js", function(err){});
fs.mkdir("min/css", function(err){});

glob("*(*.js|*.html|*.css)" , { matchBase : true } , function(err , files){
	files.forEach(function(e) { 
		if (e.search("node_modules") == -1 && e.search("min") == -1) {
			
			minify(e, function(error, data) {
			    if (error)
			        console.error(error.message);
			    else
			        fs.writeFileSync("min/" + e, data);
			});

		};
	})
});

glob("min/*" , {matchBase : true} , function(err, files){
	files.forEach(function(f){
		fs.createReadStream(f).pipe(fs.createWriteStream("../"+f))		
	});
});