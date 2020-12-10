import {Image, StyleSheet, View, ViewPropTypes} from "react-native";
import PropTypes, {InferProps} from "prop-types";
import Title from "./Title";
import React from "react";

const Thumbnail: any = ({url, title, accentColor, style}: InferProps<typeof Thumbnail.propTypes>) => {
    // Add some transparency to the color.
    const imageStyle = {
        backgroundColor: `${accentColor}77`,
    };
    const TitleComponent = <Title style={styles.title}>{title} </Title>;
    return (
        <View style={[styles.container, {borderColor: accentColor}, style]}>
            {
                url ? (
                    <Image
                        style={styles.image}
                        source={{uri: url}}
                    >
                        {TitleComponent}
                    </Image>
                ) : (
                    <View style={[styles.image, imageStyle]}>
                        {TitleComponent}
                    </View>
                )
            }

        </View>);
};

Thumbnail.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    accentColor: PropTypes.string.isRequired,
    style: ViewPropTypes.style,
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderStyle: 'solid'
    },
    image: {
        height: 100,
        justifyContent: 'flex-end'
    },
    title: {
        padding: 5
    }
});

export default Thumbnail;
