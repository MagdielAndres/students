
class StudentService {
    static allStudents(students){
        return students;
    }

    static studentsHaveCertification(students){        
        const certificationTrue = students.filter( student => student.haveCertification == true);
        const studentsEmails = certificationTrue.map( (email) => email.email);
        return studentsEmails;
    }

    static studentsCreditsMayor500(students){
        const studentsCredit = students.filter( student => student.credits > 500);
        const nuevostudentsCredit= studentsCredit.map(credit => {
            return {"name": credit.name, "credit": credit.credits};
        });
        return nuevostudentsCredit;
    }
}
module.exports = StudentService;