import React from 'react'
import {View,Text} from 'react-native'

class ClassChildcomponent extends React.Component{
    render(){
        console.log(this.props.name)
        return(
            <View>
                <Text>Child componet</Text>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}
export default ClassChildcomponent