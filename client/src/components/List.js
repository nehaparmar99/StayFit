import React,  { Component } from 'react';
import axios from "axios";
import './list.css';
import ListItems from './list-items'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import home from "./food2.jpg"
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

library.add(faTrash)

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  componentDidMount() {
    const l = localStorage.getItem('email')
    console.log(l);
  }
  addItem(e) {
    e.preventDefault();
    fetch('api/food',
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email: "n@gmail.com", name: "neha", calorie: 200 }),
      })
      .then(res=>console.log(res)).catch(err=>console.log(err))
    // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=> response.json())
    //  alert(res)
  //   var item = this.state.currentItem.text
  //   if(item!="")
  //   {
  //   console.log(item)
  //   const res = await axios.get(`https://rapidapi.p.rapidapi.com/v1_1/search/${item}`,{ headers: {
  //       'x-rapidapi-host': 'nutritionix-api.p.rapidapi.com',
  //       'x-rapidapi-key': 'a885d9865cmsh8dba1c849ea8544p1e1351jsn46f59f13288c',
  //       'useQueryString': 'true'
  //     },params:{fields: 'nf_calories,nf_total_fat'}}).then(response=>response).catch(error=>{console.log(error)});
  //     //alert(JSON.parse(res));
  //     //alert(res)
  //     console.log(res.data)
  //     if(res.data.total_hits ){
  //     var cal = res.data.hits[0].fields.nf_calories
  //     this.state.currentItem.text = item + "         "+cal
  //   const newItem = this.state.currentItem;
  //   if(newItem.text !==""){

     
  //     const items = [...this.state.items, newItem];
  //   this.setState({
  //     items: items,
  //     currentItem:{
  //       text:'',
  //       key:''
  //     }
      
  //   })
  //   }
  //   else{
  //     alert("Food item not entered!!!!")
  //   }}
  
  //   else{
  //     alert("Food item entered Incorrect!!!!")
  //   }
  // }
  // else{
  //   alert("Food item not entered!!!!")
  // }
  
  
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
    
  
  
   
  }
 
 render(){
  // const profileData = async (e) => {
  //   // alert("Hi")
  //   // console.log(this.state.currentItem.text)
   
  //     // const options = {
  //     //   method: 'GET',
  //     //   url: 'https://rapidapi.p.rapidapi.com/v1_1/search/cheddar%20cheese',
  //     //   params: {fields: 'item_name,item_id,brand_name,nf_calories,nf_total_fat'},
  //     //   headers: {
  //     //     'x-rapidapi-host': 'nutritionix-api.p.rapidapi.com',
  //     //     'x-rapidapi-key': 'a885d9865cmsh8dba1c849ea8544p1e1351jsn46f59f13288c'
  //     //   }
  //     // };
  //     // console.log(options)
  //     // axios.request(options).then(function (response) {
  //     //   console.log(response.data);
        
  //     //   // this.state.currentItem.text =  this.state.currentItem.text + response.data.hits[0].fields.nf_calories;
  //     //   // this.addItem();
  //     // }
  //     // ).catch(function (error) {
  //     //   console.error(error);
       
  //     // });
  //     // const res = await axios.get("https://rapidapi.p.rapidapi.com/v1_1/search/cheddar%20cheese",{ headers: {
  //     //   'x-rapidapi-host': 'nutritionix-api.p.rapidapi.com',
  //     //   'x-rapidapi-key': 'a885d9865cmsh8dba1c849ea8544p1e1351jsn46f59f13288c'
  //     // }});
  //     e.preventDefault()
  //     alert("hi")
  //    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=> response.json())
  //    alert(res)


  //   //  await axios.get("https://rapidapi.p.rapidapi.com/v1_1/search/cheddar%20cheese",{ headers: {
  //   //     'x-rapidapi-host': 'nutritionix-api.p.rapidapi.com',
  //   //     'x-rapidapi-key': 'a885d9865cmsh8dba1c849ea8544p1e1351jsn46f59f13288c',
  //   //     'useQueryString': 'true'
  //   //   }}).then(response=>{alert(response)}).catch(error=>{alert("error")});
  //     alert("bye")
  //     // console.log(res.data);
  //     // alert("try") 
  //   //   setProfileCell(res.data.results[0].cell);
  //   //   setProfileEmail(res.data.results[0].email);
  //   //   setProfileImage(res.data.results[0].picture.large);
  //   //   setProfileName(
  //   //     `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
  //   //   );
   
  // };
  return (
    // <div id="main" className="row">
    
         
    // <div id="App" className="col col-lg-11">
    //   <header>
    //     <form id="to-do-form" onSubmit={this.addItem}>
    //       <input id="in" type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
    //       <button id="bt" type="submit">Add</button>
    //     </form>
    //     <p>{this.state.items.text}</p>
        
    //       <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
    //   </header>
    // </div>
    // <div className="col col-lg-1">
    //   <img id="listi" src={home}></img>
    //   </div>
 
    
    // </div>
    <div id="main">
      <Container>
        <Row>
          <Col lg="6">
            <div>
          <div id="App" >
       <header>
         <form id="to-do-form" onSubmit={this.addItem}>
           <input id="in" type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
           <button id="bt" type="submit">Add</button>
         </form>
         <p>{this.state.items.text}</p>
        
           <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
       </header>
     </div>
     </div>
          </Col>
          <Col lg="6">
          <div >
       <img id="listi" src={home}></img>
       </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
 }
}


export default List;