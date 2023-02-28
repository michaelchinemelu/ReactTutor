import React, {Component} from 'react' 


class Welcome extends Component{
    render() {
        const {name} = this.props;
        return(
            /** This is Jsx==> Extension to the JavaScript languages syntax
             * Jsx makes the react code simplea and elegant
             * 
             */
            <div>
                <h1>Hello {name} you have won in the setup na</h1>
            </div>
        )
    }
}
export default Welcome;