import React, { Component } from 'react'
import Watch from './Watch'

export default class StructureWatch extends Component {
    constructor(props) {
      super(props)
    
      this.state = { 
         city : "",
      }


       this.addWatch = this.addWatch.bind(this)
    }


addWatch () {
    this.setState({
        name : "",
    })
}

  render() {
    return (
        <div>
            <h1>Мировые часы</h1>
            <div className='fieldInputs'>
                <div className='block-field'>
                    <div> <span className='text-field'>Название</span> </div>
                    <div><input onChange={event => this.setState({city: event.target.value})} placeholder='Введите город' className='field'></input></div>   
                </div>
                <div  className='block-field'>
                    <span className='text-field'>Временная зона</span> 
                   <input className='field'></input>
                </div>
                <Watch city={this.state.city}/>
                <button onClick={this.addWatch} className='button'>Добавить</button>
            </div>

            <Watch />
        </div>
    )
  }
}
