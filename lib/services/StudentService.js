
class StudentService {
    static allStudents(students){
        return students;
    }

    static studentsHaveCertification(students, haveCertification){        
        const certificationTrue = students.filter( student => student.haveCertification == haveCertification);
        const studentsEmails = certificationTrue.map( (email) => email.email);
        return studentsEmails;
    }

    static studentsCreditsMayor500(students, credit){
        const studentsCredit = students.filter( student => student.credits > credit);
        const nuevostudentsCredit= studentsCredit.map(credit => `name: ${credit.name}, credit: ${credit.credits}`);
        return nuevostudentsCredit;
    }
}
module.exports = StudentService;