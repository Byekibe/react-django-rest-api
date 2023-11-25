import { useState, useEffect } from "react";
import styles from "./todo.module.css";

export default function Todo() {
  const todosUrl = "/api/todos";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(todosUrl);
      const data = await res.json();

      setTodos(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Todos Here</h2>
      <div className={styles.todo}>{JSON.stringify(todos)}</div>
    </>
  );
}
