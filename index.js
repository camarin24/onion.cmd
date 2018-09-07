#!/usr/bin/env node
const { create } = require('./logic');
const program = require('commander');
const { prompt } = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'schema',
    message: 'Enter the schema name'
  },
  {
    type: 'input',
    name: 'entity',
    message: 'Enter the entity name'
  },
  {
    type: 'input',
    name: 'table',
    message: 'Enter the table name'
  }
];

program
  .version('0.0.1')
  .description('File creation for Onion architecture system');

program
  .command('create')
  .alias('c')
  .description('Create necessaries files for entity')
  .action(() => {
    prompt(questions).then(answers => {
      create(answers);
    });
  });

program.parse(process.argv);
