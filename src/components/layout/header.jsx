import { Kui, PropTypes } from '../kui'
import React from 'react'
export default class Header extends Kui {
    render() {
        return (<div className={this.className(['k-layout-header'])}>{this.props.children}</div>)
    }
}
