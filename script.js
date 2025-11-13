const Todos = [];
const Todoinput=document.getElementById("Todo-input");
const Todoswrapper=document.getElementById("Todos-wrapper");


function addTodo(){
    const TodoValue= Todoinput.value;
 Todos.push(TodoValue);    
 updateDom();
}  

    

function deleteTodo(index){
    Todos.splice(index,1);
    updateDom();
}


function updateDom(){
 let htmlToAdd = "";
    for(let i=0; i<Todos.length; i++){
    htmlToAdd = htmlToAdd + `<div class="Todo">
        <p> ${Todos[i]} </p>
        <button class="delete-btn"onclick="deleteTodo(${i})">delete</button>
      </div>`;
    }
Todoswrapper.innerHTML = htmlToAdd;

}



