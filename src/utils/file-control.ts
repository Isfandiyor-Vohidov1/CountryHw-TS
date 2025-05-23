import { join } from "path";
import { readFileSync, writeFileSync } from "fs";

const filePath = join('src/country/data/country.json');

const readData = () => {
    return JSON.parse(readFileSync(filePath, 'utf-8'));
}

const writeData = (data: object) => {
    writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export {
    readData,
    writeData
}
