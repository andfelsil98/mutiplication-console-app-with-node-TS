import * as fs from 'fs';
import { yarg } from './config/plugins/args.plugin';
// Variables
const { b: base, l: limit, s: show } = yarg;
const title = `Tabla del ${base}`;
let outputMessage = '';




for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}
const log = `
===========================
        ${title}
===========================
${outputMessage}
    `;
show && console.log(log);
console.log('Tabla creada');
if (!fs.existsSync('outputs')) fs.mkdirSync('outputs');
fs.writeFileSync(`outputs/tabla-${base}.txt`, log);
