import React, { Component } from 'react'
interface StateType {
    count: number;
}
export default class Counter extends Component<object, StateType> {
    constructor(props: object){
        super(props);
        this.state = {
            count: 0
        }
    }
  render() {
    const handleClick = () => {
        this.setState({
          count: this.state.count + 1,
        })
    }
    return (
      <div>
        <h2>Đã click: {this.state.count}</h2>
        <button onClick={handleClick}>Click me</button>
      </div>
    )
  }
}
