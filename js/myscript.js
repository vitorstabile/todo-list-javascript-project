// to make a search in the div of a element you wnat to search
// use document.queruSelector("id of the main element", "The element you want")

var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector('#app input');

var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todo')) || [];

function renderTodos(){

    listElement.innerHTML = ''; //clean the list

    for (todo of todos){
       //alert(todo); // make a test

       var todoElement = document.createElement('li'); // To create a element in HTML
       var todoText = document.createTextNode(todo); // To create a text 

       var linkElement = document.createElement('a'); // To create a element in HTML
       linkElement.setAttribute('href', '#'); // to set a attribute in HTML element

       var position = todos.indexOf(todo); // to know the position of a element in todoList

       linkElement.setAttribute('onClick', 'deleteTodo(' + position +')'); // in onClick action
                                                                           // he will execute the function
                                                                           // deleteTodo()

       var linkText = document.createTextNode('Delete'); // To create a text
       linkElement.appendChild(linkText); // insert element in HTML <a>

       todoElement.appendChild(todoText); // insert element in HTML <li>
       todoElement.appendChild(linkElement); // insert element in HTML <href>
       listElement.appendChild(todoElement); // insert element in HTML <ul>


    }
}

renderTodos();

function addTodo(){

    if(inputElement.value == ''){
        alert("Enter a Task");
        return false;
    }

    var todoText = inputElement.value; // take the value of new todo in text

    todos.push(todoText); // insert the new todo in the list

    inputElement.value = ''; //clear the old value

    renderTodos();

    dataSave();

}

buttonElement.onclick = addTodo; // when he make a onclick in the button, 
                                 // he will execute the function addTodo

function deleteTodo(position){

    // splice remove something in the list with the position for array

    todos.splice(position, 1);
    renderTodos();
    dataSave();
}

function dataSave(){
    localStorage.setItem('list_todo', JSON.stringify(todos)); // convert list in JSON and save the list
}