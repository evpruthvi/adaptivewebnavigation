import React from 'react';
import SidebarItem from './sidebar_list_item';

const Sidebar = (props)=>{

  if(!(props.lastActive && props.asked && props.recposts)){
    return <div>Loading..</div>
  }

  const sidebarList = props.recposts.map((post)=>{
    return <SidebarItem key= {post._id}  post={post} />
  });


  var lastActivePost = props.lastActive;
  var latestUserLink = `/search/user/${lastActivePost._source.user_id}`;
  console.log(latestUserLink);
   return(
     <div>
       <div id="sidebar" className="show-votes" role="complementary" aria-label="sidebar">
         <div className="module question-stats">
           <h4 id="h-related">Summary</h4>

           <table id="qinfo">
             <tbody><tr>
               <td>
                  <p className="label-key">asked on</p>
               </td>
               <td styles="padding-left: 10px">
                 <p className="label-key" ><b>{(new Date(props.asked._source.time * 1000)).toDateString()}</b></p>
               </td>
             </tr>
             <tr>
               <td>
                 <p className="label-key">Number of answers</p>
               </td>
               <td styles="padding-left: 10px">
                 <p className="label-key">
                   <b>{props.nanswers}</b>
                 </p>
               </td>
             </tr>
             <tr>
               <td>
                 <p className="label-key">Last active</p>
               </td>
               <td styles="padding-left: 10px">
                 <p className="label-key"><b><a href={latestUserLink} className="lastactivity-link" >{(new Date(lastActivePost._source.time * 1000)).toDateString()}</a></b></p>
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
