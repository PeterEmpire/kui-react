import React from 'react'
export default class Breadcrumb extends React.Component {
    render() {
        return (
            <div className="k-breadcrumb">
                {this.props.children}
            </div>
        )
    }
}