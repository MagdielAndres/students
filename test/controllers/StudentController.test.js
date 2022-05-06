const StudentController = require("./../../lib/controllers/StudentController");

describe('Test StudentController', () => { 
    test('1) Obtner a todos los estudiantes', () => { 
        const infoAllStudents = StudentController.getAllStudents();

        expect(infoAllStudents.length).toBe(51);
    });
});