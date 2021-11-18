import React, { Component } from 'react';
import { Color } from '../../utils/color';
import {
    Label,
    InputText,
    Button
} from '../../components';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import CommonStyles from '../../utils/commonStyles';
import { loginUserAction } from '../../redux/reducer/login/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles'
import Navigation from '../../helper/rootNavigation'
import Routes from '../../router/routes';

const mapStateToProps = state => {
    return {
        login: state.login,
        register: state.register,
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        loginUserAction
    },
        dispatch,
    );

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            email: '',
            password: '',
            userError: '',
            emailError: '',
            passwordError: '',
            isSecurePaswword: true,
            toggleIcon: 'eye-closed',
            loading: false,
            userInfo: ''
        };
    }

    render() {
        return (
            <SafeAreaView style={CommonStyles.container}>
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
                        enabled={Platform.OS === 'ios' ? true : false} >

                        <View style={CommonStyles.ls_container}>
                            <View style={CommonStyles.border}>
                                <Label xxxxlarge align="center"
                                    bolder color={Color.BLACK}
                                >
                                    Welcome,
                                </Label>
                                <Label xxxlarge align="center"
                                    color={Color.DARK_GRAY}>
                                    Sign in to continue!
                                </Label>
                            </View>
                        </View>

                        <View
                            style={CommonStyles.ls_container2}
                        >

                            <InputText placeholder="Name"
                                iconname="supervised-user-circle"
                                onChangeText={text => this.setState({ user: text })}
                                value={this.state.user} />
                            <Label color={Color.ERROR} align="right" normal>
                                {this.state.userError}
                            </Label>

                            <InputText placeholder="Email"
                                iconname="email"
                                onChangeText={text => this.setState({ email: text })}
                                value={this.state.email} />
                            <Label color={Color.ERROR} align="right" normal>
                                {this.state.emailError}
                            </Label>

                            <InputText placeholder="Password"
                                iconname="lock"
                                eyeColor={Color.PRIMARY_DARK}
                                onChangeText={text => this.setState({ password: text })}
                                secureTextEntry={this.state.isSecurePaswword}
                                CloseIconName={this.state.toggleIcon}
                                onPress={this.handleToggle} />
                            <Label color={Color.ERROR} align="right" normal>
                                {this.state.passwordError}
                            </Label>

                            <Button
                                name="Sign up"
                            />

                            <TouchableOpacity
                                style={CommonStyles.ls_container3}
                                onPress={() => Navigation.navigate({ route: Routes.Login })}
                            >
                                <Label color={Color.BLACK}
                                    large >
                                    Already an user, {''} <Label color={Color.PRIMARY}
                                        bolder large>
                                        Login </Label>
                                </Label>
                            </TouchableOpacity>

                        </View>

                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
