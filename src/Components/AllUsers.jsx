import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [rawData, setRawData] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/GreenScore/allUsers");

      if (!response.ok) {
        setError("❌ Failed to load users (Status: " + response.status + ")");
        setLoading(false);
        return;
      }

      const data = await response.json();
      setRawData(data);
      setUsers(data);
      setLoading(false);

    } catch (err) {
      setError("❌ Server unreachable (Backend not running)");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Header />

      <div style={styles.container}>
        
        <h1 style={styles.title}>All Users Score List</h1>

        {loading && <p style={styles.message}>Loading...</p>}

        {error && <p style={styles.error}>{error}</p>}

        {rawData && (
          <pre style={styles.jsonBox}>
            {JSON.stringify(rawData, null, 2)}
          </pre>
        )}

        {!loading && !error && users.length === 0 && (
          <p style={styles.message}>No users found.</p>
        )}

        {!loading && !error && users.length > 0 && (
          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.header}>Name</th>
                  <th style={styles.header}>Score</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td style={styles.cell}>{user.name}</td>
                    <td style={styles.cell}>{user.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}

const styles = {
  container: {
    width: "95%",
    maxWidth: "900px",
    margin: "40px auto",
    padding: "0 10px",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  tableWrapper: {
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "300px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },

  header: {
    padding: "12px",
    backgroundColor: "#2a9d8f",
    color: "white",
    fontSize: "18px",
  },

  cell: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    textAlign: "center",
  },

  message: {
    textAlign: "center",
    fontSize: "18px",
  },

  error: {
    textAlign: "center",
    color: "red",
    fontSize: "18px",
  },

  jsonBox: {
    background: "#f4f4f4",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    fontSize: "14px",
    overflowX: "auto",
  },
};
