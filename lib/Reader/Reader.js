const fs = require("fs");

class Reader {
    static readJsonFile(path){
        const rawdta = fs.readFileSync(path);
        return JSON.parse(rawdta);
    }
}
module.exports = Reader;