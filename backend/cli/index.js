import { Command } from 'commander';
import inquirer from 'inquirer';

const program = new Command();
program
  .command('box')
  .action(async () => {
    const { box_name} = await inquirer.prompt([
      { name: 'box_name', type: 'input', message: 'What is your box name?' }
    ]);

    console.log('Your box is : ' + box_name);
  });

program.parse();
