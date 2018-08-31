Laravel Nova Persian Datepicker
===============================

## Description

This package adds flexibility to work with Persian/Jalali dates in Laravel Nova resources. It provides two fields, `PersianDate` and `PersianDateTime`.

## Installation and Usage

You may require this package using composer:

```
composer require aloko/nova-persian-datepicker
```

To use these fields, you add the following to your resource's `fields()` method:

```php
use Aloko\PersianDatepicker\PersianDate;
use Aloko\PersianDatepicker\PersianDateTime;

PersianDate::make('date_of_birth'), // For date fields
PersianDateTime::make('check_in') // For datetime fields
```

**NOTE:** Please don't forget to cast your `date` and `datetime` fields in your model class as explained in [Attribute Casting](https://laravel.com/docs/eloquent-mutators#attribute-casting) in Laravel Docs, otherwise these fields will throw casting error.

## How it Works

Under the hood, this package uses the awsome [Babakhani Datepicker](http://babakhani.github.io/PersianWebToolkit/doc/datepicker/) library. Below screenshots are some samples of how this package works.

### Screenshots

#### Persian Date Field

<img src="https://github.com/mustafaaloko/nova-persian-datepicker/blob/master/screenshots/persian-date.png?raw=true">

You can also select gregorian date using the same datepicker.

<img src="https://github.com/mustafaaloko/nova-persian-datepicker/blob/master/screenshots/persian-date-in-en.png?raw=true">

#### Persian Date Time Field

The datetime field will also have a time picker.

<img src="https://github.com/mustafaaloko/nova-persian-datepicker/blob/master/screenshots/persian-datepicker.png?raw=true">

## Methods

You can use `format()` method as below to alter the way dates are displayed. Please note that `format` string must match the standard explained in Babakhani Persian Date [format docs](http://babakhani.github.io/PersianWebToolkit/doc/persian-date#format).

```php

PersianDate::make('date_of_birth')->format('YYYY-MM'), // This will only print year and month
PersianDateTime::make('check_in')->format('hh:mm') // This will only show hours and minutes
```

## To Do

Below are items that needs to or will be improved in future.

- Better locale support
- Make it possible to accept almost all datepicker options available on PHP side for customization

## Special Thanks

- Reza Babakhani [https://github.com/babakhani](https://github.com/babakhani)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
