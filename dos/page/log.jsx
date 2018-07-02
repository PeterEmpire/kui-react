import React from 'react'
import TimeLine from '../../src/components/timeline'
export default class log extends React.Component {
  render() {
    return (<div className="demo-logs">
      <h2>更新日志</h2>
      <TimeLine>
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