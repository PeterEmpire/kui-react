import React from 'react'
import { Kui, PropTypes } from '../kui'
import Radio from './radio'
export default class RadioGroup extends Kui {
  constructor(props) {
    super(props)
    this.state = {
      data: props.value || ''
    }
  }
  getChildContext() {
    return {
      RadioGroup: this
    }
  }
  onChange(label, checked) {
    if (checked) {
      this.setState({ data: label })
      if (this.props.onChange) this.props.onChange(label)
      this.props.onFormItemChange && this.props.onFormItemChange(label)
    }
  }
  componentWillReceiveProps(props) {
    if (props.value != this.props.value) {
      this.setState({
        data: props.value
      })
    }
  }
  render() {
    return <div className={this.className('k-radio-group')}>
      {
        React.Children.map(this.props.children, (child, index) => {
          if (!child || child.type != Radio) return null;
          let label = child.props.label || child.props.children
          return React.cloneElement(child, Object.assign({}, child.props, {
            checked: child.props.checked || (this.state.data == label && label !== undefined && label !== null && label !== ''),
            onChange: this.onChange.bind(this, label)
          }))
        })
      }
    </div>
  }
}
RadioGroup.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
}


RadioGroup.childContextTypes = {
  RadioGroup: PropTypes.any
}