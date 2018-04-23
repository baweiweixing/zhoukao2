var gulp=require("gulp");
var server=require("gulp-webserver");
var datalist=require("data/data.json")

gulp.task("default",function(){
    gulp.src("src")
    .pipe(server({
        fallback:"index.html",
        port:8090,
        host:"169.254.5.130",
        open:true,
        livereload:true,
        middleware:function(req,res,next){
            if(req.url==="/mainlist"){
                res.end(JSON.stringify(datalist))
            }
            next()
        }
}))
})

gulp.task("watch",function(){
    gulp.watch("default")
})