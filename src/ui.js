import { getAllProjects, createNewProject, addTodoToProject } from './logic.js'

function showProjects() {
    //get all projects
    const projects = getAllProjects();

    const projectList = document.querySelector(".project-list");

    //show project details
    for(const project of projects) {
        const projectName = document.createElement("p");
        const projectTodoCount = document.createElement("p");
        projectName.textContent = project.name;
        projectTodoCount.textContent = project.todos.length;
        projectList.append(projectName, projectTodoCount);
    }
}

export { showProjects }
