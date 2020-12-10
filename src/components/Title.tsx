import AppText from "./AppText";
import PropTypes, {InferProps} from "prop-types";
import {StyleSheet, ViewPropTypes} from "react-native";
import * as globalStyles from '../styles/global';

const Title: any = ({style, children}: InferProps<typeof Title.propTypes>) => (
    <AppText style={[styles.title, style]}>
        {children}
    </AppText>
);

Title.propTypes = {
    style: ViewPropTypes.style,
    children: PropTypes.node,
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'HelveticaNeue-CondenseBold',
        fontSize: 18,
        color: globalStyles.HEADER_TEXT_COLOR,
        backgroundColor: `${globalStyles.BG_COLOR}99`
    }
});

export default Title;
