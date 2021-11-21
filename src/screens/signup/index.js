import React, { useState, useContext } from 'react';
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
import Routes from '../../router/routes';
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

const SignUp = (props) => {
    const { colors } = useTheme();
    const { language } = useContext(LanguageContext);
    const [form, setForm] = useState({ email: null, password: null, name: null });
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    return (
        <SafeAreaView style={CommonStyles().container}>
            <View style={styles().container}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 40}
                        enabled={Platform.OS === 'ios' ? true : false} >

                        <View style={CommonStyles().ls_container}>
                            <View style={CommonStyles().border}>
                                <Label xxxxlarge align="center"
                                    bolder color={colors.text}
                                >
                                    {language.welcome},
                                </Label>
                                <Label xxxlarge align="center"
                                    color={Color.DARK_GRAY}>
                                    {language.signUptoContinue}!
                                </Label>
                            </View>
                        </View>

                        <View
                            style={CommonStyles().ls_container2}
                        >

                            <InputText
                                type="text"
                                placeholder={language.name}
                                iconname="supervised-user-circle"
                                onChangeText={name => setForm({ ...form, name })}
                                value={form.name}
                            />

                            <InputText
                                type="email"
                                placeholder={language.email}
                                iconname="email"
                                onChangeText={email => setForm({ ...form, email })}
                                value={form.email}
                            />

                            <InputText
                                placeholder={language.password}
                                iconname="lock"
                                type="password"
                                eyeColor={Color.PRIMARY_DARK}
                                onChangeText={password => setForm({ ...form, password })}
                                secureTextEntry={secureTextEntry}
                                onPress={() => setSecureTextEntry(!secureTextEntry)}
                            />

                            <Button
                                name={language.signup}
                            />

                            <TouchableOpacity
                                style={CommonStyles().ls_container3}
                                onPress={() => Navigation.navigate({ route: Routes.Login })}
                            >
                                <Label color={colors.text}
                                    large >
                                    {language.alreadyLogin} ?, {''} <Label color={Color.PRIMARY}
                                        bolder large>
                                        {language.login} </Label>
                                </Label>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
