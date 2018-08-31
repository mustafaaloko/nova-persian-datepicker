<template>
    <default-field :field="field">
        <template slot="field">
            <persian-datepicker 
                @change="handleChange"
                :field="field"
                :value="localizedValue"
                :date-format="field.format"
                :placeholder="field.name"
            />
            
            <p v-if="hasError" class="my-2 text-danger">
                {{ firstError }}
            </p>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors, InteractsWithDates } from 'laravel-nova'
import PersianDatepicker from '../PersianDatepicker'
import InteractsWithPersianDates from '../../mixins/InteractsWithPersianDates'
let persianDate = require('persian-date')

export default {
    mixins: [FormField, HandlesValidationErrors, InteractsWithDates, InteractsWithPersianDates],

    components: { PersianDatepicker },

    props: ['resourceName', 'resourceId', 'field'],

    data: () => ({ localizedValue: '' }),

    methods: {
        /*
        * Set the initial, internal value for the field.
        */
        setInitialValue() {
            this.value = this.field.value || ''

            // If the field is in edit mode and has some value, then convert it
            // to persian format and show it on input box.
            if (this.value !== '') {
                this.localizedValue = this.convertToPersianDate(this.field.value)
            }
        },

        /**
        * Fill the given FormData object with the field's internal value.
        */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },

        /**
        * Update the field's internal value.
        */
        handleChange(value) {
            if (value == '') {
                return this.value = ''
            }
            
            this.value = this.toAppTimezone(value)
        }
    }
};
</script>