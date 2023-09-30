$(document).ready(function () {
  const itemsList = $("<ul></ul>");
  
  console.dir(itemsList)
  
  $('form').on('submit', function (event) {
    event.preventDefault();
    
    const inputedValue = $('#tarefa').val();
    const listItem = $(`<li>${inputedValue}</li>`);

    itemsList.insertAfter('form');
    listItem.appendTo(itemsList);

    $('#tarefa').val('');
  });

  itemsList.on('click', 'li', function () {
    const element = $(this)
    element.addClass('finished');
  });
});