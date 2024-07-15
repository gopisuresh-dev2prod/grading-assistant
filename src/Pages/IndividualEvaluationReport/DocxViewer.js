// DocxViewer.jsx
import React, { useEffect, useRef } from 'react';
import { renderAsync } from 'docx-preview';
import './DocxViewer.scss';

const DocxViewer = ({ docxUrl }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current && docxUrl) {
      fetch(docxUrl)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => renderAsync(arrayBuffer, viewerRef.current));
    }
  }, [docxUrl]);

  return <div ref={viewerRef} className="docx-viewer" />;
};

export default DocxViewer;
