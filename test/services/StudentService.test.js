const Reader = require("./../../lib/Reader/Reader");
const StudentService = require("./../../lib/services/StudentService");

describe('Test, StudentService', () => { 
    test('1) Obtener los esudiantes', () => { 
        const students = Reader.readJsonFile("Estudiantes.json"); 
        const studentsAll = StudentService.allStudents(students);

        expect(studentsAll.length).toBe(51);
    });

    test('2) Obtener todos los email que tengan certificación haveCertification', () => { 
        const students = Reader.readJsonFile("Estudiantes.json");  
        const studentsEmails = StudentService.studentsHaveCertification(students, true);

        expect(studentsEmails.length).toEqual(29);
    });
});