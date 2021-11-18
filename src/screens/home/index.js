import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Label } from '../../components'
import styles from './style'
import { logOutAction } from '../../redux/reducer/common/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import config from '../../../config';

const mapStateToProps = state => {
    return {
        login: state.login,
        register: state.register,
    };

};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        logOutAction
    },
        dispatch,
    );

export class Home extends Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <Label xxxlarge >
                    {config.APP_KEY}
                </Label>
                <Button
                    name="Log Out"
                    onPress={this.props.logOutAction}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
