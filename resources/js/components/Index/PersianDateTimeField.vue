<template>
    <div class="d-rtl">
        <span class="whitespace-no-wrap">{{ localizedDateTime }}</span>
    </div>
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
