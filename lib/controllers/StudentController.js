const Reader = require("./../Reader/Reader");
const StudentService = require("./../services/StudentService");

class StudentController {
    static getAllStudents(){
        const students = Reader.readJsonFile("Estudiantes.json");
        return StudentService.allStudents(students);
    }

    static getStudentsEmail(){
        const students = Reader.readJsonFile("Estudiantes.json");
        return StudentService.studentsHaveCertification(students);
    }

    static getStudentsCreditsMayor500(){
        const students = Reader.readJsonFile("Estudiantes.json");
        return StudentService.studentsCreditsMayor500(students);
    }
}
module.exports = StudentController;