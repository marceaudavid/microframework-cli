const chalk = require('chalk')
fs = require('fs')

const add_step = (id_filter, filter, id_next_filter) => {
    if (fs.existsSync(`./filters/${filter}.js`)) {
        let data = fs.readFileSync(`./config-filters.json`);
        let json = JSON.parse(data);
        let element;
        if (id_next_filter) {
            element = { [id_filter]: { "filter": filter, "params": [], "next": id_next_filter } }
            console.log(id_next_filter);
        } else {
            element = { [id_filter]: { "filter": filter, "params": [] } }
        }
        json.steps = { ...json.steps, ...element };
        fs.writeFileSync('./config-filters.json', JSON.stringify(json), 'utf-8');
    } else {
        console.error("Filter doesn't exist ...")
    }
}

module.exports = add_step
