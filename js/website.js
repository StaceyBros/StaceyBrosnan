const sendEmail = function () {

  $( "#searchForm" ).submit(function( event ) {

  // Stop form from submitting normally
  event.preventDefault();

  // Get some values from elements on the page:
  const $form = $( this ),
    term = $form.find( "input[name='s']" ).val(),
    url = $form.attr( "action" );

  // Send the data using post
  const posting = $.post( url, { s: term } );

  // Put the results in a div
  posting.done(function( data ) {
    const content = $( data ).find( "#content" );
    $( "#result" ).empty().append( content );
  });
});


  }

const sentEmail = function () {

}


$(document).ready( function () {
    $('#submit').on('click', function(){
      sendEmail();
    });
});
