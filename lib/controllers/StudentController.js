const Reader = require("./../Reader/Reader");
const StudentService = require("./../services/StudentService");

class StudentController {
    static getAllStudents(){
        const students = Reader.readJsonFile("Estudiantes.json");
        return StudentService.allStudents(students);
    }

    static getStudentsEmail(haveCertification){
        const students = Reader.readJsonFile("Estudiantes.json");
        return StudentService.studentsHaveCertification(students,haveCertification)
    }
}
module.exports = StudentController;