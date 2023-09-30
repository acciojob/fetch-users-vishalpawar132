
import React,{useState} from "react";
import './../styles/App.css';


const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="list">
        <div className="btn-BW"> 
        <h2>Blue Whales</h2>
        <button className="btn" onClick={fetchUserList}>Get User List</button>
        </div>
        {loading ? (
      <p>No data found to display.</p>
    ) : (
      <table >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
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
