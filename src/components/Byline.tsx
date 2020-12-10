import {StyleSheet, View} from "react-native";
import React from "react";
import PropTypes, {InferProps} from "prop-types";
import SmallText from "./SmallText";
import * as globalStyles from "../styles/global";

const Byline: any = ({date, author, location}: InferProps<typeof Byline.propTypes>) => (
    <View>
        <View style={styles.row}>
            <SmallText>
                {date.toLocaleString()}
            </SmallText>
            <SmallText>
                {author}
            </SmallText>
        </View>
        {location ? <View>
            <SmallText style={styles.location}>
                {location}
            </SmallText>
        </View> : null}
    </View>
);

Byline.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    author: PropTypes.string.isRequired,
    location: PropTypes.string
}

const styles = StyleSheet.create({
    location: {
        color: globalStyles.MUTED_COLOR
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5
    }
});

export default Byline;
