import React, { Component } from 'react';
import IndexItem from './IndexItem';
import qs from "qs";
import axios from "axios/index";


class Index extends Component {
    constructor (props) {

        super(props);
        this.state = {
            vegetableType: [],
            vegetableValue: [],
            oilType: [],
            oilValue: [],
            fruitType: [],
            fruitValue: [],
            meatType: [],
            meatValue:[],
            aquaticType: [],
            aquaticValue: []
        }
    }

    componentDidMount = () => {
        var vegetable_Type = [];
        var vegetable_Value = [];
        axios.post('http://192.168.1.87:8080/data_mining/product/vegetable-kg', qs.stringify({})).then((res) => {
            for (let i = 0; i < res.data.data.length; i++) {
                vegetable_Type.push(res.data.data[i].type);
                vegetable_Value.push(res.data.data[i].totalKG);
            }
            this.setState({
                vegetableType: vegetable_Type,
                vegetableValue: vegetable_Value
            })
        })

        var oil_Type = [];
        var oil_Value = [];
        axios.post('http://192.168.1.87:8080/data_mining/product/oil-kg', qs.stringify({})).then((res) => {
            for (let i = 0; i < res.data.data.length; i++) {
                oil_Type.push(res.data.data[i].type);
                oil_Value.push(res.data.data[i].totalKG);
            }
            this.setState({
                oilType: oil_Type,
                oilType: oil_Value
            })
        })

        var fruit_Type = [];
        var fruit_Value = [];
        axios.post('http://192.168.1.87:8080/data_mining/product/fruit-kg', qs.stringify({})).then((res) => {
            for (let i = 0; i < res.data.data.length; i++) {
                fruit_Type.push(res.data.data[i].type);
                fruit_Value.push(res.data.data[i].totalKG);
            }
            this.setState({
                fruitType: fruit_Type,
                fruitValue: fruit_Value
            })
        })

        var meat_Type = [];
        var meat_Value = [];
        axios.post('http://192.168.1.87:8080/data_mining/product/meat-kg', qs.stringify({})).then((res) => {
            for (let i = 0; i < res.data.data.length; i++) {
                meat_Type.push(res.data.data[i].type);
                meat_Value.push(res.data.data[i].totalKG);
            }
            this.setState({
                meatType: meat_Type,
                meatValue: meat_Value
            })
        })

        var aquatic_Type = [];
        var aquatic_Value = [];
        axios.post('http://192.168.1.87:8080/data_mining/product/aquatic-kg', qs.stringify({})).then((res) => {
            for (let i = 0; i < res.data.data.length; i++) {
                aquatic_Type.push(res.data.data[i].type);
                aquatic_Value.push(res.data.data[i].totalKG);
            }
            this.setState({
                aquaticType: aquatic_Type,
                aquaticValue: aquatic_Value
            })
        })
    }


    render() {
        return (
            <IndexItem vegetableType={this.state.vegetableType}  vegetableValue={this.state.vegetableValue} oilType={this.state.oilType} oilValue={this.state.oilValue} fruitType={this.state.fruitType} fruitValue={this.state.fruitValue}
            meatType={this.state.meatType} meatValue={this.state.meatValue} aquaticType={this.state.aquaticType} aquaticValue={this.state.aquaticValue}/>
        );
    }
}

export default Index;
