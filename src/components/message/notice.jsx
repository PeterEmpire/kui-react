import React from 'react'
import { Kui, PropTypes } from '../kui'
import Transition from '../transition'
export default class Notice extends Kui {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  } 
  getIcon() {
    let icons = {
      info: "information-circled",
      error: "android-cancel",
      success: "checkmark-circled",
      warning: "android-alert"
    };
    return `k-ion-${icons[this.props.type]}`;
  }
  classes() {
    let { noticeType, type } = this.props
    return this.className([
      `k-${noticeType}-notice`,
      {
        [`k-${noticeType}-${type}`]: type
      }
    ])
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  componentDidMount() {
    this.forceUpdate();
    this.startTimer()
    this.setState({ show: true })
  }
  onClose() {
    this.setState({ show: false })
    this.props.onClose && this.props.onClose()
  }
  startTimer() {
    if (this.props.closable) return;
    this.timer = setTimeout(() => {
      this.onClose()
    }, this.props.duration * 1000)
  }
  onEnter(e) {
    e.style.height = e.scrollHeight - 15 + "px";
  }
  onExited(e) {
    e.style.height = 0;
    e.style.paddingTop = 0;
    e.style.paddingBottom = 0;
    this.props.onExited && this.props.onExited(e)
  }
  render() {
    let { transitionName, noticeType, content, closable, title } = this.props
    return (<Transition name={transitionName} show={this.state.show} onExited={(e) => this.onExited(e)}>
      {
        noticeType == 'message' ? <div className={this.classes()} >
          <div className="k-message-notice-content">
            <i className={this.getIcon()}></i>
            <span >{content}</span>
            {closable && <a className="k-message-close" onClick={this.onClose.bind(this)}></a>}
          </div>
        </div>
          :
          <div className={this.classes()}>
            <div className="k-notice-notice-content">
              <div className="k-notice-title">{title}</div>
              <div className="k-notoce-desc">{content}</div>
              <a className="k-notice-close" onClick={this.onClose.bind(this)}></a>
            </div>
          </div>
      }
    </Transition>)
  }
}
Notice.defaultProps = {
  type: 'info',
  transitionName: 'fadedown',
  noticeType: 'message',
  duration: 3
}
Notice.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  name: PropTypes.string,
  closable: PropTypes.bool,
  transitionName: PropTypes.string,
  noticeType: PropTypes.string,
  onClose: PropTypes.func,
  duration: PropTypes.number
}

