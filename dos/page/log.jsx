import React from 'react'
import TimeLine from '../../src/components/timeline'
export default class log extends React.Component {
  render() {
    return (<div className="demo-logs">
      <h2>更新日志</h2>
      <TimeLine>
        <TimeLine.Item>
          <h3>1.0.7
          <span>2018-7-15</span>
          </h3>
          <p>完善所有组件自定义style和className的问题</p>
          <p>优化Row 和 Col 子组件</p>
        </TimeLine.Item>
        <TimeLine.Item>
          <h3>1.0.6
          <span>2018-7-14</span>
          </h3>
          <p>修复组件引用的问题</p>
        </TimeLine.Item>
        <TimeLine.Item>
          <h3>1.0.5
          <span>2018-7-13</span>
          </h3>
          <p>修复编译问题</p>
        </TimeLine.Item>
        <TimeLine.Item>
          <h3>1.0.4
          <span>2018-7-12</span>
          </h3>
          <p>Menu组件细节优化和一些调整</p>
        </TimeLine.Item>
        <TimeLine.Item>
          <h3>1.0.3
          <span>2018-7-11</span>
          </h3>
          <p>编译优化</p>
        </TimeLine.Item>
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