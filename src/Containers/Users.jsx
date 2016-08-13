import autobind from 'autobind-decorator';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { addUser } from 'Actions';

const mapStateToProps = (state) => {
    return {
        users: state.users.availableUsers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: bindActionCreators(addUser, dispatch)
    };
};

const UserItem = (props) => {
    return (
        <li className="UserItem">
            {props.children}
        </li>
    );
}

@connect(mapStateToProps, mapDispatchToProps)
class UsersContainer extends Component {
    render() {
        const { users } = this.props;
        return (
            <div className="UsersContainer">
                {users.map((user) => {
                    return (
                        <UserItem key={user}>{user}</UserItem>
                    );
                })}
                <input type="text" ref={(c) => this._input = c} />
                <button type="button" onClick={this._onClick}>
                    Add user
                </button>
            </div>
        );
    }
    @autobind
    _onClick() {
        this.props.addUser(this._input.value);
        this._input.value = '';
    }
}

export default UsersContainer;
