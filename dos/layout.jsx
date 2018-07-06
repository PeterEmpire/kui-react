import React from 'react'
import { Kui, PropTypes } from '../src/components/kui'
import logo from './assets/kui-react.png'
import nav from './code/menuData'
import { Row, Col, Menu, Badge, Scroll, Icon } from '../src'
export default class Layout extends Kui {

  constructor(props) {
    super(props)
    this.state = {
      activeName: '',
      isShowNav: false
    }
  }
  navStyles() {
    return this.state.isShowNav ? { left: 0 } : {}
  }
  componentWillMount() {
    this.setState({ activeName: this.context.router.route.location.pathname })
  }
  showNav() {
    let { isShowNav } = this.state
    this.setState({ isShowNav: !isShowNav })
  }
  routerChange(path) {
    this.showNav()
    if (path.indexOf('http') >= 0) {
      window.open(path)
    } else {
      this.context.router.history.push(path)
    }
    this.setState({ activeName: path })

  }
  render() {
    let renderItem = (data) => {
      return data.map((child, y) => {
        return (<Menu.Item icon={child.icon} name={child.link || child.weblink} key={y}>
          {child.link === '/log' && <Badge dot>{child.title}</Badge>}
          {child.link !== '/log' && child.title}
          {child.sub && <span className="sub">{child.sub}</span>}
        </Menu.Item>)
      })
    }
    let renderGroup = (child, x) => {
      return <Menu.Group title={child.title} name={child.title} key={x}>{renderItem(child.child)}</Menu.Group>
    }

    let renderLeftMenu = () => {
      return nav.map((child, x) => renderGroup(child, x))
    }
    return (
      <section className="body">
        <header>
          <a href="/"><img src={logo} />KUI</a>
          <Menu style={{ float: 'right' }} mode="horizontal" activeName="/install" onSelect={(path) => this.routerChange(path)}>
            <Menu.Item name="/" icon="home">首页</Menu.Item>
            <Menu.Item name="/start" icon="ios-settings-strong">组件</Menu.Item>
            <Menu.Item name="https://github.com/chuchur/kui-react/issues" icon="ios-help">提问</Menu.Item>
            <Menu.Item name="https://www.chuchur.com" icon="ios-person">Blog</Menu.Item>
          </Menu>
        </header>
        <section className="main">
          <Row>
            <Col span="4" style={this.styles(this.navStyles())} className="colNav">
              <Scroll>
                <nav className="nav">
                  <Menu onSelect={this.routerChange.bind(this)} activeName={this.state.activeName} width="auto">
                    {renderLeftMenu()}
                  </Menu>
                </nav>
              </Scroll>
            </Col>
            <Col span="20" className="colMain">
              <Scroll target="window">
                <div className="content">
                  {this.props.children}
                </div>
              </Scroll>
            </Col>
          </Row>
          <div className="drawer-button" onClick={this.showNav.bind(this)}>
            <Icon type="android-menu" />
          </div>
        </section>
        {/* <footer>
                <p>Copyright ©2009-2018
            <a href="http://www.chuchur.com">禅境花园</a> by chuchur 粤ICP备17111365号 </p>
            </footer> */}
      </section >
    )
  }
}
Layout.contextTypes = {
  router: PropTypes.object.isRequired
}