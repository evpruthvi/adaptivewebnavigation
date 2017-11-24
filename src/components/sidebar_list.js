import React from 'react';
import SidebarItem from './sidebar_list_item';

const Sidebar = (props)=>{

  const sidebarList = props.recposts.map((post)=>{
    return <SidebarItem key= {post._id}  post={post} />
  });

   return(
     <div>
       <div className="module sidebar-related">
         <h4 id="h-related">Related</h4>
         <div className="related js-gps-related-questions" data-tracker="rq=1">
           {sidebarList}
         </div>
       </div>
     </div>
   );
};
export default Sidebar;
