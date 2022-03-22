import axios from 'axios';
import React, { Component } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { View,Text,ScrollView,StyleSheet } from 'react-native-web';
export default class api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            this.setState({
                users: response.data
            })
        });
    }
    renderItem = ({ item }) => {
        return (
            <View style={styles.userItem}>
                <Text style={styles.userText}>{item.name}</Text>
            </View>
        );
    }
render() {
    return (
        <View style={{ flex: 1 }} >
            <ScrollView>
                <FlatList data={this.state.users} renderItem={this.renderItem} keyExtractor={(item) => item.id} />
            </ScrollView>
        </View>
    );
}
}
const styles = StyleSheet.create({
    userItem: {
        flex:1,
        width: '90%',
        flexDirection:'row',
        height: 60,
        borderColor: '#2EB086',
        borderWidth: 2,
        margin: 10,
        padding: 10,
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: '#EEE6CE',
    },
    userText: {
        color: '#313552',
        fontFamily: 'Poppin',
        fontSize:18
    }
})