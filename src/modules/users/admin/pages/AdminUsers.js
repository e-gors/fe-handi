/** @format */

import React, { useState } from "react";

function Users() {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    {
      id: 1,
      firstName: "John",
      surname: "Doe",
      address: "123 Main St",
      contact: "555-1234",
      email: "john@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      surname: "Smith",
      address: "456 Elm St",
      contact: "555-5678",
      email: "jane@example.com",
    },
    {
      id: 3,
      firstName: "Bob",
      surname: "Johnson",
      address: "789 Oak St",
      contact: "555-9012",
      email: "bob@example.com",
    },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const { firstName, surname, address, contact, email } = user;
    const searchTermLower = searchTerm.toLowerCase();

    return (
      firstName.toLowerCase().includes(searchTermLower) ||
      surname.toLowerCase().includes(searchTermLower) ||
      address.toLowerCase().includes(searchTermLower) ||
      contact.toLowerCase().includes(searchTermLower) ||
      email.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <div>
      <h1>Users</h1>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search"
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "100%",
          }}
        />
      </div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Surname</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.surname}</td>
              <td>{user.address}</td>
              <td>{user.contact}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
