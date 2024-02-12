import React, { Component } from 'react'

const Categories = (props) => {
    return (
        <div>
            <button type="button" onClick={props.onClick} className="btn btn-outline-light d-flex justify-content-between px-5" style={{
                borderRadius: '20px',
                fontWeight: 'bold'
            }}>
                {props.category}
            </button>
        </div>

    )
}


export default Categories
