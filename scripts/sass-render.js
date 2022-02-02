var sass = require('sass')

sassFn = function (data, options) {
    return new Promise(function (resolve, reject) {
        var config = {
            data: data.text,
            file: data.path,
            outputStyle: 'compressed',
            indentedSyntax: false
        };

        try {
            var result = sass.renderSync(config)
            resolve(result.css.toString());
        } catch (error) {
            console.error(error.toString())
            reject(error);
        }
    });
}

sassFn.disableNunjucks = true

hexo.extend.renderer.register('scss', 'css', sassFn);