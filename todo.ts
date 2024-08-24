
export type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

export type State = {
  todos: Todo[];
  input: string;
  id_counter: number;
}
