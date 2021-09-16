import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Item from './Item'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "="]
        this.operators = ["C", "/", "*", "-", "+"]
        this.state = {innerText: '', calculated: ''};
    }

    setInnerText = element => {
        let currentText = this.state.innerText
        currentText += element
        this.setState({innerText: currentText})
    }

    calculate = event => {
        try {
            let calculated = eval(this.state.innerText)
            this.setState({calculated: calculated})
        } catch (err) {
            alert(err)
        }
    }

    clearLastCharacterFromInnerText = event => {
        let currentText = this.state.innerText
        currentText = currentText.slice(0, -1)
        this.setState({innerText: currentText, calculated: ''})
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}><Text
                    style={{
                        fontSize: 60,
                        lineHeight: 240,
                        textAlign: 'right',
                        marginRight: 10
                    }}>{this.state.innerText}</Text>
                    <Text
                        style={{
                            fontSize: 50,
                            textAlign: 'right',
                            marginRight: 10,
                            top: -20
                        }}>{this.state.calculated}</Text></View>
                <View style={{flex: 2, flexDirection: "row"}}>
                    <View style={styles.leftSide}>
                        {this.numbers.map(element => {
                            let percent = 100 / 3
                            return <Item name={element} width={percent + "%"} height="25%" calculate={this.calculate}
                                         setInnerText={this.setInnerText}
                                         clear={this.clearLastCharacterFromInnerText}/>
                        })}
                    </View>
                    <View style={styles.rightSide}>
                        {this.operators.map(element => {
                            return <Item name={element} width="100%" height="20%" calculate={this.calculate}
                                         setInnerText={this.setInnerText}
                                         clear={this.clearLastCharacterFromInnerText}/>
                        })}
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    leftSide: {
        flex: 3,
        backgroundColor: '#aaffff',
        flexWrap: "wrap",
        flexDirection: "row",

    },
    rightSide: {
        flex: 1,
        backgroundColor: '#aabbff',
        flexWrap: "wrap",
        alignContent: "center"
    },

});

