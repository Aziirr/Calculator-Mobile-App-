import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            innerText: ''
        };
    }

    clicky = event => {
        if (this.props.name === "C")
            this.props.clear()
        else if (this.props.name === "=")
            this.props.calculate()
        else
            this.props.setInnerText(this.props.name)
    }

    render() {
        return (
            <TouchableOpacity style={{width: this.props.width, height: this.props.height, flex: 0}}
                              onPress={this.clicky}>
                <Text style={{textAlign: "center", fontSize: 30, lineHeight: 150}}>{this.props.name} </Text>
            </TouchableOpacity>
        );
    }
}

export default Item;
