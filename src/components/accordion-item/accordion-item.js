import React from 'react';


import './accordion-item.css';

const AccordionItem = () => {
  return ( 
     <div className="accordion-item">
       <div className="user-info">
         <h3>Sherry</h3>
         <i>Gender icon</i>
       </div>
       <div className="user-info-details">
         <ul>
           <li><span className="user-info-property">Username</span></li>
           <li><span className="user-info-property">Registered</span></li>
           <li><span className="user-info-property">Email</span></li>
           <li><span className="user-info-property">Address</span></li>
           <li><span className="user-info-property">City</span></li>
           <li><span className="user-info-property">Zip Code</span></li>
           <li><span className="user-info-property">Birthday</span></li>
           <li><span className="user-info-property">Phone</span></li>
           <li><span className="user-info-property">Cell</span></li>
         </ul>
       </div>
       <div className="user-img-big">
          <img src="" alt="" />
       </div>
     </div>
  )
};

export default AccordionItem;