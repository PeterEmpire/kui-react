import React, { Component } from 'react'
import { PropTypes } from '../kui'
import { CSSTransition } from 'react-transition-group'


export default class Transition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: props.show
    }
  }
  componentDidMount() {
    if (this.state.show === undefined) {
      this.setState({ show: true })
    }
  }
  componentWillUnmount() {
    this.setState({ show: false })
  }

  componentWillReceiveProps(props) {
    if (this.state.show != props.show) {
      this.setState({ show: props.show })
    }
  }
  onExited(e) {
    this.props.onExited && this.props.onExited(e)
  }
  onEnter(e) {
    this.props.onEnter && this.props.onEnter(e)
  }
  render() {
    return (<CSSTransition in={this.state.show} timeout={this.props.timeout}
      onExited={(e) => this.onExited(e)}
      onEnter={(e) => this.onEnter(e)}
      unmountOnExit classNames={this.props.name}>
      {this.props.children}</CSSTransition>)
  }
}
Transition.defaultProps = {
  name: 'fade',
  timeout: 300
}
Transition.propTypes = {
  onExited: PropTypes.func,
  onEnter: PropTypes.func,
  name: PropTypes.string,
  show: PropTypes.bool,
}