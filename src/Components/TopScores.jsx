import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function TopScore() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const rankBadges = ["🥇 Gold", "🥈 Silver", "🥉 Bronze", "⭐ Star", "✨ Spark"];

  const fetchTopUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/GreenScore/topScore");

      if (!response.ok) {
        setError("Failed to load top users");
        setLoading(false);
        return;
      }

      const data = await response.json();

      // take only top 5
      setUsers(data.slice(0, 5));
      setLoading(false);

    } catch (err) {
      setError("Server unreachable");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopUsers();
  }, []);

  return (
    <div>
        <Header />
        <div style={styles.container}>
      <h1 style={styles.title}>Top 5 Users</h1>

      {loading && <p style={styles.message}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {!loading && !error && (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.header}>Rank</th>
                <th style={styles.header}>Name</th>
                <th style={styles.header}>Score</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td style={styles.cell}>{rankBadges[index]}</td>
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
    fontSize: "16px",
  },
  message: {
    textAlign: "center",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
};
