<template>
  <div class="result__container">
    <div class="result__card" v-for="n in images" :key="n" :class="{result_selected: n == selected}">
      <img class="result__image" src="@/assets/images/search.png" alt="Cobra Kai" @click="onSelected(n)">
    </div>
    <div class="break"></div>
    <button class="result__btn">Load More</button>
  </div>
</template>

<script>
export default {
  name: 'app-result',
  data() {
    return {
      images: [1, 2, 3, 4, 5, 6],
      selected: null
    }
  },
  methods: {
    onSelected(item) {
      this.selected = item
      console.log(item)
    }
  }
}
</script>

<style scoped>
.result__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 80%;
    margin: 50px auto;
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
  transition: all .2s ease-in-out;
  box-shadow: 0 8px 20px 0 rgba(0,0,0,.15);
  cursor: pointer;
  overflow: hidden;
}

.result__image:hover {
    transform: scale(1.11);
    box-shadow: 0 8px 20px 0 rgba(0,173,95, .30);
    border-radius: 9px;
}

.result_selected {
  transform: scale(1.11);
    box-shadow: 0 8px 20px 0 #FFC107;
    border-radius: 9px;
}

.result__btn {
    border: transparent;
    cursor: pointer;
    padding: 10px;
    background: #00ad5f;
    color: white;
    border-radius: 9px;
    box-shadow: 0 8px 20px 0 rgba(0,0,0,.15);
    transition: all .2s ease-in-out;
    margin-top: 40px;
}

.result__btn:hover {
    background: transparent;
    color: #00ad5f;
}

.break {
  flex-basis: 100%;
  height: 0;
}

@media ( max-width: 992px) {
  .result__card {
    width: 40%;
  }
}

@media ( max-width: 768px) {
  .result__card {
    width: 90%;
  }
}
</style>