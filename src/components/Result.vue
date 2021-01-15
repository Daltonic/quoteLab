<template>
  <div class="result__container">
    <div
      class="result__card"
      v-for="image in images"
      :key="image.id"
    >
      <img
        class="result__image"
        :src="image.largeImageURL"
        :alt="image.tags"
        :class="{ result_selected: image == selected }"
        @click="onSelected(image)"
      />
    </div>
    <div class="break"></div>
    <button class="result__btn" @click="loadMore" :disabled="loading">{{ loading ? 'Loading...' : 'Load More' }}</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "app-result",
  data() {
    return {
      images: [],
      selected: {},
      page: 1,
      loading: false,
    };
  },
  created() {
    this.loadImages()
  },
  methods: {
    onSelected(image) {
      this.selected = image;
      console.log(image);
    },

    loadImages() {
      this.loading = true
      const key = '4220489-ebd80a6f713e8c5b1283cbe04'
      const uri = `https://pixabay.com/api/?key=${key}&q=yellow+flowers&image_type=photo&pretty=true&safesearch=true&page=${this.page}&per_page=6`
      axios.get(uri)
      .then((response) => {
        this.images = response.data.hits
        this.loading = false
      })
      .catch((error) => {
        console.log(error)
        this.loading = false
      });
    },

    loadMore() {
      ++this.page
      this.loadImages()
    }
  },
};
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
  object-fit: cover;
  width: 100%;
  max-height: 250px;
  min-height: 250px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
  overflow: hidden;
}

.result__image:hover {
  transform: scale(1.11);
  box-shadow: 0 8px 20px 0 rgba(0, 173, 95, 0.3);
  border-radius: 9px;
}

.result_selected {
  transform: scale(1.11);
  box-shadow: 0 8px 20px 0 #ffc107;
  border-radius: 9px;
}

.result_selected:hover {
  box-shadow: 0 8px 20px 0 #ffc107;
}

.result__btn {
  border: transparent;
  cursor: pointer;
  padding: 10px;
  background: #00ad5f;
  color: white;
  border-radius: 9px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
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

@media (max-width: 992px) {
  .result__card {
    width: 40%;
  }
}

@media (max-width: 768px) {
  .result__card {
    width: 90%;
  }
}
</style>