import React from 'react'
import { Kui, PropTypes } from '../kui'
import Col from './col'
export default class Row extends Kui {
  gutterStyles() {
    let style = {};
    if (this.props.gutter !== 0) {
      style = {
        marginLeft: this.props.gutter / -2 + "px",
        marginRight: this.props.gutter / -2 + "px"
      };
    }
    return style;
  }
  render() {
    return <div className={this.className(['k-row'])} style={this.gutterStyles()}>
      {
        React.Children.map(this.props.children, child => {
          if (!child || child.type !== Col) {
            return null
          }
          return React.cloneElement(child, Object.assign({}, child.props, { gutter: this.props.gutter }))
        })
      }
    </div>
  }
}

Row.propTypes = {
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Row.defaultProps = {
  gutter: 0
} 