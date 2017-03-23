const path = require('path');
const fs = require('fs');
const glob = require('glob');
const chalk = require('chalk');

function CleanAssetsPlugin() {
}

CleanAssetsPlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', stats => {
        const outputPath = path.resolve(compiler.options.context, compiler.outputPath);

        const assets = stats.toJson().assets;

        const files = glob.sync(path.resolve(outputPath, '**/*'))
            .map(file => { return { path: file, relative: path.relative(outputPath, file) }; });

        const filesToDelete = files
            .filter(file => !assets.some(asset => asset.name === file.relative));

        for (const file of filesToDelete) {
            fs.unlinkSync(file.path);
            console.log('Deleted ' + chalk.yellow(file.relative));
        }
    });
};

module.exports = CleanAssetsPlugin;
