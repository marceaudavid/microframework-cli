const fs = require('fs')

const add_filter = (filter) => {
    fs.writeFile(`./filters/${filter}.js`, `
    module.exports = () => {
        console.log("${filter}");
    }
    `, (err) => {
        if (err) throw err;
        // Add in index file !
        let index = require(`${process.env.PWD}/filters/index.js`)
        index = {
            ...index, [filter]: null
        }
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
        console.info('Filter is created successfully !');
    });
}

module.exports = add_filter
