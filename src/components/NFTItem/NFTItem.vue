<template>

    <div class="nft-container">

        <div class="img-container">
            <img :src="require( `../../assets/nft-pictures/${item.image}.png`)" alt="image"/>
        </div>

        <div class="details">

            <div>
                <h5>{{item.name}}</h5>
                <span>By <b>{{item.artist}}</b></span>
            </div>

            <div>
                <div>{{item.price}}STX</div>
                <div>{{item.price}}$</div>
            </div>

        </div>

    </div>

</template>


<script>

export default {
  name: 'NFTItem',
  props: {
      item: Object
  },
}
</script>


<style>
.nft-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 255px;
    height: 319px;
    background: rgba(129, 129, 129, 0.12);
    border-radius: 5%;
    margin-top: 20px;
}
.img-container img{
    height: 100%;
    width: 100%;
    object-fit: contain
}
.details{
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

</style>