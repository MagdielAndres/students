const StudentController = require("./../../lib/controllers/StudentController");

describe("Test StudentController", () => { 
    test("1) Obtner a todos los estudiantes", () => { 
        const infoAllStudents = StudentController.getAllStudents();

        expect(infoAllStudents.length).toBe(51);
    });

    test("2) Obtener los emails de todos los estudiantes que tengan certificación haveCertification", () => { 
        const studentsEmails = StudentController.getStudentsEmail();

        expect(studentsEmails.length).toBe(29);
    });

    test("3) Método para todos los estudiantes que tengan credits mayor a 500", () => { 
        const studentsCreditsMayor500 = StudentController.getStudentsCreditsMayor500();

        expect(studentsCreditsMayor500.length).toBe(27);
    });
});