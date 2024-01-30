import './App.css';

import React from "react"
import ToDo from "./ToDo"
import Sample from "./Sample"
import {Paper, List, Container} from "@material-ui/core"
import AddToDo from './AddToDo';
class App extends React.Component {
  constructor(props){
    super(props)
    //this.state = {item={id : 0, "title":"Hello React", "done" : true}}
    //Ap.js 에 this.state.item 이라는 이름으로 데이터를 생성
    //ToDo에게 item이라는 이름으로 데이터를 전달
    //3개의 객체를 가진 배열 생성
    this.state = {
      items:[
      {id : 0, title:"Hello React", done : true},
      {id : 1, title:"Hello vue", done : false},
      {id : 2, title:"Hello angular", done : false}
    ]}
    
  }  
  render(){
    //배열을 순회하면서 출력할 내용을 생성
    //배열을 순회하면서 출력물을 만들 때는 key를 설정해주어야 함.
    //key를 설정하지않으면 출력에 문제가 없지만 콘솔에 에러가 출력
    let display = this.state.items.length > 0 && (
      <Paper style = {{margin:16}}>
        <List>
          {this.state.items.map((item, idx) =>( 
            <ToDo item = {item} key = {idx}/>
          ))}
        </List>
      </Paper>
    )
    return(
      <div className = "App">
        <Container>
          <AddToDo />
          {display}
        </Container>
      </div>
    )
  }
}
export default App

