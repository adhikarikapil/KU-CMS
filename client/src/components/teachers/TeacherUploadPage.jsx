import React, { useState } from 'react';

<<<<<<< HEAD
=======



>>>>>>> origin/master
const TeacherUploadPage = () => {
  const [uploadFile, setUploadFile] = useState(null);
  const [teacherComment, setTeacherComment] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileComment, setUploadedFileComment] = useState('');

  const handleFileChange = (e) => {
    setUploadFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (uploadFile) {
      setUploadedFile(URL.createObjectURL(uploadFile));
      setUploadFile(null);
      alert('File uploaded successfully');
    }
  };

  const handleCommentSubmit = () => {
    if (teacherComment.trim() !== '') {
      setUploadedFileComment(teacherComment);
      setTeacherComment(''); // Clear the comment input field
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      {/* Navbar */}
      <div style={{
        backgroundColor: '#512da8',
        padding: '15px',
        borderRadius: '10px',
        marginBottom: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 style={{ color: 'white', textAlign: 'center', fontSize: '24px', margin: 0 }}>Teacher Upload Page</h1>
      </div>

      {/* Upload Form */}
      <div style={{
        width: '60%',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#512da8', fontSize: '22px', marginBottom: '15px' }}>Upload Class Notes</h2>

        {/* File Upload */}
        <input
          type="file"
          accept=".pdf, .docx, .ppt, .pptx"
          onChange={handleFileChange}
          style={{
            marginBottom: '20px',
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #ddd',
            fontSize: '16px',
          }}
        />
        <button
          onClick={handleFileUpload}
          style={{
            padding: '10px 20px',
            backgroundColor: '#512da8',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s',
          }}
        >
          Upload File
        </button>

        {/* File Display */}
        {uploadedFile && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}>
            <h3 style={{ color: '#512da8' }}>Uploaded File:</h3>
            <a href={uploadedFile} download style={{ color: '#512da8', fontSize: '16px' }}>
              Download Uploaded File
            </a>
          </div>
        )}

        {/* Teacher Comment Section */}
        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#512da8', fontSize: '20px' }}>Teacher's Comment</h3>
          <textarea
            value={teacherComment}
            onChange={(e) => setTeacherComment(e.target.value)}
            placeholder="Write your comment here..."
            rows="4"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ddd',
              marginBottom: '10px',
              fontSize: '16px',
              resize: 'none',
            }}
          />
          <button
            onClick={handleCommentSubmit}
            style={{
              padding: '10px 20px',
              backgroundColor: '#512da8',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'background-color 0.3s',
            }}
          >
            Submit Comment
          </button>
          
          {/* Display Teacher's Comment */}
          {uploadedFileComment && (
            <div style={{
              marginTop: '20px',
              backgroundColor: '#f9f9f9',
              padding: '10px',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}>
              <p style={{ color: '#333', fontSize: '16px' }}>{uploadedFileComment}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherUploadPage;
