import { getAllProjects, createNewProject, addTodoToProject } from './logic.js'

const projectList = document.querySelector(".project-list");

function showProjects() {
    //get all projects
    const projects = getAllProjects();

    //show project details
    for(const project of projects) {
        const projectName = document.createElement("p");
        const projectTodoCount = document.createElement("p");
        projectName.textContent = project.name;
        projectTodoCount.textContent = project.todos.length;
        projectList.append(projectName, projectTodoCount);
    }
}


const dialog = document.querySelector(".dialog");
const createProject = document.querySelector(".createProject");
const cancel = document.querySelector(".cancel");
const form = document.querySelector(".form");

//show modal
createProject.addEventListener("click", () => {
    form.reset();
    dialog.showModal();
});

//submit form + create project
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.querySelector(".input");
    createNewProject(input.value);

    dialog.close();
    projectList.innerHTML = "";
    showProjects();
});

//cancel modal
cancel.addEventListener("click", () => {
    dialog.close();
});


export { showProjects }
