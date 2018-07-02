import React from 'react'
import { Kui, PropTypes } from '../kui'
export default class TimeLineItem extends Kui {
  colorStyles() {
    let color = this.color;
    return color ? { color: color } : {};
  }
  classes() {
    let icon = this.icon;
    return icon ? [`k-ion-${icon}`] : ["k-ion-ios-circle-outline"];
  }
  render() {
    return (<li className="k-time-line-item">
      <div className="k-time-line-dot" style={this.styles(this.colorStyles())}>
        {this.props.dot || <i className={this.className(this.classes())}></i>}
      </div>
      <div className="k-time-line-item-content">
        {this.props.children}
      </div>
    </li>)
  }
}
TimeLineItem.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  dot: PropTypes.node,
} 