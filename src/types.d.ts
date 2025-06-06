export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoId = Todo['id'];
export type TodoTitle = Pick<Todo, 'title'>;
export type TodoCompleted = Pick<Todo, 'completed'>;

export type ListOfTodos = Todo[];
