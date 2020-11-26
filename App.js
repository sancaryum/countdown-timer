import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';



const App = () => {
  const [count, setCount] = useState(50);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Count: {count}</Text>
      
      <Button
        title="Start"
        onPress={() => {
          console.log("Pressed to start")
          //count değerini her saniye 1 azaltacak(setCount ile) metod buraya gelecek
         // setInterval(console.log("say"), 1000);

        }}></Button>

      <Button
        title="Reset"
        onPress={() => {
          console.log("Pressed to reset")
          //count değerini setCount ile başlangıç değerine çevirecek metod
        }}
      ></Button>
    </View>
  );


};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 300,
    marginLeft: 65,
  },
  textStyle: {
    color: 'black',
  },

});

export default App;