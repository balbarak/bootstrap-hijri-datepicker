$(function () {


    $("#d-hijri-picker").hijriDatePicker({
        hijri: true
    });

    $("#picker-2").hijriDatePicker({
        hijri: true,
        viewMode:'months'
    });

    $("#picker-3").hijriDatePicker({
        viewMode: 'months',
        format:"D/M/YYYY"
    });

    $("#picker-4").hijriDatePicker({
        viewMode: 'months',
        locale: "en-us"
    });

    $("#picker-5").hijriDatePicker({
        viewMode: 'months',
        hijri: true,
        hijriFormat:"iD/iM/iYYYY"
    });

    $("#picker-6").hijriDatePicker({
        viewMode: 'months',
        minDate:'2018-01-15'
    });

    $("#picker-7").hijriDatePicker({
        viewMode: 'years',
        minDate: '2018-01-16',
        maxDate: '2020-06-27'
    });

    $("#picker-8").hijriDatePicker({
        viewMode: 'years',
        useCurrent: false,
        viewDate:'1980-01-15'
    });

    $("#picker-9").hijriDatePicker({
        useCurrent: false
    });

    $("#picker-10").hijriDatePicker({
        showSwitcher: false
    });

    $("#picker-11").hijriDatePicker({
        showClear: true
    });

    $("#picker-12").hijriDatePicker({
        showClose: true
    });


    $("#picker-13").hijriDatePicker({
        showTodayButton: true
    });

    $("#picker-14").hijriDatePicker({
        showTodayButton: true,
        showClose: true,
        showClear: true,
        icons: {
            previous: '<',
            next: '>',
            today: 'تاريخ اليوم',
            clear: 'حذف',
            close: 'اغلاق'
        },
        hijriText: "عرض التاريخ الهجري",
        gregorianText: "عرض التاريخ الميلادي"
    });

    $("#picker-15").hijriDatePicker({
        showTodayButton: true,
        showClear:true,
        useCurrent:false
    });

    $("#picker-15").on('dp.change', function (arg) {

        if (!arg.date) {
            $("#selected-date").html('');
            return;
        };

        let date = arg.date;

        $("#selected-date").html(date.format("YYYY/M/D") + " Hijri:" + date.format("iYYYY/iM/iD"));
    });

});

