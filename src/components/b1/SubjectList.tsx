import React, { Component } from 'react'

export default class SubjectList extends Component {
  render() {
    const subject = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];
    return (
      <div style={{backgroundColor: "black"}}>
        📚<h2 style={{color: "white"}}>Danh sách các môn học</h2>
        {subject.map((SubjectList, index) => (
            <div key={index} style={{
                backgroundColor: "#F0F8FF", 
                padding: "10px", 
                margin: "5px",
                borderRadius: "5px",
                textAlign: "center"
            }}>{SubjectList}</div>
        ))}
      </div>
    )
  }
}
