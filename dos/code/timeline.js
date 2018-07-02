let code = {}

code.base = `import { TimeLine } from 'kui-react';
ReactDOM.render() {
  return (
    <div>
      <TimeLine>
        <TimeLine.Item>发布1.0版本</TimeLine.Item>
        <TimeLine.Item>发布1.0版本</TimeLine.Item>
        <TimeLine.Item>发布1.0版本</TimeLine.Item>
      </TimeLine> 
    </div>
  )
}`
code.withIcon = `import { TimeLine } from 'kui-react';
ReactDOM.render() {
  return (
    <div>
    <TimeLine>
      <TimeLine.Item icon="ribbon-b">发布2.0版本</TimeLine.Item>
      <TimeLine.Item icon="bug">修复bug</TimeLine.Item>
      <TimeLine.Item>发布1.0版本</TimeLine.Item>
    </TimeLine> 
    </div>
  )
}`
code.color = `import { TimeLine } from 'kui-react';
ReactDOM.render() {
  return (
    <div>
      <TimeLine>
        <TimeLine.Item icon="ribbon-b" color="#cba302">发布2.0版本</TimeLine.Item>
        <TimeLine.Item icon="bug" color="red">修复bug</TimeLine.Item>
        <TimeLine.Item>发布1.0版本</TimeLine.Item>
      </TimeLine> 
    </div>
  )
}`

export default code