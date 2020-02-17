# Demo
See  [Live Demo](http://hijri-datepicker.azurewebsites.net/)

# Getting Started
Bootstrap Hijri Date picker v1.0.0

![sample](http://files.balbarak.com/file/598299)
![sample two](http://files.balbarak.com/file/58464)

## Installation

Download the [latest release](https://github.com/balbarak/bootstrap-hijri-datepicker/releases) or
use css and javascript files in `dist` folder

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

## Docs

See  [Documentation](http://hijri-datepicker.azurewebsites.net/doc)

## Acknowledgements

This project was built from great work done by

* @xosh https://github.com/xsoh/moment-hijri
* @Eonasdan https://github.com/Eonasdan/bootstrap-datetimepicker
* @iOsama https://github.com/iOsama
## License
MIT
