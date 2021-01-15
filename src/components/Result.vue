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
import { mapGetters, mapActions} from 'vuex'

export default {
  name: "app-result",
  data() {
    return {
      page: 1,
      loading: false,
    };
  },
  created() {
    this.onLoadImages()
  },
  methods: {
    ...mapActions([
      'setSelected',
      'loadImages'
    ]),

    onSelected(image) {
      this.setSelected(image);
    },

    onLoadImages() {
      this.loading = true
      this.loadImages()
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
    },

    loadMore() {
      this.loading = true
      this.loadImages({page: ++this.page})
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
    }
  },
  computed: {
    ...mapGetters([
      'images',
      'selected'
    ])
  }
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