Nova.booting((Vue, router) => {
    Vue.component('index-persian-date-time', require('./components/Index/PersianDateTimeField'));
    Vue.component('detail-persian-date-time', require('./components/Detail/PersianDateTimeField'));
    Vue.component('form-persian-date-time', require('./components/Form/PersianDateTimeField'));
    Vue.component('index-persian-date', require('./components/Index/PersianDateField'));
    Vue.component('detail-persian-date', require('./components/Detail/PersianDateField'));
    Vue.component('form-persian-date', require('./components/Form/PersianDateField'));
})
