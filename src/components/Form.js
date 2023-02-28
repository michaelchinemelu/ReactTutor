import React, {Component} from 'react'

class Form extends Component {
    constructor(){
            super()
            this.state = {
                username: '',
                comments: '',
                select: 'React'
            }
        }
     HandleUserName = event => {
            this.setState({
                username: event.target.value, // updated value
            })
        }

    commentHandler = event => {
        this.setState({
            comments: event.target.value
        })
    }

    HandleSelection = event => {
        this.setState({
            select: event.target.value
        })
    }
    HandleSubmit(event)  {
        alert(`Your Username is ${this.state.username}, Your comment is ${this.state.comments},  and your option is ${this.state.select}`)
        event.preventDefault()
    }
    // Destructuring the state property in the render method
    
    render() { 
        const {username, comments, select} = this.state
        return(
            
             <form>
                <div>
                <label>Username</label>
                <input type='text' value={username} onChange={this.HandleUserName} />
                </div>
                <div>
                    <label>Comments</label>
                <textarea value={comments} onChange={this.commentHandler} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={select} onChange={this.HandleSelection}>
                        <option value="react">React</option>
                        <option value="django">Django</option>
                        <option value="angular">Angular</option>
                        <option value="mungo_Db">Mungo DB</option>
                    </select><button type="submit" onClick={this.HandleSubmit.bind(this)}>Submit</button>
                </div>
                
                
            </form>
        
            
        )
    }
}
export default Form;