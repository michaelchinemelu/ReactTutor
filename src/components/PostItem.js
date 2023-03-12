import axios from 'axios'
import React, {Component} from 'react' 


class PostItem extends Component{
    constructor(props){
        super()
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/todos')
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({
                errorMsg: "Sorry, a problem occured in the backend"
            })
        })
    }
    render(){
        const {posts, errorMsg} = this.state
        return(
            <div>
                <h2>
                    This is the post that display my experience in Http Requests!
                </h2>
                <h4>
                    {
                        posts.length ? 
                        posts.map(post => <div key={post.id }>
                            <h5>{post.title}</h5>
                        </div>):
                        <div style={{ "color":"red"}}>{errorMsg}</div>
                    }
                </h4>
            </div>
        )
    }
}
export default PostItem;