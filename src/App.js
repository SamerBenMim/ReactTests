import './App.css';
import React, { Component } from 'react'
import SearchBox from './components/search-box/search-box';
import CardList from './components/card-list/card-list';
export default class App extends Component {
  constructor() {
    super()
  
    this.state = {
       monsters:[
         {name:'FRANKENSTEIN',
         id:"a1"
        },
         {name:'dRACULA',
         id:"a2 "},
         {name:'zOMBIE',
         id:"a3"},
       ],
       searchField:'',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>this.setState({monsters:user}))
  }
  
  render() {
    const{monsters , searchField } = this.state;
    const filtredMonsters = monsters.filter(monster =>  monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className ="App">
        <h1> Monsters</h1>
        <SearchBox
        placeholder="search"
        handleChange={ e => this.setState({searchField:e.target.value},()=>{console.log(this.state)}) }
        />
        <CardList monsters={filtredMonsters} >
        </CardList>
        <SearchBox
        placeholder="search"
        handleChange={ e => this.setState({searchField:e.target.value},()=>{console.log(this.state)}) }
        />
      </div>
    )
  }
}


