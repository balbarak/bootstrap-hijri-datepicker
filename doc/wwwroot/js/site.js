$(function () {

    hljs.initHighlightingOnLoad();
    initDefault();
});

function initDefault() {

    $("#default-picker").hijriDatePicker();

    $("#hijri-picker").hijriDatePicker({
        hijri: true
    });

    $("#month-picker").hijriDatePicker({
        hijri: true,
        viewMode:'months'
    });

    $("#year-picker").hijriDatePicker({
        hijri: true,
        viewMode: 'years'
    });

    $("#all-button-picker").hijriDatePicker({
        hijri: true,
        viewMode: 'years',
        showClose: true,
        showClear: true,
        showTodayButton: true
    });
}