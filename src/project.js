export class Project {
    constructor (name) {
        this.name = name;
        this.todos = [];
    }

    //Add a todo to a project
    addTodo(todo) {
        this.todos.push(todo);
    }

    //Remove a todo from a project
    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
}