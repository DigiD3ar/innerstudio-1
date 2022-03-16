import * as custom_data_tables from '../custom_data_tables';

$(function () {
    let options = {
        serverSide: true,
        processing: true,
        pageLength: 50,
        ajax: _PATH+'admin/galeria/array-data',
        columns: [
            {data: 'id_galeria', name: 'galeria.id_galeria', orderable: false, searchable: false},
            {data: 'name', name: 'galeria.name'},
            {data: 'actions', name: 'actions', orderable: false, searchable: false},


        ]
    };
    custom_data_tables.initDataTable(options);

    $('input[name=editar_pass]').on('change', function(){
        updatePass()
    });

    $('input[name=editar_mail]').on('change', function(){
        if($('input[name=editar_mail]').is(':checked')){
            $('input[name=email]').prop('disabled', false);
        }else{
            $('input[name=email]').prop('disabled', true);
        }
    });

    if($('#birthdate').length > 0){
        $('#birthdate').formatter({
            'pattern': '{{9999}}/{{99}}/{{99}}',
        });
    }
    if($('#phone').length > 0) {
        $('#phone').formatter({
            'pattern': '({{999}}){{9}}-{{99}}-{{99}}-{{99}}',
            'persistent': true
        });
    }

});


$("input#global_filter").on("keyup", function(e) {
    custom_data_tables.filterGlobal();
});



function updatePass(){
    if($('input[name=editar_pass]').is(':checked')){
        $('input[name=password_confirmation],input[name=password]').prop('disabled', false);
    }else{
        $('input[name=password_confirmation],input[name=password]').prop('disabled', true);
    }
}

$(document).on('click', '.do-delete', function(){
    deleteByModal($(this).data('id'));
});

$(document).on('click', '.do-change', function(){
    changeStatusByModal($(this).data('id'), $(this).data('status'));
});




function changeStatusByModal(id, status){
    $('input[name=id]').val(id);
    $('input[name=status]').val(status);
    $('#modal-change-status').modal('open');
}
