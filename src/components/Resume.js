import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import './Resume.css'
import resumePDF from '../Resume/Akre-Resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Resume extends Component {
  render() {
    return (
      <Document
      file={resumePDF}
      onLoadSuccess={this.onDocumentLoadSuccess} >
        <Page pageNumber={1} />
      </Document>
    )
  }
}

export default Resume;