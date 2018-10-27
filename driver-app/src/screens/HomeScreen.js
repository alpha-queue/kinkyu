import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import {Metrics} from '../themes'
import {getStatusBarHeight} from 'react-native-status-bar-height'

export default class HomeScreen extends React.Component {

    state= {
        online: true
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                onPress={()=>this.setState({online: !this.state.online})}
                style={this.state.online?styles.onLineButton:styles.offlineButton}
                >
                    <Text style={styles.text}>{this.state.online?'ONLINE':'OFFLINE'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const button ={
    padding: 40,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 5
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    offlineButton: {
        ...button,
        backgroundColor: '#e74c3c'
    },
    onLineButton: {
        ...button,
        backgroundColor: '#4bb543'
    },

    text: {
        color: 'white'
    }
})