import React, { useState, useContext } from 'react';
import { Color } from '../../utils/color';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { loginUserAction } from '../../redux/reducer/login/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from '../../helper/rootNavigation'
import { Loading } from '../../../App';
import styles from './styles'
import commonStyle from '../../utils/commonStyles'
import { Button, InputText, Label } from '../../components';
import { useTheme } from '@react-navigation/native';
import { LanguageContext } from '../../router';

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

const Login = (props) => {
    const { setLoading } = useContext(Loading);
    const [form, setForm] = useState({ email: null, password: null });
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const { colors } = useTheme();
    const { language } = useContext(LanguageContext);

    const login = () => {
        props.loginUserAction({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }, setLoading)
    }

    return (
        <SafeAreaView style={commonStyle().container}>
            <View style={styles().container}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
                        enabled={Platform.OS === 'ios' ? true : false} >
                        <View style={commonStyle().ls_container}>
                            <View style={commonStyle().border}>
                                <Label xxxxlarge align="center"
                                    bolder color={colors.text}
                                >
                                    {language.welcome},
                                </Label>
                                <Label xxxlarge align="center"
                                    color={Color.DARK_GRAY}>
                                    {language.signIntoContinue}!
                                </Label>
                            </View>
                        </View>

                        <View
                            style={commonStyle().ls_container2}
                        >
                            <InputText
                                type="email"
                                placeholder={language.email}
                                iconname="email"
                                onChangeText={email => setForm({ ...form, email })}
                                value={form.email}
                            // error="Email is not valid"
                            />

                            <InputText
                                placeholder={language.password}
                                type="password"
                                iconname="lock"
                                eyeColor={Color.PRIMARY_DARK}
                                onChangeText={password => setForm({ ...form, password })}
                                secureTextEntry={secureTextEntry}
                                onPress={() => setSecureTextEntry(!secureTextEntry)}
                            />
                            <TouchableOpacity
                                style={{ alignItems: "flex-end" }}
                                onPress={() => Navigation.navigate({ route: "SignUp" })}
                            >
                                <Label color={Color.PRIMARY}
                                    bolder large>
                                    {language.forgotPassword} </Label>
                            </TouchableOpacity>

                            <Button
                                name={language.login}
                                onPress={login}
                            />
                            <TouchableOpacity
                                style={commonStyle().ls_container3}
                                onPress={() => Navigation.navigate({ route: "SignUp" })}
                            >
                                <Label color={colors.text}
                                    large >
                                    {language.newUser} ?, {''} <Label color={Color.PRIMARY}
                                        bolder large>
                                        {language.signup} </Label>
                                </Label>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);