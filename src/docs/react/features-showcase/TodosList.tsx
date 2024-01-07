import React from 'react';

export const TodosList = (): JSX.Element => {
  const todos = [
    {
      userId: 1,
      title: 'delectus aut autem',
      completed: true,
    },
    {
      userId: 1,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
  ];

  return (
    <ul>
      {todos.map(({ userId, title, completed }) => {
        const id = crypto.randomUUID();

        return (
          <li key={id}>
            <div>Todo for user {userId}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed ? 'Yes' : 'No'}</div>
            <div>UUID Key: {id}</div>
          </li>
        );
      })}
    </ul>
  );
};
