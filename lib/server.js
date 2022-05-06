const StudentController = require("./controllers/StudentController");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Students api Welcom!"});
});

app.listen(port, () => {
    console.log(`Students API in localhost:${port}`);
});

app.get("/v1/students", (request, response) => {
    const allStudents = StudentController.getAllStudents();
    response.json(allStudents);
})

app.get("/v1/students/emails", (request, response) => {
    
    const StudentsEmail = StudentController.getStudentsEmail();
    response.json(StudentsEmail);
})

app.get("/v1/students/credits", (request, response) => {
    const StudentsCredits500 = StudentController.getStudentsCreditsMayor500();
    response.json(StudentsCredits500);
});