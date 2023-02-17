// method 3: redux
import './App.css';
import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
import {connect} from 'react-redux';
import {setSearchField, requestRobots} from '../actions';         //connect actions


const mapStatetoProps = (state) =>{
  return {
    searchField : state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending

   }
}

const mapDispatchtoProps = (dispatch)=>{
  return {
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
  
 }
}

class App extends Component{
  
  componentDidMount(){
    this.props.onRequestRobots();
  }

  render(){

    const {searchField, onSearchChange, robots, isPending} = this.props;
    
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
 
    return isPending ? <h1>Loading...</h1>
      :
      (
        <div className='tc'>
          <Header/>
          <SearchBox searchContent={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/> 
            </ErrorBoundry>
          </Scroll>
          
        </div>
      )

  }
  
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
