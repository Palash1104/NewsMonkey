import React, { Component } from 'react'

export default class Categories extends Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.onClick} className="btn btn-outline-light d-flex justify-content-between px-5" style={{
                    borderRadius: '20px',
                    fontWeight: 'bold'
                }}>
                    {this.props.category}
                </button>
            </div>

        )
    }
}
