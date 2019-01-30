import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import axios from 'axios';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                // {
                //     key: 'a',
                //     value: 'Tata',
                // },
                // {
                //     key: 'b',
                //     value: 'Bob',
                // },
                // {
                //     key: 'c',
                //     value: 'Chuanchuan',
                // },
                // {
                //     key: 'd',
                //     value: 'Dea',
                // },
                // {
                //     key: 'e',
                //     value: 'Eva',
                // },
            ]
        };
    }
    handleInput = (value) => {
        this.fetchData(value)
        console.log('value: ', value)
    }
    fetchData(key) {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts?id=` + key;
            console.log('url: ', url)
            return axios.get(url)
                .then(res => {
                    // const contents = res.data.slice(0, 5);
                    this.setState({ data: res.data })
                    console.log(res.data)
                });
        } catch (e) {
            console.log(e);
        }
    }

    componentWillMount() {

    }

    render() {
        // console.log('value: ', this.state.values);
        return (
            <div>
                <ReactSearchBox
                    placeholder="Search"
                    onChange={input => { this.handleInput(input) }}
                    data={this.state.data}
                />
                {this.state.data.map(datas => <div key={datas.id}>
                    {/* <li >{datas.id}</li> */}
                    <a href="http://google.com"><div>{datas.title}</div></a>
                </div>
                )}
            </div>

        )
    }
}