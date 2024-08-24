/** @import {State, Todo} from "./todo.ts" */

import { createStore } from "./not-redux.js";
import { patch, jsxH } from "./superfine.js";
import { build } from "./htm.js";

export const html = build.bind(jsxH);

/** @type {State} */
const initialState = { todos: [], input: "", id_counter: 0 };

const { dispatch } = createStore(initialState, (state) => {
  const root = document.querySelector("#root");
  patch(root, mainView(state));
});

/** @param {State} state */
const mainView = (state) => {
  return html`<main id="root" class="container">
    <h1>My TODO List</h1>
    <form id="todoForm" onsubmit=${addTodo}>
      <input
        type="text"
        id="newTodo"
        placeholder="Enter a new TODO"
        value=${state.input}
        required
        onchange=${updateInput}
      />
      <button type="submit">Add TODO</button>
    </form>
    <ul class="todo-list">
      ${state.todos.map(
        (todo) => html`
          <li class="${todo.completed ? 'todo-completed' : ''}">
            <input
              type="checkbox"
              id=${"todo-" + todo.id}
              checked=${todo.completed}
              onchange=${toggleTodo(todo.id)}
            />
            <label class="todo-label" for=${"todo-" + todo.id}>
              ${todo.text}
            </label>
            <button class="remove-todo" onclick=${removeTodo(todo.id)}>🗑️</button>
          </li>
        `
      )}
    </ul>
  </main>`;
};


/** @param {Event} event */
const addTodo = (event) => {
  event.preventDefault();
  dispatch((state) => {
    state.todos.push({
      id: state.id_counter,
      text: state.input,
      completed: false,
    });
    state.id_counter++;
    state.input = "";
  });
};

/** @type {(id: number) => () => void} */
const removeTodo = (id) => () => {
  dispatch((state) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  });
};

/** @type {(id: number) => () => void} */
const toggleTodo = (id) => () => {
  dispatch((state) => {
    const todo = state.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  });
};

/** @param {Event} event */
const updateInput = (event) => {
  dispatch((state) => {
    if (event.target instanceof HTMLInputElement) {
      state.input = event.target.value;
    }
  });
};
