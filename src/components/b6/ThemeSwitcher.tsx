import React, { Component } from 'react'
import './ThemeSwitcher.css'
interface StateType {
    isDarkMode: boolean;
}
export default class ThemeSwitcher extends Component<object, StateType> {
    constructor(props: object){
        super(props);
        this.state = {
            isDarkMode: false
        }
    }
  render() {
      const {isDarkMode} = this.state;
      const handleClick = () => {
        this.setState(prevState => ({isDarkMode: prevState.isDarkMode ? false: true}));
      }
    return (
      <div className={`theme-switcher ${isDarkMode ? 'dark' : 'light'}`}>
        <h1>{isDarkMode ? "🌙 Chế độ tối đang bật": "☀️ Chế độ sáng đang bật"}</h1>
        <button onClick={handleClick}>Chuyển theme</button>
      </div>
    )
  }
}
