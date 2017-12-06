//Read the data in parallel
queue()
        .defer(d3.json, "/users/api/alldata")
        .defer(d3.json, "/users/api/singledata")
        .await(makeGraphs);

function makeGraphs(error, alldata,singledata){
     //Load the current user data and the entire data 
  var singleData =singledata;
  var data = alldata;
    //declare the chart types with the id to be viewed in html
	var tagChart   = dc.pieChart("#chart-ring-year"),
	    userChart = dc.rowChart("#chart-row-spenders");
	// set crossfilter
  var newData = [];
  for(var j=0;j<data.length;j++){
    for(var i=0;i<2;i++){
      newData.push({username : data[j]._id.username, tags : data[j]._id.tags.split(" ")[i]});
    }
  }
 /* for(var j=0;i<singleData.length;j++){
    //if(typeof singleData[j]!="undefined" && typeof singleData[j].tags!="undefined"){
      for(var i=0;i<2;i++){
         newData.push({username : singleData[j].user, tags : singleData[j].tags.split(" ")[i]});
      //}
    }
  }*/
 console.log(data.length);
console.log(newData.length);

	var ndx = crossfilter(newData),
	  tagsDimension = ndx.dimension(function(d) {return d.tags;}), //get tags column
	  nameDim  = ndx.dimension(function(d) {return d.username;}),//get users column
		tagCountPerName = nameDim.group(), //groups the users column according to the tags(size=no. of users)
		tagGroup = tagsDimension.group();//.top(1);  //groups the tags column by tags(size=no.of unique tags)
	  //console.log(tagGroup[0].key+":"+ tagGroup[0].value);
	//Pie-Chart
	tagChart
	    .dimension(tagsDimension)
	    .group(tagGroup)
	    .innerRadius(50)
	    .controlsUseVisibility(true);
	
	//Row-Chart
	userChart
	    .dimension(nameDim)
	    .group(tagCountPerName)
	    .elasticX(true)
	    .controlsUseVisibility(true);
	dc.renderAll();
}
