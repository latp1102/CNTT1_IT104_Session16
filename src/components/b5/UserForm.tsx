import React, { Component, ChangeEvent, FormEvent } from "react";

interface State {
  formData: {
    name: string;
    email: string;
    age: string; // dùng string để dễ bind với input
  };
  errors: {
    email?: string;
    age?: string;
  };
  submittedData: {
    name: string;
    email: string;
    age: string;
  } | null;
}

export default class UserForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      formData: { name: "", email: "", age: "" },
      errors: {},
      submittedData: null,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState(prev => ({
      formData: { ...prev.formData, [name]: value }
    }));
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, age } = this.state.formData;
    const errors: { email?: string; age?: string } = {};

    if (!email.includes("@")) {
      errors.email = "Email không hợp lệ";
    }

    if (Number(age) < 0) {
      errors.age = "Tuổi không được âm";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors, submittedData: null });
      return;
    }

    this.setState({
      submittedData: { name, email, age },
      errors: {}
    });
  };

  handleReset = () => {
    this.setState({
      formData: { name: "", email: "", age: "" },
      errors: {},
      submittedData: null
    });
  };

  render() {
    const { formData, errors, submittedData } = this.state;
    return (
      <div style={{ maxWidth: "400px", margin: "20px auto" }}>
        <h2>Form User</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={this.handleChange}
            />
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={this.handleChange}
            />
            {errors.age && <div style={{ color: "red" }}>{errors.age}</div>}
          </div>
          <button type="submit">Gửi</button>
          <button type="button" onClick={this.handleReset} style={{ marginLeft: "10px" }}>
            Xóa tất cả
          </button>
        </form>

        {submittedData && (
          <div style={{ marginTop: "20px" }}>
            <h3>Thông tin đã nhập:</h3>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Age: {submittedData.age}</p>
          </div>
        )}
      </div>
    );
  }
}
