class Task {
    constructorTask(id, status, title){
        this.title = title
        this.status = status
        this.id=id
    }
}
class TaskList {
    constructorTL(){
        this.tasks = []
    }
    addPost(tasks)
}

function randomTask(){
    let id = Math.floor(Math.random() * 9999)
}
function taskList(){
    let title = document.getElementById("addTask").value
    const newTask = new Task(randomTask(), false, title);
    taskList..addPost(newTask)
}
