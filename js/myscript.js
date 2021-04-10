// to make a search in the div of a element you wnat to search
// use document.queruSelector("id of the main element", "The element you want")

var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector('#app input');

var buttonElement = document.querySelector('#app button');

var todos = ['Go to Market','Learn JS', 'Pay the Bills'];

function renderTodos(){

    for (todo of todos){
       //alert(todo); // make a test

       var todoElement = document.createElement('li'); // To create a element in HTML
       var todoText = document.createTextNode(todo); // To create a text 

       todoElement.appendChild(todoText); // insert element in HTML

       listElement.appendChild(todoElement);


    }
}

renderTodos();