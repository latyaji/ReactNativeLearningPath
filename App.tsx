import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


const App = () => {
  const [showdata, setShowdata] = useState(false)
  return (
    <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setShowdata(!showdata)} >
        <Text style={styles.btnTxt}>Show/Hide Component</Text>
      </TouchableOpacity>
      {showdata ? <StudentData /> : null}
    </View>
  )
}

const StudentData = () => {

 let timer =  setInterval(()=>{
    console.warn("timer call")
  },2000)

  useEffect(() => {
    return ()=>{
      clearInterval(timer)
    }
  })
  return (
    <View>
      <Text style={styles.studentTxt}>StudentData screen</Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "green",
    padding: 8,
    margin: 5
  },
  btnTxt: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center"
  },
  studentTxt:{
    fontSize: 40,
    color: "red",
  }
})




