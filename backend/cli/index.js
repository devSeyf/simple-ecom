#!/usr/bin/env node

const { Command } = require('commander');

const program = new Command();


program
  .name('my-cli')
  .description('A CLI application built with Commander.js')
  .version('1.0.0');

program.parse();