
class StudentService {
    static allStudents(students){
        return students;
    }

    static studentsHaveCertification(students, haveCertification){        
        const certificationTrue = students.filter( student => student.haveCertification == haveCertification);
        const studentsEmails = certificationTrue.map( (email) => email.email);
        return studentsEmails;
    }
}
module.exports = StudentService;