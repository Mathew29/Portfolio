import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

import pdfFile from './../Resume.pdf';

class Resume extends Component {
  state = {
    file: pdfFile,
    numPages: null,
    pageNumber: 1,
  }
  
  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  onDocumentLoadSuccess =({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { file, pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file={file}
          onLoadSuccess={this.onDocumentLoadSuccess}>
            {/* <Page pageNumber={pageNumber} /> */}
            {Array.from(
              new Array(numPages),
              (el, index) => (
                <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                />
              ),
            )}
          </Document>
          {/* <p> Page {pageNumber} of {numPages} </p> */}
      </div>
    )
  }
}

export default Resume;