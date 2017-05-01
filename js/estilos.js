//Este archivo de jquery contiene las funciones que se necesitan para hacer funcionar algunos aspecros
// de esta página

$(document).ready(function()
{
  if($(document).width() < 700)
  {
    $("#menu-principal").fadeOut();
  }

  $(window).resize(function()
  {
    if($(document).width() < 900)
    {
      $("#menu-principal").hide();
    }
    else
    {
      $("#menu-principal").show();
    }
  });
});
