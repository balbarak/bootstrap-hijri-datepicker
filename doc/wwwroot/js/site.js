$(function () {

    hljs.initHighlightingOnLoad();
    initDefault();
});

function initDefault() {

    $("#default-picker").hijriDatePicker({
        locale:"ar-sa",
        hijri: true,
        viewMode: 'months',
        showClose: true,
        showClear: true,
        showTodayButton: true,
        useCurrent:false,

    });
}