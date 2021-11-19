const chalk = require('chalk')

const del_filter = (filter) => {
    // Delete in index file !
    let index = require(`${process.env.PWD}/filters/index.js`)
    delete index[filter];
    let fileWrite = "module.exports = { \n"
    Object.keys(index).forEach((e, i, a) => {
        fileWrite += `      ${e}: require('./${e}.js')`
        if (i !== a.length - 1) {
            fileWrite += `,`
        }
        fileWrite += `\n`
    });
    fileWrite += "}"

    fs.writeFileSync(`./filters/index.js`, fileWrite);

    fs.unlink(`./filters/${filter}.js`, (err) => {
        if (err) throw err;
        console.info('Filter is created successfully !');
    });
}

module.exports = del_filter
