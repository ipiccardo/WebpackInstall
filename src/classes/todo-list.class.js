

export class TodoList {

    constructor () {

        this.todos = []

    }

    nuevoTodo(todo) {
        this.todos.push(todo)
        this.guardarLocalStorage()
    }

    eliminarTodo( id ) {

     this.todos = this.todos.filter(todo => todo.id != id)

    }

    marcarCompletado ( id ) {

        for( const todo of this.todos ) {
            if(todo.id == id ) {
                
                todo.completado = !todo.completado
                console.log(id, todo.id)
                break;
            }

            this.guardarLocalStorage();
        }


    }


    eliminarCompletados () {

        this.todos = this.todos.filter( todo => !todo.completado)
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo',JSON.stringify(this.todos))
        

    }

    cargarLocalStorage(){


  this.todos = (

      localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []
  )


        // if( localStorage.getItem('todo')) {

        //     this.todos = JSON.parse(localStorage.getItem('todo'))

        //     console.log('cargarLocal: ', this.todos);
        //     console.log( typeof this.todos)

        // } else {
        //     this.todos = []
        // }


    }

}