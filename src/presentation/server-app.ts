import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface runOptions{
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}


export class serverApp{
    static run(options: runOptions){
        const table = new CreateTable()
        .execute({base: options.base, limit: options.limit});
        const wasCreated = new SaveFile()
        .execute({fileContent: table, fileDestination: options.destination, fileName: options.name});
        if (options.showTable) console.log(table);
        wasCreated ? console.log('Tabla creada') : console.error('Error al guardar la tabla');
    }
}