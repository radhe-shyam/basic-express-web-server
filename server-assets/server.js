function normalizePort(e){var r=parseInt(e,10);return isNaN(r)?e:r>=0?r:!1}function onError(e){if("listen"!==e.syscall)throw e;var r="string"==typeof port?"Pipe "+port:"Port "+port;switch(e.code){case"EACCES":console.error(r+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(r+" is already in use"),process.exit(1);break;default:throw e}}function onListening(){var e=server.address(),r="string"==typeof e?"pipe "+e:"port "+e.port;debug("Listening on "+r),console.log(app.get("env"),"server is running on",r)}var cachedModules=[];cachedModules[8264]={exports:{}},function(e,r){var s=require("express"),o=s.Router();o.get("/",function(e,r,s){r.render("index")}),o.get("/partials/:name",function(e,r,s){r.render("partials/"+e.params.name)}),e.exports=o}.call(this,cachedModules[8264],cachedModules[8264].exports),cachedModules[8485]={exports:{}},function(e,r){var s=require("express"),o=require("path"),t=(require("serve-favicon"),require("morgan")),n=require("body-parser"),a=cachedModules[8264].exports,i=s();i.disable("x-powered-by"),i.set("views",o.join(__dirname,"/..","client-assets","views")),i.set("view engine","ejs"),i.use(t("dev")),i.use(n.json()),i.use(n.urlencoded({extended:!1})),i.use(s["static"](o.join(__dirname,"/..","client-assets","public"))),i.use("/",a),i.use(function(e,r,s){var o=new Error("Not Found");o.status=404,r.status(404),r.render("404.ejs")}),"development"===i.get("env")&&i.use(function(e,r,s,o){s.status(e.status||500),s.render("error",{message:e.message,error:e})}),i.use(function(e,r,s,o){s.status(e.status||500),s.render("error",{message:e.message,error:{}})}),e.exports=i}.call(this,cachedModules[8485],cachedModules[8485].exports);var app=cachedModules[8485].exports,debug=require("debug")("test:server"),http=require("http"),port=normalizePort(process.env.PORT||"3000");port=normalizePort("prod"===process.env.NODE_ENV?process.env.PORT||"80":"staging"===process.env.NODE_ENV?process.env.PORT||"8080":process.env.PORT||"3000"),app.set("port",port);var server=http.createServer(app);server.listen(port),server.on("error",onError),server.on("listening",onListening);
//# sourceMappingURL=UGLIFY_SOURCE_MAP_TOKEN