import Header from './Header';
import React, { useEffect } from 'react';
import { getAuthUserData, logout } from '../../redux/auth-reducer';
import { connect } from 'react-redux';

const HeaderContainer = ({getAuthUserData, ...props}) => {
    useEffect(() => {
        getAuthUserData();
    }, [getAuthUserData])

    return <Header {...props} />
}

const mapStateToProps = ({auth}) => ({
    isAuth: auth.isAuth,
    login: auth.login,
});

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);