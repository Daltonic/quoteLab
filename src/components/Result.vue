<template>
  <div class="result__container">
    <div class="result__card" v-for="n in 6" :key="n">
      <img class="result__image" src="@/assets/images/search.png" alt="Cobra Kai">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.result__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 80%;
    margin: 100px auto;
}

.result__card {
  width: 30%;
  margin-top: 20px;
}

.result__image {
  flex-grow: 1;
  object-fit: contain;
  width: 100%;
  max-height: 250px;
  transition: transform .45s;
  box-shadow: 0 8px 20px 0 rgba(0,0,0,.15);
}

.row_image:hover {
    transform: scale(1.11);
}

@media ( max-width: 768px) {
  .result__card {
    width: 40%;
  }
}

@media ( max-width: 320px) {
  .result__card {
    width: 60%;
  }
}
</style>