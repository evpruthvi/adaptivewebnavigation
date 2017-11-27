import React from 'react';
import SidebarItem from './sidebar_list_item';

const Sidebar = (props)=>{

  const sidebarList = props.recposts.map((post)=>{
    return <SidebarItem key= {post._id}  post={post} />
  });

   return(
     <div>
       <div id="sidebar" className="show-votes" role="complementary" aria-label="sidebar">
         <div className="module question-stats">
           <table id="qinfo">
             <tbody><tr>
               <td>
                 <p className="label-key">asked</p>
               </td>
               <td styles="padding-left: 10px">
                 <p className="label-key" title="2017-11-23 02:41:01Z"><b>today</b></p>
               </td>
             </tr>
             <tr>
               <td>
                 <p className="label-key">viewed</p>
               </td>
               <td styles="padding-left: 10px">
                 <p className="label-key">
                   <b>15 times</b>
                 </p>
               </td>
             </tr>
             <tr>
               <td>
                 <p className="label-key">active</p>
               </td>
               <td styles="padding-left: 10px">
                 <p className="label-key"><b><a href="https://stackoverflow.com/questions/47446738/trigger-function-only-if-no-mouse-clicks-in-x-seconds?lastactivity" className="lastactivity-link" title="2017-11-23 02:49:14Z">today</a></b></p>
               </td>
             </tr>
             </tbody></table>
         </div>

         <div className="module sidebar-related">
         <h4 id="h-related">Related</h4>
         <div className="related js-gps-related-questions" data-tracker="rq=1">
           {sidebarList}
         </div>
       </div>
      </div>
     </div>
   );
};
export default Sidebar;
