const StudentController = require("./../../lib/controllers/StudentController");

describe('Test StudentController', () => { 
    test('1) Obtner a todos los estudiantes', () => { 
        const infoAllStudents = StudentController.getAllStudents();

        expect(infoAllStudents.length).toBe(51);
    });

    test('2) Obtener los emails de todos los estudiantes que tengan certificación haveCertification', () => { 
        const haveCertification = true;
        const studentsEmails = StudentController.getStudentsEmail(haveCertification);

        expect(studentsEmails.length).toBe(29);
    });
});