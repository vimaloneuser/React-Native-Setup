import React, { useContext } from 'react'
import { View } from 'react-native'
import { Button, Label } from '../../components'
import styles from './style'
import { logOutAction } from '../../redux/reducer/common/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import config from '../../../config';
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
        logOutAction
    },
        dispatch,
    );

const Home = (props) => {
    const { language } = useContext(LanguageContext);
    return (
        <View
            style={styles().container}
        >
            <Button
                name={language.logout}
                onPress={() => props.logOutAction()}
            />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
