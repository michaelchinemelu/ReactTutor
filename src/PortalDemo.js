import React from 'react' 
import ReactDOM from 'react-dom'


const PortalDemo = () => {
    // React Portal is a way of changing the root directory of the whole react
    // into a new root, usually for a special purposes.
    {/*
    Why Do we need React Portals
        1. Having to Deal with a Parent Component CSS when the child component is a 
        model, a pop-up or a tool tip.
*/}
    return ReactDOM.createPortal(
        <div>
            <h2>This is a portal Demo for react rebrandings</h2>
        </div>,
        document.getElementById('portal_root')
    )
}

export default PortalDemo;