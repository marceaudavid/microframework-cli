
const del_step = (id_filter) => {
    let data = fs.readFileSync('config-filters.json', 'utf-8');
    if (data.steps.hasOwnProperty(id_filter)) {
        delete data.steps[id_filter];
        if (data.steps.hasOwnProperty(id_filter - 1)) {
            data.steps[id_filter - 1].next = id_filter + 1;
        }
    }
    fs.writeFileSync('config-filters.json', JSON.stringify(data), 'utf-8');
}

module.exports = del_step
