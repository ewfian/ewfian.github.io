hexo.extend.filter.register("markdown-it:renderer", function (md) {
    const { config } = this; // Optional, parse user config from _config.yml
    md.validateLink = function () {
        return true;
    };
});
