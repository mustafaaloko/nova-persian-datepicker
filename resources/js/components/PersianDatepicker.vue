<template>
    <div>
        <input
            type="text"
            :name="field.name"
            :value="value"
            :disabled="disabled"
            :placeholder="placeholder"
            ref="persianDatepickerInput"
            class="w-full form-control form-input form-input-bordered d-rtl text-left"
            autocomplete="off"
            @change="onInputChange"
        />

    </div>
</template>

<script>
window.$ = window.jQuery = require('jquery')
window.persianDate = require('persian-date')
require('persian-datepicker/dist/js/persian-datepicker')

export default {
    props: {
        field: {
            required: true,
        },
        value: {
            required: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        dateFormat: {
            type: String,
            default: 'YYYY-MM-DD hh:mm:ss a',
        },
        fieldType: {
            type: String,
            default: 'datetime'
        },
        placeholder: {
            type: String,
            default: () => {
                return new persianDate().format('YYYY-MM-DD hh:mm:ss a')
            }
        }
    },

    data: () => ({ pDatepicker: null }),

    mounted() {
        this.$nextTick(() => {
            this.pDatepicker = $(this.$refs.persianDatepickerInput).pDatepicker({
                format: this.dateFormat,
                initialValue: false,
                timePicker: {
                    meridian: {
                        enabled: true
                    },
                    enabled: this.fieldType == 'datetime'
                },
                onSelect: this.onDatepickerChange
            })
        })
    },

    methods: {
        onDatepickerChange() {
            let selectedUnixDate = this.pDatepicker.model.state.selected.unixDate
            let gregorianDate = new persianDate(selectedUnixDate).toDate()

            this.$emit('change', gregorianDate)
        },

        onInputChange() {
            /**
             * If date input is blank, trigger event to make sure everyone nulls their values.
             */
            if (this.$refs.persianDatepickerInput.value == '') {
                this.$emit('change', '')
            }
        }
    }
};
</script>

<style scoped>
@import '~persian-datepicker/dist/css/persian-datepicker.css';

.d-rtl {
    direction: rtl;
}
</style>
