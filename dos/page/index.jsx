import React, { Component } from 'react'
import vue from '../assets/kui-vue.png'
import react from '../assets/kui-react.png'
import angular from '../assets/kui-angular.png'
import { Message } from '../../src/index'
export default class Index extends Component {

  render() {

    let renderBlister = (n) => {
      let blisters = []
      for (let i = 0; i < n; i++) {
        blisters.push(<span key={i} className={'blister blister' + i}>
          <span className="light"></span>
          <span className="light2"></span>
        </span>)
      }
      return blisters
    }
    return <section className="index">
      <h1>KUI, 一枚前端UI组件库</h1>
      <div className="logo" >
        <a href="//k-ui.xyz/start">
          <img src={vue} />
          <span >For Vue</span>
        </a>
        <a href="//react.k-ui.xyz/start">
          <img src={react} />
          <span >For React</span>
        </a>
        <a onClick={() => Message.info('抱歉，部分文档还在完善...')}>
          <img src={angular} />
          <span >For Angular</span>
        </a>
      </div>
      {renderBlister(9)}
      <footer>
        <p>Copyright ©2009-2018
        <a href="http://www.chuchur.com">禅境花园</a> by chuchur 粤ICP备17111365号 </p>
      </footer>
    </section>
  }
}