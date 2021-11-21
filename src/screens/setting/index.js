import React, { useContext } from 'react'
import { Switch, View } from 'react-native'
import { Button, Label } from '../../components'
import styles from './style'
import { darkMode, languageChange } from '../../redux/reducer/common/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import config from '../../../config';
import { useTheme } from '@react-navigation/native';
import { LanguageContext, ThemeContext } from '../../router';
import languages from '../../utils/lang/language';


const mapStateToProps = state => {
    return {
        common: state.common,
    };

};

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        darkMode, languageChange
    },
        dispatch,
    );

const Setting = (props) => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const { colors } = useTheme();
    const changeTheme = (value) => {
        setDarkMode(value); props.darkMode(value);
    }

    const changeLanguage = (value) => {
        if (value)
            setLanguage(languages.gujarati);
        else
            setLanguage(languages.english);
        props.languageChange(value);
    }

    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <View
            style={styles().container}
        >
            <View style={styles().switchContainer} >
                <Label large style={{ flex: 9 }} color={colors.text}>{language.darkMode}</Label>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={props.common.darkMode ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={changeTheme}
                    value={props.common.darkMode}
                />
            </View>
            <View style={styles().switchContainer} >
                <Label large style={{ flex: 9 }} color={colors.text}>{language.enableGujarati}</Label>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={props.common.darkMode ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={changeLanguage}
                    value={props.common.enableGujarati}
                />
            </View>
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
