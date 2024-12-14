import Header from './Header';
import React from 'react';
import { setAuthUserData } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.getAuthUserData().then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);