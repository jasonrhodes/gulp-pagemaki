gulp-pagemaki
=============

Gulp plugin to pipe vinyl file objects and transform them into static HTML pages


## Usage

```javascript
var maki = require("gulp-pagemaki");
var path = require("path");

gulp.task('statics', function () {
	
	return gulp.src("./src/pages/**/*.html")
		.pipe(maki({
			templateDir: path.join(__dirname, "src", "layouts")
		}))
		.pipe(gulp.dest(./public));

});
```