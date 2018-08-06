import React, { Component } from 'react'
import { Radio, Button, RadioGroup, Row, Col } from '../../src'
import Demo from '../components/demo'

import code from '../code/radio'
export default class radio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      value: "3",
    }
  }
  testChange(value) {
    this.setState({ checked: value })
  }
  testClick() {
    this.setState({ checked: !this.state.checked })
  }
  onClear() {
    this.setState({ value: '' })
  }
  onSelect() {
    this.setState({ value: '0' })
  }
  onChangeGroup(value) {
    this.setState({ value })
  }
  render() {
    let { value, } = this.state
    return <div>
      <h2>Radio 单选框</h2>
      <h3>代码示例</h3>
      <Row gutter="8">
        <Col span="12">
          <Demo title="基础" layout="vertical">
            <div>
              <span>{this.state.checked.toString()}</span><br />
              <Radio checked={this.state.checked} onChange={this.testChange.bind(this)} value="1">单选</Radio>
              <Button onClick={this.testClick.bind(this)} style={{ margin: 0 }}>Click me</Button>
            </div>
            <div>单独使用可使用
          <code>checked</code>切换选中状态</div>
            <div>{code.base}</div>
          </Demo>
        </Col>
        <Col span="12">
          <Demo title="禁用" layout="vertical">
            <div>
              <Radio label="葡萄🍇" disabled checked></Radio>
              <Radio label="梨子🍐" disabled></Radio>
            </div>
            <div>通过
          <code>disabled</code>设置组件是否被禁用</div>
            <div>{code.disabled}</div>
          </Demo>
        </Col >
      </Row >
      <Demo title="组合使用">
        <div>
          <p>选中的值：{value}</p>
          <Radio.Group value={this.state.value} onChange={this.onChangeGroup.bind(this)}>
            <Radio value="0" label="苹果🍎"></Radio>
            <Radio value="1" label="橘子🍊"></Radio>
            <Radio value="2" label="香蕉🍌"></Radio>
            <Radio value="3" label="栗子🌰"></Radio>
            <Radio value="4" label="葡萄🍇"></Radio>
            <Radio value="5" label="梨子🍐" disabled></Radio>
          </Radio.Group>
          <Button onClick={this.onClear.bind(this)}>清除</Button>
          <Button onClick={this.onSelect.bind(this)}> 选中苹果</Button >
        </div >
        <div>结合
        <code>RadioGroup</code>可以组合使用</div>
        <div>{code.group}</div>
      </Demo >
      <h3>Radio API</h3>
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
              <td>checked</td>
              <td>是否被选中</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>value</td>
              <td>单选框的值,只在组合使用时有效</td>
              <td>string | number</td>
              <td>false</td>
            </tr>
            <tr>
              <td>label</td>
              <td>显示的文字值</td>
              <td>string </td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用当前项</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>在选项状态发生改变时触发，返回当前状态</td>
              <td>Function</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>RadioGroup API</h3>
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
              <td>value</td>
              <td>组合使用时的值</td>
              <td>string，number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>在选项状态发生改变时触发，返回当前选中的项的值</td>
              <td>Function</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  }
}