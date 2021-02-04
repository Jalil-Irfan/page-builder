import './Logo.css';
import React from "react";
import FileUpload from './FileUpload';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <h2> File upload </h2>
        <FileUpload />
      </div>
    );
  }
}
export default Logo;