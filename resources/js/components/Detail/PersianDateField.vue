<template>
    <panel-item :field="field">
        <template slot="value">
            <p v-if="field.value" class="text-90 d-rtl text-left">{{ localizedDate }}</p>
            <p v-else>&mdash;</p>
        </template>
    </panel-item>
</template>

<script>
import InteractsWithPersianDates from '../../mixins/InteractsWithPersianDates'

export default {
    mixins: [InteractsWithPersianDates],

    props: ['resourceName', 'field'],

    computed: {
        /**
         * Get the localized and converted to persian date for the field.
         */
        localizedDate() {
            return this.convertToPersianDate(this.field.value, this.field.format || 'YYYY-MM-DD')
        }
    }
};
</script>

<style scoped>
.d-rtl {
    direction: rtl;
}
</style>
