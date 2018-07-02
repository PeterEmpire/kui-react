import React from 'react'
export default class theme extends React.Component {
  render() { 
    return <div className="theme">
      <h2>定制主题</h2>
      <p>主题可以根据自己的喜好，和项目定制的风格来开发，可以定制颜色和圆角风格。</p>
      <img src={require('../assets/theme.jpg')} />
    </div>
  }
}