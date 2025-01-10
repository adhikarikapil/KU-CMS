<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignmentPage = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignments, setAssignments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/assignments/');
        setAssignments(response.data);
      } catch (err) {
        setError('Failed to load assignments');
      }
    };

    fetchAssignments();
  }, []);
=======
import React, { useState } from "react";

function AssignmentPage() {
  const [file, setFile] = useState(null);
  const [assignments, setAssignments] = useState([]);
>>>>>>> origin/master

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

<<<<<<< HEAD
  const handleAssignmentSubmit = async (e) => {
    e.preventDefault();
=======
  const handleAssignmentSubmit = () => {
>>>>>>> origin/master
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

<<<<<<< HEAD
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/assignments/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setAssignments([response.data, ...assignments]);
      setFile(null);
      setTitle("");
      setDescription("");
      setError(null);
    } catch (err) {
      setError('Failed to upload assignment');
    }
=======
    const newAssignment = {
      fileName: file.name,
      fileType: file.type,
      fileSize: (file.size / 1024).toFixed(2) + " KB", // Convert file size to KB
      date: new Date().toLocaleString(),
    };

    setAssignments([newAssignment, ...assignments]);
    setFile(null); // Clear file input after submission
>>>>>>> origin/master
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-center text-3xl font-bold text-[#512da8] mb-6">
          Teacher's Assignment Upload
        </h1>

        {/* File Upload */}
<<<<<<< HEAD
        <form onSubmit={handleAssignmentSubmit}>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-4 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#512da8] focus:border-transparent"
            required
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#512da8] focus:border-transparent"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#512da8] focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#512da8] text-white rounded-md hover:bg-[#6a4eaf] transition"
          >
            Upload Assignment
          </button>
        </form>
=======
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-4 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#512da8] focus:border-transparent"
        />

        <button
          onClick={handleAssignmentSubmit}
          className="w-full py-2 bg-[#512da8] text-white rounded-md hover:bg-[#6a4eaf] transition"
        >
          Upload Assignment
        </button>
>>>>>>> origin/master
      </div>

      {/* Display Assignments */}
      <div className="w-full max-w-4xl mt-10">
        {assignments.length > 0 ? (
          assignments.map((assignment, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md mb-6"
            >
              <p className="text-gray-800 text-lg mb-2">File: {assignment.fileName}</p>
              <p className="text-sm text-gray-500">Type: {assignment.fileType}</p>
              <p className="text-sm text-gray-500">Size: {assignment.fileSize}</p>
              <p className="text-sm text-gray-500">Posted on: {assignment.date}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No assignments available</p>
        )}
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default AssignmentPage;
=======
}

export default AssignmentPage;

>>>>>>> origin/master
