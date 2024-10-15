const enrollForm = document.getElementById('enrollForm');
const studentNameInput = document.getElementById('studentName');
const courseSelect = document.getElementById('courseSelect');
const courseButtonsDiv = document.getElementById('courseButtons');
const studentListDiv = document.getElementById('studentList');

const students = {};

// Función para agregar un estudiante
function enrollStudent(event) {
    event.preventDefault();
    const studentName = studentNameInput.value.trim();
    const course = courseSelect.value;

    if (studentName) {
        if (!students[course]) {
            students[course] = [];
        }
        students[course].push(studentName);
        studentNameInput.value = '';
        updateCourseButtons();
    }
}

// Función para actualizar los botones de los cursos
function updateCourseButtons() {
    courseButtonsDiv.innerHTML = '';
    Object.keys(students).forEach(course => {
        const button = document.createElement('button');
        button.textContent = course;
        button.classList.add('btn', 'btn-secondary', 'course-button');
        button.addEventListener('click', () => showStudents(course));
        courseButtonsDiv.appendChild(button);
    });
}

// Función para mostrar los estudiantes de un curso
function showStudents(course) {
    const courseStudents = students[course] || [];
    studentListDiv.innerHTML = `<h4>Estudiantes en ${course}</h4>`;
    const ul = document.createElement('ul');
    courseStudents.forEach(student => {
        const li = document.createElement('li');
        li.textContent = student;
        ul.appendChild(li);
    });
    studentListDiv.appendChild(ul);
}

enrollForm.addEventListener('submit', enrollStudent);
