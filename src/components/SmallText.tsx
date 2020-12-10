import AppText from "./AppText";
import React from 'react';
import {
    StyleSheet,
    Text, TextPropTypes
} from "react-native";
import PropTypes, {InferProps} from "prop-types";


const SmallText: any = ({children, style, ...rest}: InferProps<typeof SmallText.propTypes>) => (
    <AppText style={[styles.small, style]} {...rest}>
        {children}
    </AppText>
);

SmallText.propTypes = {
    children: PropTypes.node,
    style: TextPropTypes.style
};

const styles = StyleSheet.create({
    small: {
        fontSize: 11
    }
});

export default SmallText;
