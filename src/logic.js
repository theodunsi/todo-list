import { Project } from "./project.js"
import { Todo } from "./todo.js"

let projects = []
const defaultProject = new Project("default");
projects.push(defaultProject);

function getAllProjects() {
    return projects;
}

function createNewProject(name) {
    const newProject = new Project(name);
    projects.push(newProject)
}

function addTodoToProject(projectName, title, description, dueDate, priority) {
    //find project by name
    const project = projects.find(project => project.name === projectName);

    //create a new todo
    const newTodo = new Todo(title, description, dueDate, priority);

    //add todo to that project
    project.addTodo(newTodo);
}

export { getAllProjects, createNewProject, addTodoToProject, }