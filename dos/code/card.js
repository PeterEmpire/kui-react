let code = {}
code.base = `import { Card } from 'kui-react';
ReactDOM.render() {
  return (
    <div>
      <Card title="卡片标题"
          extra={<span slot="extra" onClick={() => Message.info('刚刚摇了下')}>摇一摇</span>}
          icon="android-favorite-outline">

          <p>内容随便写， 欢迎使用</p>
          <p>内容随便写， 欢迎使用</p>
          <p>内容随便写， 欢迎使用</p>
          <p>内容随便写， 欢迎使用</p>
          <p>内容随便写， 欢迎使用</p>
          <p>内容随便写， 欢迎使用</p>
      </Card>  
    </div>
  )
}`

code.border = `import { Card } from 'kui-react';
ReactDOM.render() {
  return (
    <div>
      <Card title="卡片标题" icon="android-favorite-outline" bordered>
        <span slot="extra">摇一摇</span>
        <p>内容随便写， 欢迎使用</p>
        <p>内容随便写， 欢迎使用</p>
        <p>内容随便写， 欢迎使用</p>
        <p>内容随便写， 欢迎使用</p>
        <p>内容随便写， 欢迎使用</p>
        <p>内容随便写， 欢迎使用</p>
      </Card>  
    </div>
  )
}`
export default code