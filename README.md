# Getting Started
Bootstrap Hijri Date picker v0.1.0

![sample](http://files.balbarak.com/file/598299)
![sample two](http://files.balbarak.com/file/58464)

## Installation

Use css and javascript files in `dist` folder

### Required libraries
* Jquery >  v3.1 [jquery](https://jquery.com/)
* Moment.js > v2.2 [momenjs](https://momentjs.com/)

## Usage

### includes

#### css
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />

<link href="css/bootstrap-datetimepicker.min.css" rel="stylesheet" />
```

#### js
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js"></script>

<script src="js/bootstrap-hijri-datepicker.min.js"></script>
```


### html

```html
 <div class="form-group">
    <label>
        Date
    </label>
    <div class="input-group">
        <input type='text' class="form-control" id="hijri-date-input" />
    </div>
</div>
```

### javascript
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js"></script>
<script src="js/bootstrap-hijri-datepicker.min.js"></script>
    
<script type="text/javascript">
    $(function () {
        $("#hijri-date-input").hijriDatePicker();
    });
</script>
```

## Complete Sample
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>
        Bootstrap Hijri Date Picker
    </title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" />
    <link href="css/bootstrap-datetimepicker.min.css" rel="stylesheet" />

</head>
<body class="bg-light">
    <div class="container">

        <div class="form-group">
            <label>
                Date
            </label>
            <div class="input-group">
                <input type='text' class="form-control" id="hijri-date-input" />
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js"></script>
    <script src="js/bootstrap-hijri-datepicker.min.js"></script>
    <script type="text/javascript">

        $(function () {

            $("#hijri-date-input").hijriDatePicker();

        });

    </script>

</body>
</html>
```

## Options

to use options simple pass options object see below

```js
$("#hijri-date-input").hijriDatePicker(
    {
        hijri : true,
        format: "DD-MM-YYYY",
        hijriFormat: 'iYYYY-iMM-iDD',
    });
```
* `hijri` : boolean

    set hijri date as default

* `format`: string

    to set gregorian momentjs format
* `hijriFormat`:  string

    hijri format should start with `i` for example `iYYYY`

* `dayViewHeaderFormat`:  string

    picker header for gregorian dates  ex: `MM-YYYY`

* `hijriDayViewHeaderFormat`: string

    picker header for hijri dates ex: `iMMM-iYYYY`


* `showSwitcher`:  boolean
    
    to display switch button from hijri to gregorian defautl `true` 

* `showTodayButton`: boolean

    to display today button

* `showClear`: boolean

    to display clear button

* `showClose`: boolean

    to display close button

* `viewDate`: string

    to set the default view gregorian date in the picker ex: `1980-01-01`

## RTL support

To enable rtl simply include bootstrap rtl from https://bootstrap.rtlcss.com/ and set `<html dir="rtl">`

ex:
``` html
<html dir="rtl">
<head>
   
    <meta charset="utf-8" />
   
   <link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css">

    <link href="css/bootstrap-datetimepicker.min.css" rel="stylesheet" />
</head>
....
```

## Acknowledgements

This project was built from great work done by

* @xosh https://github.com/xsoh/moment-hijri
* @Eonasdan https://github.com/Eonasdan/bootstrap-datetimepicker
* @iOsama https://github.com/iOsama
## License
MIT
