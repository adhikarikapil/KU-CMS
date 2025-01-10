import React, { useState, useEffect } from "react";

function StudentGradesPage() {
  const [grades, setGrades] = useState([]);

  // Simulate fetching grades from the backend
  useEffect(() => {
    const fetchedGrades = Array.from({ length: 60}, (_, index) => ({
      rollNo: index + 1,
      name: `Student ${index + 1}`,
      firstInternal: Math.floor(Math.random() * 25),
      secondInternal: Math.floor(Math.random() * 25),
      assignments: Math.floor(Math.random() * 10),
      attendance: Math.floor(Math.random() * 5),
      total: 0,
    })).map((student) => ({
      ...student,
      total:
        student.firstInternal +
        student.secondInternal +
        student.assignments +
        student.attendance,
    }));
    setGrades(fetchedGrades);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Grades</h1>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>Roll No</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>First Internal</th>
            <th style={styles.th}>Second Internal</th>
            <th style={styles.th}>Assignments</th>
            <th style={styles.th}>Attendance</th>
            <th style={styles.th}>Total</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((student) => (
            <tr key={student.rollNo} style={styles.bodyRow}>
              <td style={styles.td}>{student.rollNo}</td>
              <td style={styles.td}>{student.name}</td>
              <td style={styles.td}>{student.firstInternal}</td>
              <td style={styles.td}>{student.secondInternal}</td>
              <td style={styles.td}>{student.assignments}</td>
              <td style={styles.td}>{student.attendance}</td>
              <td style={styles.td}>{student.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "90%",
    margin: "20px auto",
  },
  title: {
    textAlign: "center",
    color: "#512da8",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    overflow: "hidden",
  },
  headerRow: {
    backgroundColor: "#512da8",
    color: "white",
    fontWeight: "bold",
  },
  th: {
    padding: "12px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  bodyRow: {
    backgroundColor: "#f4f4f4",
    transition: "0.3s",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    color: "#333",
  },
};

export default StudentGradesPage;

