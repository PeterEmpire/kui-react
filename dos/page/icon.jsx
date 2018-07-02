import React from 'react'
import { Icon, Input, Tooltip,Message } from '../../src/'

import Demo from '../components/demo'

import code from '../code/icon'

import { Kui, PropTypes } from '../../src/components/kui'
export default class icon extends Kui {

  constructor(props) {
    super(props)
    this.state = {
      key: '',
      list: code.iconList,
    }
    this.onChange = this.onChange.bind(this)
  }
  copy(x) {
    // this.setState({copyhtml : })
    this.refs.copyDom.value = `<Icon type="${x}" />`
    setTimeout(() => {
      this.refs.copyDom.select()
      document.execCommand("copy");
      Message.success('复制成功！')
    })
  }
  onChange(e) {
    let list = code.iconList.filter(x => { return x.indexOf(e.target.value) >= 0 })
    this.setState({list:list})
  }

  getChildren() {
    return this.state.list.map((x,i) => {
      return (<span key={i} onClick={this.copy.bind(this,x)}><Tooltip content={x}><Icon type={x}></Icon></Tooltip></span>)
    })
  }

  render() {
    return <div>
      <h2>Icon 图标</h2>
      <p>kui 的图标使用开源项目
       <a href="http://ionicons.com/" target="_blank">ionicons</a>
      </p>
      <h3>使用</h3>
      <Demo title="基础">
        <div>
          <Icon type="home" />
          <Icon type="home" size="25" />
          <Icon type="home" size="25" color="red" />
        </div>
        <div>
          可以通过
        <code>type</code>,
        <code>size</code>
          <code>color</code>属性分别设置图标的类型、大小、颜色
        </div>
        <div>{code.base}</div>
      </Demo>
      <h3>API</h3>
      <div className="table-border">
        <table>
          <tbody>
            <tr>
              <th>属性</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
            <tr>
              <td>type</td>
              <td>图标的名称</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>图标的大小，单位是 px</td>
              <td>String,Number </td>
              <td>-</td>
            </tr>
            <tr>
              <td>color</td>
              <td>图标的颜色</td>
              <td>String </td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>图标列表</h3>
      <Input placeholder="搜索图标，点击图标即可复制" style={{ width: '80%', margin: '0 auto', display: 'inherit', }} onChange={(e)=>this.onChange(e)} />
      <br />
      <br />
      <div className="icon-item">
        {
          this.getChildren()
        }
      </div>
      <input type="text" ref="copyDom" style={{ position: 'absolute', left: '-9999px' }} />
    </div >
  }
} 