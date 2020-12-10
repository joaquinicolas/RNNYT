import React from 'react';
import {Text} from "react-native";
import PropTypes, { InferProps } from "prop-types";
import * as globalStyles from "../styles/global";


const AppText: any = ({ children, style, ...rest }: InferProps<typeof AppText.propTypes>) => (
  <Text style={[globalStyles.COMMON_STYLES.text, style]} {...rest}>
    {children}
  </Text>
);

AppText.propTypes = {
  style: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default AppText;
