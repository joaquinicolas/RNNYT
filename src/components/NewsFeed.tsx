import {ListView, ListViewDataSource, Modal, StyleSheet, View, ViewPropTypes} from "react-native";
import React, {useState} from "react";
import * as globalStyles from '../styles/global';
import PropTypes, {InferProps} from "prop-types";
import NewsItem from "./NewsItem";

const NewsFeed: any = (props: InferProps<typeof NewsFeed.propTypes>) => {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1.title != r2.title
    })
    const [state, setState] = useState({dataSource: ds, modalVisible: false});
    setState({
        dataSource: ds.cloneWithRows(props.news),
        modalVisible: false
    })
    return (
        <View style={globalStyles.COMMON_STYLES.pageContainer}>
            <ListView
                enableEmptySections
                dataSource={state.dataSource}
                renderRow={renderRow}
                style={props.listStyles}
            />
            {renderModal()}
        </View>
    );

    function renderRow(rowData: any, ...rest: any) {
        const index = parseInt(rest[1], 10);
        return (
            <NewsItem
                {...rowData}
                onPress={onModalOpen()}
                style={styles.newsItem}
                index={index}/>
        );
    }

    function renderModal() {
        return (
            <Modal
                visible={state.modalVisible}
            />
        );
    }

    function onModalOpen() {
        setState(Object.assign({}, state, {modalVisible: true}));
    }
}

const styles = StyleSheet.create({
    newsItem: {
        marginBottom: 20
    }
});
NewsFeed.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    listStyles: ViewPropTypes.style
};
NewsFeed.defaultProps = {
    news: [
        {
            title: 'React Native',
            imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
            description: 'Build native mobile apps using Javascript and React',
            date: new Date(),
            author: 'Facebook',
            location: 'Menlo Park, California',
            url: 'https://facebook.github.io/react-native'
        },
        {
            title: 'Packt Publishing',
            imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
            description: 'Build native mobile apps using Javascript and React',
            date: new Date(),
            author: 'Facebook',
            location: 'Menlo Park, California',
            url: 'https://facebook.github.io/react-native'
        },
    ]
};
export default NewsFeed;
