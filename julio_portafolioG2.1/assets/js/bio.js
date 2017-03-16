function changeBackground(e){
  console.log("changeBackground");
  console.log(e.currentTarget.id);
  var isVisible = $('#video').css('visibility');
  console.log('isVisible:: ',isVisible);
  if(isVisible == 'hidden'){
    console.log("hidden");
    $('#video').css('visibility','visible');
  } else {
    $('#video').css('visibility','hidden');
  }
}

$('#cambiar').on('click', changeBackground);
