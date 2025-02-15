import React, { useEffect, useState } from 'react';
import { list } from '@aws-amplify/storage';
import './FileList.css'; // Import the CSS file

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  async function fetchFiles() {
    try {
      const result = await list('');
      setFiles(result.items);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  }

  return (
    <div className="file-list">
      <h2>Files from S3</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <a
              href={`https://your-s3-bucket-url/${file.key}`} // Replace with your S3 bucket URL
              target="_blank"
              rel="noopener noreferrer"
            >
              {file.key}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileList;