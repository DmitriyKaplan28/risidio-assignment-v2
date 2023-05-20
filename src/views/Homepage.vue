<template>
    <div>
        <HomeSection1/>
        <HomeNFTDisplay/>
    </div>
</template>


<script>

import HomeSection1 from '@/components/homepage/HomeSection1.vue'
import HomeNFTDisplay from '@/components/homepage/HomeNFTDisplay.vue'

export default {
  name: 'Homepage',
  components: {
    HomeSection1,
    HomeNFTDisplay
  }
}
</script>


<style  scoped>

</style>