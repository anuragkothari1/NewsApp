import React, { Component } from "react";
import "./NewsItem.css"


export class Newsitem extends Component {
  render() {
    let { title, des,imageurl,newsurl } = this.props;
    return (
      <div className="my-3">
    
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageurl?"https://images.seattletimes.com/wp-content/uploads/2023/09/09272023_TZR_Target_Ballard_tzr_112400.jpg?d=1200x630":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{des}...</p>
            <a href={newsurl}  target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
            Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
