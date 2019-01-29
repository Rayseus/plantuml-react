import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import axios from 'axios';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    key: 'a',
                    value: 'Tata',
                },
                {
                    key: 'b',
                    value: 'Bob',
                },
                {
                    key: 'c',
                    value: 'Chuanchuan',
                },
                {
                    key: 'd',
                    value: 'Dea',
                },
                {
                    key: 'e',
                    value: 'Eva',
                },
            ]
        };
    }

    fetchData() {
        try {
            return axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then(res => {
                    const contents = res.data.slice(0, 5);
                    this.setState({ data: contents })
                    console.log(contents)
                });
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    render() {
        return (
            <ReactSearchBox
                placeholder="Search"
                value="Doe"
                data={this.state.data}
                callback={record => console.log("record: ", record)}
            />
        )
    }
}