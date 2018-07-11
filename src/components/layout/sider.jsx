import { Kui, PropTypes } from '../kui'
import React from 'react'
export default class Sider extends Kui {
    render() {
        return (<div className={this.className(['k-layout-sider'])}>{this.props.children}</div>)
    }
}