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
    addPost(tasks){
        this.tasks.push(Task)
    }
    deletePost(id){
        this
    }
}

function randomTask(){
    let id = Math.floor(Math.random() * 9999)
}
const taskList = new TaskList()
function taskList(){
    let title = document.getElementById("addTask").value
    const newTask = new Task(randomTask(), false, title);
    taskList.addPost(newTask)
}
function cleanField(){
    document.getElementById("addTask").value = ""
}
function showContent(){
document.getElementById("taskroom").classList.remove("hidden")
let showTask = ""
taskList.tasks.forEach((newTask, index) => {
    showTask += `
        <div class="postTask">
            <h2>${TaskList.title}</h2>
            <div id="buttons">
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    `
});
}
