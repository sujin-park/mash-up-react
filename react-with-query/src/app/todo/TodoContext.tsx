import React, { useReducer, createContext, useContext, useRef, Dispatch } from 'react';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];
type Action = { type: 'CREATE'; todo: TodosState } | { type: 'TOGGLE'; id: number } | { type: 'REMOVE'; id: number };

const initialTodos: TodosState = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
];

const TodoStateContext = createContext<TodosState | null>(null);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);
const TodoNextIdContext = createContext<number | null>(null);

type TodoDispatch = Dispatch<Action>;
type TodoProviderProps = {
  children: React.ReactNode;
};

function reducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo: Todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case 'REMOVE':
      return state.filter((todo: Todo) => todo.id !== action.id);
    default:
      throw 'Unhandled action';
  }
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}
