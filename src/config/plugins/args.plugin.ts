import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option(
        'b',
        {
            alias: 'base',
            describe: 'Multiplication table base',
            type: 'number',
            demandOption: true
        }
    )
    .option(
        'l',
        {
            alias: 'limit',
            describe: 'Multiplication table limit',
            type: 'number',
            default: 10
        }
    )
    .option('s', {
        alias: 'show',
        describe: 'Show the multiplication table',
        type: 'boolean',
        default: false
    })
    .option('n', {
        alias: 'name',
        describe: 'file name',
        type: 'string',
        default: 'table'
    })
    .option('d',{
        alias: 'destination',
        describe: 'File destination',
        type: 'string',
        default: './outputs'
    })
    .check((argv)=>{
        if (argv.b < 1) throw 'The base must be greater than 0';
        return true;
    })
    .parseSync()