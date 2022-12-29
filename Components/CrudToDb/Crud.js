import React, { useState, useEffect } from "react";

function Crud() {
  const [user, setUser] = useState([]);
  const [_id, setId] = useState("");
  const [name, setName] = useState("");
  const [eye, setEye] = useState("");

  const fetchData = () => {
    return fetch("http://localhost:3001/api/uchihas")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function clearFields() {
    setId('');
    setName('');
    setEye('');
  }

  function addUchiha() {
    const postData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // _id: _id,
        name: name,
        eye: eye,
      }),
    };

    fetch("http://localhost:3001/api/uchihas", postData)
      .then((response) => response.json())
      .then((data) => {
        fetchData();
        clearFields();
      });
  }

  return(
    <React.Fragment>
        <h1>Uchiha List</h1>
        <table className="text-info">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Eye</th>
                    <th colSpan={2} style={{textAlign: 'center'}}>Actions</th>
                </tr>
                <tr>
                    <th>
                        <input type="text" 
                               value={name} 
                               onChange={(event) => setName(event.target.value)}
                        />
                    </th>
                    <th>
                        <input type="text" 
                               value={eye} 
                               onChange={(event) => setEye(event.target.value )}
                        />
                    </th>
                    <th>
                        <button className="btn btn-primary"
                                onClick={() => addUchiha()}
                        >Add</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map(uchiha => (
                        <tr key={uchiha._id}>
                            <td className="text-info">{uchiha.name}</td>
                            <td className="text-info">{uchiha.eye}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </React.Fragment>
  );

}

export default Crud;
