


const { src, dest, series, parallel, watch } = require('gulp');

const sass = require('gulp-sass')(require('sass'));

// Lembre-se que gulp-imagemin@7.1.0 é a versão recomendada para projetos com require()
const imagemin = require('gulp-imagemin');

// Tarefa para compilar SCSS
function styles() {
  return src('src/styles/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('dist/styles'));
}

// Tarefa para mover scripts JS
function scripts() {
  return src('src/scripts/**/*.js')
    .pipe(dest('dist/scripts'));
}

// Tarefa para otimizar imagens - com a correção de encoding
function images() {
  return src('src/images/**/*', { encoding: false })
    .pipe(imagemin())
    .pipe(dest('dist/images'));
}

// Tarefa para monitorar alterações nos arquivos
function watchFiles() {
  watch('src/styles/**/*.scss', styles);
  watch('src/scripts/**/*.js', styles);
  watch('src/images/**/*', images);
}

// Tarefa para construir os arquivos de produção (roda apenas uma vez)
const build = parallel(styles, images, scripts);

// Exportar tarefas individuais
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watchFiles;
exports.build = build;

// Tarefa Padrão (executada com o comando "gulp")
// Agora, ela constrói os arquivos e depois começa a monitorar.
exports.default = series(build, watchFiles);