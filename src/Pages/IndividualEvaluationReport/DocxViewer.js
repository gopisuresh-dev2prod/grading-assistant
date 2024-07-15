// DocxViewer.jsx
import React, { useEffect, useState } from 'react';
import mammoth from 'mammoth/mammoth.browser';
import './DocxViewer.scss';

const DocxViewer = ({ docxUrl }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (docxUrl) {
      fetch(docxUrl)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => {
          mammoth.convertToHtml({ arrayBuffer })
            .then((result) => {
              setContent(result.value);
            })
            .catch((error) => {
              console.error('Error converting DOCX to HTML:', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching DOCX file:', error);
        });
    }
  }, [docxUrl]);

  return (
    <div className="docx-viewer">
      <div className="docx-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default DocxViewer;