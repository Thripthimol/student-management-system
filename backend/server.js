const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let students = [];

// Add student
app.post("/students", (req, res) => {
  students.push(req.body);
  res.json({ message: "Student added", students });
});

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Delete student
app.delete("/students/:roll", (req, res) => {
  students = students.filter(s => s.roll !== req.params.roll);
  res.json({ message: "Student deleted" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
