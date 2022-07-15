import {Todo, TodoList } from './classes/index'
import { crearTodoHtml } from './js/componentes';

import './styles.css'


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml( todo ))


const newTodo = new Todo('Aprender JavaScript');
todoList.nuevoTodo(newTodo);

console.log('todos', todoList.todos)

const tarea = new Todo('Aprender JavaScript!!!');

tarea.completado = true;


todoList.nuevoTodo( tarea );


console.log( todoList );

crearTodoHtml( tarea );

localStorage.setItem('mi-key', 'ABC123');



