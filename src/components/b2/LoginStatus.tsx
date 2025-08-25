import React, { Component } from "react";

interface State {
  isLoggedIn: boolean;
}

export default class LoginStatus extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleToggle = (): void => {
    this.setState(() => ({
      isLoggedIn: !this.state.isLoggedIn,
    }));
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}>
        {isLoggedIn ? (
          <>
            ✅{" "}
            Xin chào, User!
            <br />
            <button
              onClick={this.handleToggle}
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            🔒{" "}
            Vui lòng đăng nhập để tiếp tục.
            <br />
            <button
              onClick={this.handleToggle}
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Đăng nhập
            </button>
          </>
        )}
      </div>
    );
  }
}
