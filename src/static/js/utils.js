$('body').mouseup(function() {
  $('.question .vote-up-off').unbind().click(function() {
    var $variable = $('.post-text').html()
    data= $variable + "tags: " + $('.post-taglist').text() ;
    console.log(data);
    $.ajax({
      type: 'POST',
      url: '/users/votes',
      data: {
        'action': "upvoted",
        'tags' : $('.post-taglist').text(),
        'url': document.location.href,
        'content' : $('.post-text').html()
      },
    });
  });
  $('.question .vote-down-off').unbind().click(function() {
    var $variable = $('.post-text').html()
    data="Question Downvoted: " + $variable + "tags: " + $('.post-taglist').text();
    console.log("Question Downvoted");
    console.log(data);
    $.ajax({
      type: 'POST',
      url: '/users/votes',
      data: {
        'action': "downvoted",
        'tags' : $('.post-taglist').text(),
        'url': document.location.href,
        'content' : $('.post-text').html()
      },
    });
  });
  a=$('.answer');
  for(var i = 0; i < a.length; i++)
  {
    $(a[i].getElementsByClassName('vote-up-off')[0]).unbind().click(generate_handler_upvote(i))
    $(a[i].getElementsByClassName('vote-down-off')[0]).unbind().click(generate_handler_downvote(i))
  }
});

function generate_handler_upvote( j ) {
  return function(event) {
    var d=a[j].getElementsByClassName('post-text')[0];
    data="Answer Upvoted: " + d.innerText;
    console.log(data);
    console.log(d.innerText);
    $.ajax({
      type: 'POST',
      url: '/users/votes',
      data: data,
    });
  };
}

function generate_handler_downvote( j ) {
  return function(event) {
    var d=a[j].getElementsByClassName('post-text')[0];
    data="Answer Downvoted: " + d.innerText;
    console.log(data);
    $.ajax({
      type: 'POST',
      url: '/users/votes',
      data: data,
    });
  };
}

function getSelectedText() {
  if (window.getSelection) {
    return window.getSelection().toString();
  } else if (document.selection) {
    return document.selection.createRange().text;
  }
  return '';
}
