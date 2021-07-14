import React, { Dispatch, useReducer, createContext, useContext, useRef } from 'react';

type TodoItem = {
  id: number;
  text: string;
  done: boolean;
};

type Action = { type: 'CREATE'; todo: TodoItem } | { type: 'TOGGLE'; id: number } | { type: 'REMOVE'; id: number };

const initialTodos = [
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
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

type TodoDispatch = Dispatch<Action>;
const TodoStateContext = createContext<TodoItem[]>([]);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);
const TodoNextIdContext = createContext(0);

type TodoProviderProps = {
  children: React.ReactNode;
};

export function TodoProvider({ children }: TodoProviderProps) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}
