<template>
    <panel-item :field="field">
        <template slot="value">
            <p v-if="field.value" class="text-90 d-rtl text-left">{{ localizedDateTime }}</p>
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
        localizedDateTime() {
            return this.convertToPersianDate(this.field.value)
        }
    }
};
</script>

<style scoped>
.d-rtl {
    direction: rtl;
}
</style>
