import React from 'react'
import { Kui } from '../kui'
export default class TimeLine extends Kui {
  render() {
    return (<div className={this.className(['k-timeline'])}>
      <ul>
        {this.props.children}
      </ul>
    </div>)
  }
}

