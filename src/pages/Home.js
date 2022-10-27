import { TodoList } from '../components/TodoList';

export function Home() {
  return (
    <>
      <h1 data-testid="page-title">Home</h1>
      <p>This is the list.</p>
      <h1> TEST PR</h1>
      <h3> TEST PR2</h3>
      <TodoList />
    </>
  );
}
