let code = {}

code.base=`import { Radio } from 'react-kui';
constructor(props) {
  super(props)
  this.state = {
    checked: false,
  }
}
testChange(value) {
  this.setState({ checked: value })
}
testClick() {
  this.setState({ checked: !this.state.checked })
}
ReactDOM.render() {
  return (
    <div>
      <Radio checked={this.state.checked} onChange={this.testChange.bind(this)} value="1">单选</Radio>
      <Button onClick={this.testClick.bind(this)} >Click me</Button>
    </div>
  )
}`

code.disabled = `import { Radio } from 'react-kui';
ReactDOM.render() {
  return (
    <div>
      <Radio label="葡萄🍇" disabled checked></Radio>
      <Radio label="梨子🍐" disabled></Radio>
    </div>
  )
}`
code.group = `import { Radio } from 'react-kui';
constructor(props) {
  super(props)
  this.state = {
    data: "苹果🍎",
  }
}
onChangeGroup(value) {
  this.setState({ data: value })
}
onClear() {
  this.setState({ data: '' })
}
onSelect() {
  this.setState({ data: '苹果🍎' })
}
ReactDOM.render() {
  return (
    <div>
        <Radio.Group value={this.state.data} onChange={this.onChangeGroup.bind(this)}>
          <Radio label="苹果🍎"></Radio>
          <Radio label="橘子🍊"></Radio>
          <Radio label="香蕉🍌"></Radio>
          <Radio label="栗子🌰"></Radio>
          <Radio label="葡萄🍇"></Radio>
          <Radio label="梨子🍐" disabled></Radio>
        </Radio.Group>
        <Button onClick={this.onClear.bind(this)}>清除</Button>
        <Button onClick={this.onSelect.bind(this)}> 选中苹果</Button >
    </div>
  )
}`
export default code