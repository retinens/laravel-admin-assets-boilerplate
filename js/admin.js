/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import * as bootstrap from 'bootstrap'

window.bootstrap = bootstrap
import * as popper from 'popper.js'

window.Popper = popper
import * as jquery from 'jquery'

import * as lodash from 'lodash'

import jQuery from "jquery";
window.$ = window.jQuery = jQuery

window._ = lodash
import * as axios from 'axios'

window.axios = axios
//set axios default headers

import "./volt"

import swal from 'sweetalert';
import "jquery-validation/dist/jquery.validate.min";
import "jquery-validation/dist/localization/messages_fr";

jQuery.validator.setDefaults({
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});

window.toastr = import('toastr')

$(".form-validate").each((function () {
    $(this).validate({
        submitHandler: function (form) {
            form.submit()
        }
    })
}));

//select2

import * as select2 from 'select2';
select2();

$('.select2').select2({
    theme: 'bootstrap-5'
});

import DataTable from 'datatables.net';
window.DataTable = DataTable;
// import DataTable from "datatables.net-bs5";

$('.dataTable').dataTable({
    "language": {
        "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
    }
});

$('.deleteConfirm').click(function (event) {
    event.preventDefault();
    swal({
        title: "Etes vous sur de vouloir supprimer l'élément?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                $('#destroy-form-' + $(this).data("id")).submit();
            }
        })

});

window.moment = import('moment');

window.toastr = import('toastr/toastr');


$(document).ready(function () {
    window.livewire.on('toastr', param => {
        toastr[param['type']](param['message'], param['title'])
    });
})

let Trix = import('trix')
