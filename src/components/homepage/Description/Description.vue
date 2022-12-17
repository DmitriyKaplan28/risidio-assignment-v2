<template>

  <p v-if="description">

    <PrismicRichText :field="description.data.value.data.short_description"/>

  </p>

</template>


<script setup>

import {useSinglePrismicDocument} from "@prismicio/vue";

const description = useSinglePrismicDocument('description')

</script>