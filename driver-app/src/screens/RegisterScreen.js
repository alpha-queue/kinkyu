import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Text, ActivityIndicator, ImageBackground} from 'react-native'

import axios from 'axios'
import { connect } from 'react-redux';
import {Actions, ActionConst} from  'react-native-router-flux'
import {Notifications} from 'expo'

class RegisterScreen extends React.Component {

    state= {
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        pushToken: '',
        loading: false

    }

    register=(name, email, phone, vehicle, pushToken)=> {
        this.setState({loading: true})
        console.log(name, email, phone, vehicle, typeof(pushToken))
        axios.post('https://kinkyu.herokuapp.com/kinkyu/api/v1/driver/register', {
            name: name.toString(),
            email: email.toString(),
            phone: phone.toString(),
            vehicle: vehicle.toString(),
            pushToken: pushToken.toString()
          },{
              headers: {
                'Content-Type': 'application/json'
              }
          })
          .then( (response)=> {
            this.setState({loading: false})
            console.log(response);
          })
          .catch( (error)=> {
            this.setState({loading: false})
            console.log(error);
          });
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={require('../assets/img/bg.jpg')}>
                <View style={styles.subView}>
                <TextInput
                    style={styles.input}
                    onChangeText={(name) => this.setState({name})}
                    value={this.state.name}
                    placeholder='Name'
                    />
                <TextInput
                    style={styles.input}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder='Email'
                    />
                <TextInput
                    style={styles.input}
                    onChangeText={(phone) => this.setState({phone})}
                    value={this.state.phone}
                    placeholder='Phone No.'
                    />
                <TextInput
                    style={styles.input}
                    onChangeText={(vehicle) => this.setState({vehicle})}
                    value={this.state.vehicle}
                    placeholder='Vehical No.'
                    />
                    <TouchableOpacity 
                    onPress={
                    //     ()=>{
                    //     const {name, email, phone, vehicle} = this.state
                    //     const {token} = this.props
                    //     this.register(name, email, phone, vehicle, token)
                    // }
                    ()=>Actions.homeScreen({type: ActionConst.RESET})
                }
                    style={styles.button}
                    >
                       {this.state.loading?<ActivityIndicator color="white"/>:<Text style={styles.text}>Submit</Text>}
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    subView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%'
    },
    input: {
        width: '100%',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 4,
        backgroundColor: 'white',
        opacity: 0.5
    },
    button: {
        padding: 40,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 5,
        backgroundColor: '#4bb543'
    },
    text: {
        color: 'white'
    },
})

const mapStateToProps = state => {
    return {
        token: state.notify.token
    }
}

export default connect(mapStateToProps)(RegisterScreen)