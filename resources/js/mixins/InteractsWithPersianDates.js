import { InteractsWithDates } from 'laravel-nova'

export default {
    mixins: [InteractsWithDates],

    methods: {
        /**
         * Convert the given field's gregorian date to persian date. This method
         * also handles timezone conversion.
         */
        convertToPersianDate(value, format='YYYY-MM-DD hh:mm:ss a') {
            if (! value) {
                return value
            }
            
            let gregorianDate = this.fromAppTimezone(value)
            
            return new persianDate(moment(gregorianDate).toDate()).format(format)
        }
    }
}