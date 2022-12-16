<template>
<p v-if="fullDescription">

  <PrismicRichText :field="fullDescription.data.value.data.full_description" />

</p>
</template>

<script setup>

import {useSinglePrismicDocument} from "@prismicio/vue";

const fullDescription = useSinglePrismicDocument('full_description')

</script>

<style scoped>



</style>