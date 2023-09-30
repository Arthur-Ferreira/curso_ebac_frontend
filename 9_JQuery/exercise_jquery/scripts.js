$(document).ready(function () {
  const itemsList = $("<ul></ul>");
  const inputedValue = $('#tarefa').val();

  console.dir(itemsList)

  $('form').on('submit', function (event) {
    event.preventDefault();

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