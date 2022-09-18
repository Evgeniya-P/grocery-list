import { Component } from 'react';
import check from './check.jpg';

export class GroceryList extends Component{

    state={
        userInput:"",
        groceryList:[]

    }

    // onChangeEvent(event){
    onChangeEvent(e){
        // console.log(event.target.value);
        this.setState({userInput: e});
    }

    addItem(input){
        if (input === ''){
            alert("Please enter an item")
        }else{
        let listArray = this.state.groceryList;
        listArray.push(input)
        this.setState({groceryList: listArray, userInput:''})
        console.log(listArray)
    }
}


deleteItem(){
    let listArray = this.state.groceryList;
    listArray = [];
    // опусташаем массив 
    // есть и второй способ
    // listArray.length = 0
    this.setState({groceryList: listArray})
}

    crossedWord(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e){
        e.preventDefault();

    }

    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type="text"
                 placeholder='What do you want to buy today?' 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className='container'>
                <button onClick={() => this.addItem(this.state.userInput)} className='btn add'>
                    Add
                </button>
            </div>

            <ul>
                {/* {this.state.groceryList.map((item, index) => (
                    <li key={index}> (item) </li>
                ))} */}
                 {this.state.groceryList.map((item, i) => (
                    <li onClick= {this.crossedWord} key={i}> 
                    <img src={check} width="30px" alt="check-box"/>
                    { item}</li>
                 ))}
               
            </ul>
            <div className="container">
            <button onClick = {()=> this.deleteItem()} className="btn delete">Delete</button>
            </div>

            {/* дальше прописыываем перед клоссворд 
            аналогисно как прописывали добавить инпут
             */}

            </form>


            </div>

        )
    }
}