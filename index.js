#! /usr/bin/env node
const { program } = require('commander');
const new_project = require('./commands/new_project');
const add_filter = require('./commands/add_filter');
const del_filter = require('./commands/del_filter');
const add_step = require('./commands/add_step');
const del_step = require('./commands/del_step');

program
    .command('new <project_name>')
    .description("Créé l'arborescence projet avec un fichier de configuration vierge, et éventuellement un template de filter de type hello world")
    .action(new_project);

program
    .command('add_filter <filter>')
    .description('Create a new filter in an existing project')
    .action(add_filter);

program
    .command('del_filter <filter>')
    .description('Remove an existing filter')
    .action(del_filter);

program
    .command('add_step <id_filter> <filter> [id_next_filter]')
    .description('Add a an extra step to the config file. This command take the following parameters : \n - unique step id. \n - filter name \n - next step id (optional)')
    .action(add_step)


program
    .command('del_step <id_filter>')
    .description('Remove a step from the config file. This command take the following parameters : \n - unique step id.')
    .action(del_step);

// program
//     .command('mark-done')
//     .description('Mark commands done')
//     .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
//     .action(markDone)

program.parse();