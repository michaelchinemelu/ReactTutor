import { Component } from "react";
import axios from 'axios'


class PostList extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            errorMsg: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch(error => {
            this.setState({
                errorMsg: "Error retrieving data from the API"
            })
            console.log(error)
        })
    }
    render(){
        const {posts} = this.state
        return(
            <div>
                <h2>
                    List of Products
                </h2>
                    {
                        posts.length ?
                        posts.map(post => <div key={post.id}><h5>{post.title}</h5></div>) :
                        null    
                    }
            </div>
        )
    }
}

export default PostList;