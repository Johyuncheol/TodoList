import TodoInsert from './components/TodoInsert';
import TodoTemplate from './components/TodoTemplate';
import { useState,useRef, useCallback } from 'react';
import TodoList from './components/TodoList';
import TodoTemplateblock from './components/Templateblock';

function createTodos(){
  const array = [];
  for (let i = 1; i <=1; i++ )
  {
    array.push({
      id : 1, 
      text: `할 일 ${i}`,
      checked: false, 
    });
  }
  
  return array;
}

function App() {

  const [todos ,setTodos] = useState(createTodos);
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo ={
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo)); // todos와 todo의 결합 
      nextId.current +=1;
    },[],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id )); // 선택된 id만 제외
    },[],
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos => todos.map(todo =>
        todo.id===id ? {...todo, checked : !todo.checked } : todo, // ?
        ),
      );
    },
    []
  )

  return (
    <TodoTemplateblock>
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}  />
    </TodoTemplate>
    </TodoTemplateblock>
  
  );
}



export default App;
