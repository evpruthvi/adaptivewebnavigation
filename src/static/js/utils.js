var x1=0,x2=0;
$('body').on('mousewheel', function(e){ x1=x2; x2=e.originalEvent.wheelDelta; });
setInterval(function() {
  if(x1!=x2){
    if(x2 > 0) {
      console.log('Scroll Up');
      //var data = "Scrolling Up";
      $.ajax({
        type: 'POST',
        url: '/users/jspost',
        data: '{"data":"Scroll Up"}',
        success: function(data) { console.log(data); },
        contentType: "application/json",
        dataType: 'json'
      });
    }
    else {
      console.log('Scroll Down');
      //var data = "Scrolling Down";
      $.ajax({
        type: 'POST',
        url: '/users/jspost',
        data: '{"data":"Scroll Down"}',
        success: function(data) { console.log(data); },
        contentType: "application/json",
        dataType: 'json'
      });
    }
  }
},500);

var y1=0,y2=0;
window.onmousemove = function(e) { y1=y2; y2=e.pageY; }
setInterval(function() {
  if(y1!=y2){
    if(y2<y1){
      console.log('Mouse Up');
      //var data = "Mouse movement upward";
      $.ajax({
        type: 'POST',
        url: '/users/jspost',
        data: '{"data":"Mouse Up"}',
        success: function(data) { console.log(data); },
        contentType: "application/json",
        dataType: 'json'
      });
    }
    else {
      console.log('Mouse Down');
      //var data = "Mouse movement downward";
      $.ajax({
        type: 'POST',
        url: '/users/jspost',
        data: '{"data":"Mouse Down"}',
        success: function(data) { console.log(data); },
        contentType: "application/json",
        dataType: 'json'
      });
    }
  }
},500);

$("button").mousedown( function(e) {
  if(e.which) {
    console.log(this.value+" Button Click");
    //var data = this.value+" Button clicked";
    $.ajax({
      type: 'POST',
      url: '/users/jspost',
      data: '{"data":"Button Click"}',
      success: function(data) { console.log(data); },
      contentType: "application/json",
      dataType: 'json'
    });
  }
});

$("input").mousedown( function(e) {
  if(e.which) {
    console.log(this.value+" Button Click");
    //var data = "Button";
    /*$.ajax({
        url:'/users/jspost',
        type:'POST',
        data:{dat,dat},
        success: function(data)
        {console.log(data);
    }
    });*/
    $.ajax({
      type: 'POST',
      url: '/users/jspost',
      data: '{"data":"Button Click"}',
      success: function(data) { console.log(data); },
      contentType: "application/json",
      dataType: 'json'
    });
  }
});

$("a").mousedown( function(e) {
  if(e.which) {
    console.log("Link Click");
    //var data = "Link clicked";
    $.ajax({
      type: 'POST',
      url: '/users/jspost',
      data: '{"data":"Link Click"}',
      success: function(data) { console.log(data); },
      contentType: "application/json",
      dataType: 'json'
    });
  }
});
$("button").trigger("mousedown");

$('body').mouseup(function() {
  console.log('Text Select');
  //var data = "Text is selected";
  $.ajax({
    type: 'POST',
    url: '/users/jspost',
    data: '{"data":"Text Select"}',
    contentType: "application/json",
    dataType: 'json'
  });
  console.log(getSelectedText());
});

function getSelectedText() {
  if (window.getSelection) {
    return window.getSelection().toString();
  } else if (document.selection) {
    return document.selection.createRange().text;
  }
  return '';
}
