import React, { useState } from "react";
<<<<<<< HEAD
import Navbar from "./students/Navbar";


const NoticePage = () => {
=======
import Navbar from "./student/Navbar";


function NoticePage() {
>>>>>>> origin/master
  const [notice, setNotice] = useState("");
  const [notices, setNotices] = useState([]);

  const handleNoticeChange = (e) => {
    setNotice(e.target.value);
  };

  const handleNoticeSubmit = () => {
    const newNotice = {
      text: notice,
      date: new Date().toLocaleString(),
    };
    setNotices([newNotice, ...notices]);
    setNotice(""); // Clear the input field after submission
  };

  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-center text-3xl font-bold text-[#512da8] mb-6">
           Notice Board
        </h1>

        {/* Upload Notice */}
        <textarea
          value={notice}
          onChange={handleNoticeChange}
          rows="4"
          className="w-full p-4 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#512da8] focus:border-transparent"
          placeholder="Write your notice here..."
        />
        <button
          onClick={handleNoticeSubmit}
          className="w-full py-2 bg-[#512da8] text-white rounded-md hover:bg-[#6a4eaf] transition"
        >
          Upload Notice
        </button>
      </div>

      {/* Display Notices */}
      <div className="w-full max-w-4xl mt-10">
        {notices.length > 0 ? (
          notices.map((notice, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md mb-6"
            >
              <p className="text-gray-800 text-lg mb-2">{notice.text}</p>
              <p className="text-sm text-gray-500">Posted on: {notice.date}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No notices available</p>
        )}
      </div>
    </div>
    </div>
  );
}

<<<<<<< HEAD
export default NoticePage;
=======
export default NoticePage;
>>>>>>> origin/master
