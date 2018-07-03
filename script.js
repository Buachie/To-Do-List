var toDoList = {
    todos: [],
      addTodo: function(todoText){
          this.todos.push({    //THIS IS AN OBJECT
               todoText: todoText, //The first todo is the prpoerty of the object. the second is the parameter of the function
               completed: false
          });
          
      },
      changeTodo: function(position, todoText){
         // this.todos[position]= newValue;
          this.todos[position].todoText = todoText;
          
      },
      deleteTodo: function(position){
          this.todos.splice(position, 1);
          
      },
      toggleCompleted: function(position){
          var todo = this.todos[position];
          todo.completed = !todo.completed;
          

      },

      toggleAll: function(){
          var totalTodos = this.todos.length;
          var completedTodos = 0;

          //Get number of completed todos
          for (var i = 0; i < totalTodos; i++){
              if (this.todos[i].completed === true){
                  completedTodos++;
              }
          }
          if (completedTodos === totalTodos){
              //make everything false
              for (var i = 0; i < totalTodos; i++){
                  this.todos[i].completed = false;
              }
          }
          else{
              //Make everything true
              for (var i = 0; i < totalTodos; i++){
                  this.todos[i].completed = true;
              }
          }
          
      }
  };
/* old version
  // We want to get access to the display todos button
  var displayTodosButton = document.getElementById('displayTodosButton');
  
  
  // We want to run displayTodos method when someone clicks the display
  displayTodosButton.addEventListener('click', function(){
    toDoList.displayTodos();
    
  });

      //Toggle All Button

      var toggleAllButton = document.getElementById('toggleAllButton');
      
  
      //runs the toggle all method when someone clicks the button
      toggleAllButton.addEventListener('click', function(){
          toDoList.toggleAll();
      });
  */  
   
 // Refractored version
var handlers = {
    toggleAll: function(){
        toDoList.toggleAll();
        view.displayTodos();
    },
    addTodo: function(){
        
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        toDoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value =('');
        view.displayTodos();
    },
    changeTodo: function(){
        var changeTodoPosition = document.getElementById('changeTodoPosition');
        var changeTodoText = document.getElementById('changeTodoText');
        toDoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
        changeTodoText.value='';
        view.displayTodos();
    },
    deleteTodo: function(position){
        toDoList.deleteTodo(position);
        view.displayTodos();
    }
};

var view = {
    displayTodos: function(){
        var todosUL = document.querySelector('ul');
        todosUL.innerHTML = '';
        for (var i = 0; i < toDoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = toDoList.todos[i];

            var todoTextWithCompletion = '';
           
            if(todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            }
            else{
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }
            
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUL.appendChild(todoLi);
        }
    },
    createDeleteButton: function(){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    }
};
    var todosUL = document.querySelector('ul');

    todosUL.addEventListener('click', function(event){
        var elementClicked = event.target;
    

    if (elementClicked.className === 'deleteButton'){
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
    }
}

);