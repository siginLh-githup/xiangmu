const gulp = require("gulp");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
//const babel = require("gulp-babel");


//拷贝所有的html文件
gulp.task("copyHtml", done => {
    gulp.src("html/*.html")
        .pipe(gulp.dest("dist/html"))
        .pipe(connect.reload());
    done();
});

//拷贝所有的图片
gulp.task("copyImg", done => {
    gulp.src("images/**/*")
        .pipe(gulp.dest("dist/images"))
        .pipe(connect.reload());
    done();
});

//拷贝所iconfont文件
gulp.task("icon", done => {
    gulp.src("font/**/*")
        .pipe(gulp.dest("dist/font"))
        .pipe(connect.reload());
    done();
});

//把sass文件转成css文件
gulp.task("sass", done => {
    gulp.src("sass/*scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
    done();
});


//讲高版本js转成低版本js
// gulp.task("babel", done => {
//     gulp.src("js/*.js").pipe(babel({
//             presets: ['@babel/preset-env']
//         }))
//         .pipe(gulp.dest('dist/js'))
//         .pipe(connect.reload());
//     done();
// });

//拷贝js文件
gulp.task("copyJS", done => {
    gulp.src("js/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    done();
});


//搭建服务器
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    });
    done();
});


//创建监听
gulp.task("watch", done => {
    gulp.watch("html/*.html", gulp.series("copyHtml"));
    gulp.watch("images/**/*", gulp.series("copyImg"));
    gulp.watch("sass/*scss", gulp.series("sass"));
    gulp.watch("font/**/*", gulp.series("icon"));
    gulp.watch("js/*.js", gulp.series("copyJS"));
    done();
});


gulp.task("build", gulp.parallel("copyHtml", "sass", "copyImg", "icon", "copyJS"));
gulp.task("default", gulp.series("build", "server", "watch"));