$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
   $(function () {
        $('#closemodal').click(function () {
            $('#mymodal').modal('hide');
        });

    });