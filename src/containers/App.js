// import './App.css';
// import React, {Component} from 'react';
// import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
// import ErrorBoundry from '../components/ErrorBoundry';


// Method 1: React class

// class App extends Component{
  // constructor(){
  //   super();
  //   this.state={
  //     robots: [],
  //     searchContent: ''
  //   }
  // }
  
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.cypress.io/users')
  //   .then(users => users.json())
  //   .then(users => this.setState({robots: users}))
  // }


  // onSearchChange=(event)=>{
  //   this.setState({searchContent:event.target.value})
  // }


//   render(){
//     const {robots, searchContent} = this.state;

//     const filteredRobot = robots.filter(robot=>{
//       return robot.name.toLowerCase().includes(searchContent.toLocaleLowerCase());
//     })
    

 
//     return !robots.length ? <h1>Loading...</h1>
//       :
//       (
//         <div className='tc'>
//           <h1>Robot Friends</h1>
          // <SearchBox searchContent={this.onSearchChange}/>
//           <Scroll>
//             <ErrorBoundry>
//               <CardList robots={filteredRobot}/>
//             </ErrorBoundry>
//           </Scroll>
          
//         </div>
//       )

//   }
  
// }

// export default App;


// Method 2: React hooks
// import './App.css';
// import React, {useState, useEffect} from 'react';
// import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
// import ErrorBoundry from '../components/ErrorBoundry';


// function App(){

//   const [robots, setRobots] = useState([])
//   const [searchContent, setSearchContent] = useState('')

//   useEffect(()=>{
//       fetch('https://jsonplaceholder.cypress.io/users')
//       .then(users => users.json())
//       .then(users => setRobots(users))
//     }, []
//   )

//   const onSearchChange=(event)=>{
//       setSearchContent(event.target.value)
//     }

//   const filteredRobot = robots.filter(robot=>{
//           return robot.name.toLowerCase().includes(searchContent.toLocaleLowerCase());
//         })
        
//   return !robots.length ? <h1>Loading...</h1>
//       :
//       (
//         <div className='tc'>
//           <h1>Robot Friends</h1>
//           <SearchBox searchContent={onSearchChange}/>
//           <Scroll>
//             <ErrorBoundry>
//               <CardList robots={filteredRobot}/>
//             </ErrorBoundry>
//           </Scroll>
          
//         </div>
//       )
// }

//  export default App;

// method 3: redux
import './App.css';
import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
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
          <h1>Robot Friends</h1>
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
