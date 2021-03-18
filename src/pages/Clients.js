import React, { useState, useEffect } from "react";
import Loader from "@material-ui/core/CircularProgress";

const Clients = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    setUsers(json);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <h1>Взаимодейтвие с сервером</h1>
      <button onClick={fetchData}>Загрузить данные</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Clients;
