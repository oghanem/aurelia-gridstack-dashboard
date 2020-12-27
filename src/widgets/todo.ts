import { GridStackElement } from "gridstack";

export class Todo {
  heading: string;
  todos: any[];
  todoDescription: string;
  removeWidget: any;
  domEl: GridStackElement;
  fullscreen: string; 

  activate(model) {
    this.heading = 'Todos';
    this.fullscreen = "Maximize";

    this.todos = [];
    this.todoDescription = '';

    this.todos.push({
      description: 'Nulla ac diam fringilla, scelerisque eros et, faucibus erat.',
      done: true
    },{
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna elit, convallis euismod metus a, rutrum pulvinar lectus. Etiam luctus commodo dolor, nec cursus sem commodo ut. ',
      done: false
    });
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push({
        description: this.todoDescription,
        done: false
      });

      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  maximize(el: HTMLElement){
    if(el.classList.contains('maximize')){
      el.classList.remove('maximize');
      this.fullscreen = "Maximize";
    } else {
      el.classList.add('maximize');
      this.fullscreen = "Minimize"
    }
  }
}
