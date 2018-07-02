
import React from 'react'
import { Kui, PropTypes } from '../kui'
import Icon from '../icon'
import TabPane from './tabPane'
export default class Tabs extends Kui {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      paneLeft: 0,
      tabLeft: 0,
      activeName: this.value || '',
      scrollable: false,
      listWidth: 0,
      itemWidth: 0,
      items: []
    }
  }
  addItem(item) {
    let { items } = this.state
    items.push(item)
    this.setState({ items }, () => this.setScroll())

  }
  removeItem(item) {
    let { items } = this.state
    items.splice(items.indexOf(item), 1)
    this.setState({ items })
  }
  getChildContext() {
    return {
      Tabs: this
    }
  }
  paneStyles() {
    let { paneLeft, itemWidth, listWidth } = this.state
    return {
      transform: `translateX(${paneLeft * itemWidth * -1}px)`,
      width: `${listWidth}px`
    };
  }
  classes() {
    let { mini, card, sample } = this.props
    return this.className([
      "k-tabs",
      {
        ["k-tabs-mini"]: mini,
        ["k-tabs-card"]: card && !sample,
        ["k-tabs-sample"]: sample && !card
      }
    ])
  }

  scrollStyle() {
    return {
      transform: `translateX(${this.state.tabLeft}px)`
    };
  }
  scroll(t) {
    let boxWidth = this.refs.scroll.offsetWidth;
    let scrollWidth = this.refs.scroll.scrollWidth;
    let { tabLeft } = this.state
    if (t == "next") {
      let last = scrollWidth + tabLeft - boxWidth; //剩余的要偏移的长度
      if (last == 0) return;
      tabLeft -= last > boxWidth ? boxWidth : last;
    } else {
      if (tabLeft == 0) return;
      tabLeft += -tabLeft > boxWidth ? boxWidth : -tabLeft;
    }
    this.setState({ tabLeft })
  }
  setScroll() {
    let boxWidth = this.refs.scroll.offsetWidth;
    let scrollWidth = this.refs.scroll.scrollWidth;
    let extraWidth = this.refs.extra ? this.refs.extra.offsetWidth : 0;
    let count = this.state.items.length
    // console.log(boxWidth,scrollWidth,extraWidth)
    // let s = this.scrollable ? 39 * 2 - 10 : 0;
    let { scrollable, tabLeft, itemWidth, listWidth } = this.state
    scrollable = scrollWidth - extraWidth > boxWidth;
    //重置滚动
    if (tabLeft < 0) {
      if (-tabLeft + boxWidth > scrollWidth) {
        tabLeft = -(scrollWidth - boxWidth);
      }
    }
    itemWidth = this.refs.root.offsetWidth;
    listWidth = itemWidth * count;
    this.setState({ scrollable, tabLeft, itemWidth, listWidth })
  }
  close(e, index, name) {
    // e.preventDefault()
    e.stopPropagation()
    // e.nativeEvent.stopImmediatePropagation()
    let { activeName, items, paneLeft } = this.state
    this.props.onClocse && this.props.onClocse(activeName)

    if (activeName == name) {
      activeName = items[index - 1].props.name;
      paneLeft = index - 1;
    } else if (index < paneLeft) {
      paneLeft--
    }

    items.splice(index, 1);
    this.refs.panes.removeChild(this.refs.panes.children[index]);
    this.setState({ activeName, paneLeft })
  }
  handelClick(disabled, name, index) {
    if (disabled) return;
    let { activeName, paneLeft } = this.state
    activeName = name;
    paneLeft = index

    this.setState({ activeName, paneLeft })
    this.props.onClick && this.props.onClick(activeName)
  }
  componentWillMount() {
    document.addEventListener('resize', this.setScroll)
  }
  componentWillUnmount() {
    document.removeEventListener('rezise', this.setScroll)
  }
  componentDidMount() {
    let { left, activeName, paneLeft, itemWidth, listWidth, items } = this.state
    let index = 0;
    if (activeName === '') {
      activeName = items[0].props.name;
      index = 0;
    } else {
      items.forEach((item, i) => {
        if (item.props.name == activeName)
          index = i;
      });
    }
    left = index;
    paneLeft = index;
    itemWidth = this.refs.root.offsetWidth;

    listWidth = itemWidth * items.length;

    this.setState({ left, activeName, paneLeft, itemWidth, listWidth }, () => { })
    setTimeout(() => {
      this.forceUpdate()
    });

  }
  render() {
    let { extra, children, card, closable } = this.props
    let { scrollable, itemWidth, activeName, items, paneLeft } = this.state
    let renderTabs = () => {
      let tabs = []
      items.forEach((tab, index) => {
        let { label, icon, disabled, name } = tab.props
        tabs.push(<div className={this.className(['k-tabs-tab', { ['k-tabs-tab-active']: name == activeName, ['k-tabs-tab-disabled']: disabled }])}
          key={index} onClick={this.handelClick.bind(this, disabled, name, index)}>
          {icon && <Icon type={icon} />}
          {label}
          {tab.props.closable && card && closable && <Icon type="android-close"
            onClick={(e) => this.close(e, index, name)} />}
        </div>)
      })
      return tabs
    }
    let renderChild = () => {
      return React.Children.map(children, (child, index) => {
        return child.type == TabPane ?
          React.cloneElement(child, Object.assign({}, child.props, { width: itemWidth, name: child.props.name || index })) : null
      })
    }
    let inkStyles = {}, tabs = this.refs.tabs
    if (tabs && tabs.children.length > 1 && !card) {
      inkStyles = {
        width: `${tabs.children[paneLeft + 1].offsetWidth}px`,
        left: `${tabs.children[paneLeft + 1].offsetLeft}px`
      }
    }
    return (<div className={this.classes()} ref="root">
      <div className="k-tabs-bar">
        {extra && <div className="k-tabs-extra">
          {extra}
        </div>}
        <div className={this.className(['k-tabs-nav-container', { ['k-tabs-nav-container-scroll']: scrollable }])}>
          <span className="k-tabs-tab-prev" onClick={this.scroll.bind(this, 'prev')}>
            <Icon type="ios-arrow-left" />
          </span>
          <span className="k-tabs-tab-next" onClick={this.scroll.bind(this, 'next')}>
            <Icon type="ios-arrow-right" />
          </span>
          <div className="k-tabs-nav-wrap">
            <div className="k-tabs-nav-scroll" ref="scroll" style={this.styles(this.scrollStyle())}>
              <div className="k-tabs-nav" ref="tabs">
                {!card && <div className="k-tabs-ink-bar" style={inkStyles}></div>}
                {renderTabs()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="k-tabs-content" style={this.styles(this.paneStyles())} ref="panes">
        {renderChild()}
      </div>
    </div>)
  }
}
Tabs.childContextTypes = {
  Tabs: PropTypes.any
}
Tabs.propTypes = {
  onClocse: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  card: PropTypes.bool,
  closable: PropTypes.bool,
  mini: PropTypes.bool,
  sample: PropTypes.bool,
  animated: PropTypes.bool,
  extra: PropTypes.any,
}