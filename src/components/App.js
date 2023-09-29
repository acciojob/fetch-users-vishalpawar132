
import React,{useState} from "react";
import './../styles/App.css';







const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserList = () => {
      setLoading(true);
  
      fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    };



  return (
    <div>
        <button className="btn" onClick={fetchUserList}>Get User Lis</button>

        {loading ? (
      <p>Loading...</p>
    ) : (
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt="Avatar" width="50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}


    </div>
  )
}

export default App
