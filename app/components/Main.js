import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Note from './Note';

class Main extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            noteArray: [],
            noteText: ''
        }
    }
    render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteNote(key)} />
        });
        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> ToDo's </Text>
                </View>
                <ScrollView style={styles.scrollcontainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder='Add Note'
                        placeholderTextColor='#ededed'
                        underlineColorAndroid='#ededed'>
                    </TextInput>
                </View>
                <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addbtn}>
                    <Text style={styles.btntext}> + </Text>
                </TouchableOpacity> 
            </View>
        );
    }
    addNote() {
        // alert(this.state.noteText);
        if (this.state.noteText) {
            var d = new Date();
            this.state.noteArray.push({
               'node':this.state.noteText, 'date': d.getFullYear() +
               "/" + (d.getMonth() + 1) +
               "/" + d.getDate()
            });
            this.setState({ noteArray:this.state.noteArray });
            this.setState({ noteText: '' });
        }
    }
            deleteNote(key){
                this.state.noteArray.splice(key,1);
                this.setState({noteArray:this.state.noteArray})
            }
}
export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: "center",
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollcontainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textinput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 25,
        backgroundColor: '#252525',
        borderTopWidth: 1,
        borderTopColor: '#ededed'
    },
    addbtn: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 100,
        backgroundColor: "#E91E63",
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    btntext: {
        color: '#fff',
        fontSize: 20
    }
}); 