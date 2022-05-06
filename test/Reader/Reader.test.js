const Reader =  require("../../lib/Reader/Reader");

describe("Leer un archivo Estudiantes.json", () => { 
    test("1) Obtener la cantidad de estudiantes", () => { 
        const path = "Estudiantes.json";
        const students = Reader.readJsonFile(path);

        expect(students.length).toBe(51);
    });
});