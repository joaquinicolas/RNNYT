import {StyleSheet, TouchableOpacity, View, ViewPropTypes} from "react-native";
import Thumbnail from "./thumbnail";
import Byline from "./Byline";
import AppText from "./AppText";
import * as globalStyles from '../styles/global';
import PropTypes, {InferProps} from "prop-types";

const NewsItem: any = (props: InferProps<typeof NewsItem.propTypes>) => {
    const {
        style,
        imageUrl,
        title,
        author,
        date,
        location,
        description,
        onPress
    } = props;
    const accentColor = globalStyles.ACCENT_COLORS[
    props.index % globalStyles.ACCENT_COLORS.length
        ];

    function openContextMenu() {
        console.log('opening context menu');
    }

    return (
        <TouchableOpacity
            hitSlop={{
                top: 10,
                left: 5,
                right: 5,
                bottom: 10
            }}
            onPressIn={() => console.log('Press started')}
            onPressOut={() => console.log('Press ending')}
            onPress={onPress}
            onLongPress={openContextMenu}
            style={style}>
            <View>
                <Thumbnail
                    title={title}
                    style={styles.thumbnail}
                    url={imageUrl}
                    accentColor={accentColor}/>
                <View>
                    <Byline
                        date={date}
                        location={location}
                        author={author}/>
                    <AppText>
                        {description}
                    </AppText>
                </View>
            </View>
        </TouchableOpacity>
    );
}

NewsItem.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.instanceOf(Date).isRequired,
    author: PropTypes.string.isRequired,
    location: PropTypes.string,
    index: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    style: ViewPropTypes.style
};

const styles = StyleSheet.create({
    thumbnail: {
        marginBottom: 5
    },
    content: {
        paddingHorizontal: 5
    }
});

export default NewsItem;
