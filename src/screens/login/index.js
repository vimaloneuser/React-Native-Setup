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
    ScrollView,
} from 'react-native';
import CommonStyles from '../../utils/commonStyles';
import { loginUserAction } from '../../redux/reducer/login/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles'
import Navigation from '../../helper/rootNavigation'
import { Loading } from '../../../App';

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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            isSecurePaswword: true,
            toggleIcon: 'eye-closed',
            loading: false,
        };
    }

    static contextType = Loading

    login = () => {
        this.context.showLoader();
        this.props.loginUserAction({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }, () => {
            this.context.hideLoader();
        })
    }

    render() {
        return (
            <SafeAreaView style={CommonStyles.container}>
                <View style={styles.container}>
                    <ScrollView>
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

                            <TouchableOpacity
                                style={{ alignItems: "flex-end" }}
                                onPress={() => Navigation.navigate({ route: "SignUp" })}
                            >
                                <Label color={Color.PRIMARY}
                                    bolder large>
                                    Forgot password </Label>
                            </TouchableOpacity>

                            <Button
                                name="Login"
                                onPress={this.login}
                            />
                            <TouchableOpacity
                                style={CommonStyles.ls_container3}
                                onPress={() => Navigation.navigate({ route: "SignUp" })}
                            >
                                <Label color={Color.BLACK}
                                    large >
                                    I am a new user, {''} <Label color={Color.PRIMARY}
                                        bolder large>
                                        Sign Up </Label>
                                </Label>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
