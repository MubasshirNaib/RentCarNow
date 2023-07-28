import React from 'react';

const PageTitle = (props) => {
    document.title = "Rent Car Now - " + props.title;
    return <div className="w-100">{props.children}</div>;
  
}

export default PageTitle;