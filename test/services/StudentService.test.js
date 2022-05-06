const Reader = require("./../../lib/Reader/Reader");
const StudentService = require("./../../lib/services/StudentService");

describe("Test, StudentService", () => { 
    test("1) Obtener los esudiantes", () => { 
        const students = Reader.readJsonFile("Estudiantes.json"); 
        const studentsAll = StudentService.allStudents(students);

        expect(studentsAll.length).toBe(51);
    });

    test("2) Obtener todos los email que tengan certificación haveCertification", () => { 
        const students = Reader.readJsonFile("Estudiantes.json");  
        const studentsEmails = StudentService.studentsHaveCertification(students);

        expect(studentsEmails.length).toEqual(29);
    });

    test("3) Obtener todos los estudiantes que tengan credits mayor a 500", () => { 
        const student = Reader.readJsonFile("Estudiantes.json");
        const studentsCredit = StudentService.studentsCreditsMayor500(student);

        expect(studentsCredit.length).toBe(27);
    });
});