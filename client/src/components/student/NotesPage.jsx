import React, { useState } from 'react';
import StudentDashboard from '../../pages/dashboard/StudentDashboard';

const NotesPage = () => {
  const [studentComment, setStudentComment] = useState('');
  const [studentComments, setStudentComments] = useState([]);

  const handleStudentCommentSubmit = () => {
    if (studentComment.trim() !== '') {
      setStudentComments([...studentComments, studentComment]);
      setStudentComment(''); // Clear the input field after submission
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      {/* Navbar */}
      <div style={{
        backgroundColor: '#512da8',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{ color: 'white', textAlign: 'center', fontSize: '28px', margin: 0 }}>Student Notes</h1>
      </div>

      {/* Notes Section */}
      <div style={{
        width: '70%',
        margin: '0 auto',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#512da8', fontSize: '30px', marginBottom: '20px' }}>Class Notes</h2>
        
        {/* Download Button */}
        <button style={{
          padding: '15px 30px',
          backgroundColor: '#512da8',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          fontSize: '18px',
          transition: 'background-color 0.3s',
        }}>
          Download Notes
        </button>

        {/* Comments Section */}
        <div style={{ marginTop: '40px', textAlign: 'left' }}>
          <h3 style={{ color: '#512da8', fontSize: '24px' }}>Comments</h3>
          <div>
            {studentComments.length === 0 ? (
              <p style={{ color: '#888', fontSize: '18px' }}>No comments yet.</p>
            ) : (
              studentComments.map((comment, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#f9f9f9',
                    padding: '15px',
                    borderRadius: '10px',
                    marginBottom: '15px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <p style={{ color: '#333', fontSize: '18px' }}>{comment}</p>
                </div>
              ))
            )}
          </div>

          {/* Comment Input */}
          <textarea
            value={studentComment}
            onChange={(e) => setStudentComment(e.target.value)}
            placeholder="Write your comment here..."
            rows="6"
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '10px',
              border: '1px solid #ddd',
              marginBottom: '15px',
              fontSize: '18px',
              resize: 'none',
            }}
          />
          <button
            onClick={handleStudentCommentSubmit}
            style={{
              padding: '12px 25px',
              backgroundColor: '#512da8',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'background-color 0.3s',
            }}
          >
            Submit Comment
          </button>
          
          
        </div>
      </div>
      
    </div>
  );
};

export default NotesPage;

