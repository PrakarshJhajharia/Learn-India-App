/*import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  } from 'react-native';
import MyHeader from '../components/MyHeader'



export default class ElearningScreen extends Component{
  


  


  render(){
    return(
      <View style={styles.container} >
        <MyHeader title="E-Learning" navigation={this.props.navigation}/>
        <View style={styles.formContainer}>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Class (Only Number)"}
              
      
              
              
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Subject"}
              
              
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Topic"}
            
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Fomat"}
              
            />
            
              
              
             <TouchableOpacity style={styles.button}
              onPress={()=>{
                
             
                
              }}>
              <Text style={styles.buttonText}>Go to website</Text>
            </TouchableOpacity>
          
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex:1,
   
  },
  formContainer:{
    flex:1,
    width:'100%',
    alignItems: 'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"150%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
  },
  buttonText:{
    fontSize:25,
    textDecoration:none,
    fontWeight:"bold",
    color:"#fff"
  }
})
*/
/*
<a href="https://drive.google.com/file/d/1wzG7wdn4VrQ9jyhp8bKI-mCeUqztR-CQ/view?usp=sharing">
*/

/*
import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert} from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'
*/
import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  } from 'react-native';
import MyHeader from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase'

export default class ElearningScreen extends Component{

  render(){
    return(
      <View style={styles.container} >
        <MyHeader title="E-Learning" navigation={this.props.navigation}/>
        <View style={styles.formContainer}>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Class (Only Number)"}
              
      
              
              
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Subject"}
              
              
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Topic"}
            
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Fomat"}
              
            />
            <a href="https://drive.google.com/file/d/1wzG7wdn4VrQ9jyhp8bKI-mCeUqztR-CQ/view?usp=sharing">
            <TouchableOpacity style={styles.button}
              onPress={()=>{}}>
              <Text style={styles.buttonText}>Go to website</Text>
            </TouchableOpacity>
            </a>
          </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex:1
  },
  formContainer:{
    flex:1,
    width:'100%',
    alignItems: 'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"150%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
  },
  buttonText:{
    fontSize:25,
    fontWeight:"bold",
    color:"#fff"
  }
})
