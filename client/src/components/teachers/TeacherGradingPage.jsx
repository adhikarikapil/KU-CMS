import React, { useState } from "react";

function TeacherGradingPage() {
  const [grades, setGrades] = useState(
    Array.from({ length: 60 }, (_, index) => ({
      rollNo: index + 1,
      name: "",
      firstInternal: 0,
      secondInternal: 0,
      assignments: 0,
      attendance: 0,
      total: 0,
    }))
  );

  // Update the grades array and calculate the total dynamically
  const handleInputChange = (index, field, placeholder) => {
    setGrades((prevGrades) =>
      prevGrades.map((student, i) =>
        i === index
          ? {
              ...student,
              [field]: field === "name" ? value : Number(placeholder),
              total:
                field === "name"
                  ? student.total
                  : field === "total"
                  ? student.total
                  : calculateTotal({
                      ...student,
                      [field]: Number(placeholder),
                    }),
            }
          : student
      )
    );
  };

  // Calculate the total for a student
  const calculateTotal = (student) => {
    return (
      student.firstInternal +
      student.secondInternal +
      student.assignments +
      student.attendance
    );
  };

  const saveGrades = () => {
    alert("Grades saved successfully!");
    console.log(grades); // Replace this with API call for backend integration
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Teacher Grading Page</h1>
      <div style={styles.saveButtonContainer}>
        <button style={styles.saveButton} onClick={saveGrades}>
          Save Grades
        </button>
      </div>
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
          {grades.map((student, index) => (
            <tr key={student.rollNo} style={styles.bodyRow}>
              <td style={styles.td}>{student.rollNo}</td>
              <td style={styles.td}>
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                  style={styles.input}
                  placeholder="Enter Name"
                />
              </td>
              <td style={styles.td}>
                <input
                  type="number"
                  value={student.firstInternal}
                  onChange={(e) =>
                    handleInputChange(index, "firstInternal", e.target.value)
                  }
                  style={styles.input}
                  placeholder="Marks"
                />
              </td>
              <td style={styles.td}>
                <input
                  type="number"
                  value={student.secondInternal}
                  onChange={(e) =>
                    handleInputChange(index, "secondInternal", e.target.value)
                  }
                  style={styles.input}
                  placeholder="Marks"
                />
              </td>
              <td style={styles.td}>
                <input
                  type="number"
                  value={student.assignments}
                  onChange={(e) =>
                    handleInputChange(index, "assignments", e.target.value)
                  }
                  style={styles.input}
                  placeholder="Marks"
                />
              </td>
              <td style={styles.td}>
                <input
                  type="number"
                  value={student.attendance}
                  onChange={(e) =>
                    handleInputChange(index, "attendance", e.target.value)
                  }
                  style={styles.input}
                  placeholder="Marks"
                />
              </td>
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
    height: '100%',
    margin: "20px auto",
  },
  title: {
    textAlign: "center",
    color: "#512da8",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  saveButtonContainer: {
    textAlign: "right",
    marginBottom: "10px",
  },
  saveButton: {
    backgroundColor: "#512da8",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  headerRow: {
    backgroundColor: "#512da8",
    color: "white",
  },
  th: {
    padding: "10px",
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
    fontSize: "0.9rem",
  },
  input: {
    width: "90%",
    padding: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "0.9rem",
  },
};

<<<<<<< HEAD
export default TeacherGradingPage;
=======
export default TeacherGradingPage;


>>>>>>> origin/master
