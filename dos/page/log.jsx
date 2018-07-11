import React from 'react'
import TimeLine from '../../src/components/timeline'
export default class log extends React.Component {
  render() {
    return (<div className="demo-logs">
      <h2>更新日志</h2>
      <TimeLine>
        <TimeLine.Item>
          <h3>1.0.2
          <span>2018-7-11</span>
          </h3>
          <p>修复<code>Breadcrumb</code>组件自定义style的问题</p>
          <p>新增<code>Layout</code>一系列布局组件</p>
        </TimeLine.Item>
        <TimeLine.Item>
          <h3>1.0.1
          <span>2018-7-10</span>
          </h3>
          <p>修复React 16.x 版本下部分组件ref传递错误的问题</p>
          <p>修复<code>DatePicker</code>特定情况下换行的bug</p>
        </TimeLine.Item>
        <TimeLine.Item>
          <h3>1.0.0
          <span>2018-7-1</span>
          </h3>
          <p>1.0发布，转入公测</p>
        </TimeLine.Item>
        <TimeLine.Item icon="erlenmeyer-flask">
          <h3> 0.0.1
          <span>2018-5-27</span>
          </h3>
          <p>着手开发</p>
        </TimeLine.Item>
      </TimeLine>
    </div>)
  }
}