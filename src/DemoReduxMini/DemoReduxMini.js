import React, { Component } from 'react'
import { connect } from 'react-redux'
import { giamSoLuoung, tangSoLuong } from '../redux/action/DemoActionCreator'
import { TANG_SO_LUONG } from '../redux/constants/DemoConstant'

class DemoReduxMini extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>DemoReduxMini</h1>
                <button className='btn btn-danger'
                    onClick={this.props.handleIncreaseNumber}
                >-</button>
                <strong className='mx-5'>{this.props.number}</strong>
                <button className='btn btn-success'
                    onClick={this.props.handleAddNumber}
                >+</button>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        number: state.demoReducer.number
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleAddNumber: () => {
            dispatch(tangSoLuong())
        },
        handleIncreaseNumber: () => {
            {
                dispatch(giamSoLuoung())
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoReduxMini)