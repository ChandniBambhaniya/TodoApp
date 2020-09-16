import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

class Main extends React.Component{
    render(){
    return (
        <View key={this.props.keyval} style={styles.note} >
            <Text style={styles.noteText} >{this.props.val.node}</Text>
            <Text style={styles.noteText} >{this.props.val.date}</Text>
            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.notedlt} >
                <Text style={styles.noteltText}>D</Text>
            </TouchableOpacity>

        </View>
    );
}}
export default Main;

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63'
    },
    notedlt: {
        position: 'absolute',
        //   justifyContent: 'content',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding:10,
        top:10,
        bottom:10,
        right:10
    },
    noteltText:{
        color:'white'
    }
}); 