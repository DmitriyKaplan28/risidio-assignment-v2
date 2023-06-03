<template>

    <div class="items-activity">
      <span>Items</span>
      <span>Activity</span>
    </div>

    <div>
        <div v-if="NFTs && NFTs.length > 0" class="row collection-container">
            <div v-for="(item, index) in NFTs" :key="index" :class="'col-md-' + col ">
              <NFTItem :item="item" />
            </div>
        </div>

        <div v-else  class="row collection-container">
            <div v-for="(item, index) in GenerateNFTData" :key="index" :class="'col-md-' + col" >
              <NFTItem :item="item" />
            </div>
        </div>
    </div>

    <div class="collection">
      <h4>You’ve seen the all collection</h4>
      <div>
        <button>Gallery</button>
        <button>Got Back To Top</button>
      </div>
    </div>

</template>


<script>

import NFTItem from "@/components/NFTItem/NFTItem";

export default {
  name: 'Home-NFT-Display',
  data() {
    return{
      NFTs: [],
      col: 3
    }
  },
  components: {
    NFTItem
  },
  mounted () {
  },
  created () {
    window.addEventListener('resize', this.checkScreen)
  },
  methods: {
    checkScreen () {

      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 600) {
        this.NFTs = this.GenerateNFTData.slice(0, 3)
        this.col = 12
      }else if (this.windowWidth > 600 && this.windowWidth < 930) {
        this.NFTs = []
        this.col = 6
      }else if(this.windowWidth > 930 && this.windowWidth < 1180){
        this.col = 4
      }else{
        this.col = 3
      }
    },
  },
  computed: {
    GenerateNFTData() {
      const NFTs = []
      for(let i =1; i<= 12; i++){
        const randomId = Math.floor(Math.random() * 100)
        const rndInt = Math.floor(Math.random() * 5) + 1
        NFTs.push({
          id: randomId,
          name: `NFT-${i}`,
          artist: "Unknown Artist",
          price: 100,
          image: rndInt
        })
      }
      return NFTs
    }
}
}

</script>


<style scoped>

  .collection-container{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 20px 90px 90px 90px;
  }
  .items-activity{
    display: flex;
    justify-content: center;
    gap: 80px;
    margin: 50px 80px 0 60px;
    width: 90%;
    border-bottom: 1px solid lightgray;
  }

  .items-activity span:hover{
    color: #50B1B5;
    border-bottom: 3px solid #50B1B5;
    cursor: pointer;
  }

  .collection{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .collection button{
    background:rgba(80, 177, 181, 0.1);
    border-radius: 22px;
    font: normal normal bold 11px/14px Montserrat;
    color: #5FBDC1;
    width: 141px;
    height: 43px;
    margin-right: 20px;
    border: none;
  }

  .collection button:hover{
    background:rgba(80, 177, 181, 1);
    color: white;
  }
  @media (max-width: 428px) {
    .items-activity{
      margin: 60px 0 0 0;
      width: 100%;
    }
    .collection div{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .collection-container{
      padding: 20px 72px 72px 72px;
      align-items: center;
      justify-content: center;
    }
  }

</style>