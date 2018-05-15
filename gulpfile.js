const gulp = require('gulp')
// const tsp = ts.createProject('tsconfig.json')
const exec = require('child_process').exec

// let tsChild,        //监视ts文件修改子进程
//   serverChild;    //重启服务器子进程
//编译ts文件
gulp.task('build-ts', function () {
  const tsChild = exec('tsc', (error, stdout, stderr) => {
    console.log(`tsc====>stdout: ${stdout}`);
    console.log(`tsc====>stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
});
//自动重启服务器
gulp.task('restart', function () {
  const serverChild = exec('npm run watch', (error, stdout, stderr) => {
    console.log(`restart=====>stdout: ${stdout}`);
    console.log(`restart=====>stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
});
//开发任务
gulp.task('dev', ['build-ts', 'restart']);