var sass = require('sass')

sassFn = function (data, options) {
    try {
        var result = sass.compile(data.path, { style: "compressed" })
        return result.css.toString();
    } catch (error) {
        console.error(error.toString())
        throw error;
    }
}

sassFn.disableNunjucks = true

hexo.extend.renderer.register('scss', 'css', sassFn, true);