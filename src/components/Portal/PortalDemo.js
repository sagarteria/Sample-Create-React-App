import React from 'react';
import ReactDom from 'react-dom';

function PortalDemo() {
    return ReactDom.createPortal(
        <div>
            <hr />
            <h2>#31 Portals Demo</h2>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo