const chalk = require('chalk')
fs = require('fs')

const new_project = (project_name) => {
    if (!fs.existsSync(`./${project_name}`)) {
        const helloWorldTemplate = `
        module.exports = () => { 
            return "Hello World" 
        }
        `

        const indexTemplate = `
        module.exports = { 
            hello: require('./hello.js') 
        }
        `
        fs.mkdirSync(`./${project_name}`);
        fs.mkdirSync(`./${project_name}/filters`);
        fs.writeFileSync(`./${project_name}/filters/hello.js`, helloWorldTemplate)
        fs.writeFileSync(`./${project_name}/filters/index.js`, indexTemplate)
        fs.writeFileSync(`./${project_name}/config-filters.json`, JSON.stringify({ steps: {} }))
    } else {
        console.error('Project already exist...');
    }
}

module.exports = new_project
