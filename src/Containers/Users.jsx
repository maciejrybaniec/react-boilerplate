import autobind from 'autobind-decorator';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { addUser } from 'Actions';

const mapQueriesToProps = gql`
  query getUsers {
    users { id, name }
  }
`;

const UserItem = (props) => {
    return (
        <li className="UserItem">
            {props.children}
        </li>
    );
}

@graphql(mapQueriesToProps)
class UsersContainer extends Component {
    render() {
        return (
            <div className="UsersContainer">
                { (this.props.data.loading ? (
                    <div>Loading</div>
                ):
                    <ul className="UsersContainer__list">
                        {this.props.data.users.map((user) => {
                            return (
                                <UserItem key={user.id}>{user.name}</UserItem>
                            );
                        })}
                    </ul>
                )}
                <div className="UsersContainer__form">
                    <input type="text" ref={(c) => this._input = c} />
                    <button type="button" onClick={this._onClick}>
                        Add user
                    </button>
                </div>
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
