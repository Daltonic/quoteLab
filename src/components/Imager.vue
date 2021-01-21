<template>
  <div class="imager__container">
    <img :src="image" alt="imager" class="imager__image" />
    <div class="imager__btns">
      <a class="imager__btn__download" :href="image" download="quote_result.png"
        >Download</a
      >
      <button class="imager__btn__delete" @click="setImage('')">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "imager",
  methods: {
    ...mapMutations(["setImage"]),
  },
  computed: {
    ...mapGetters(["image"]),
  },
};
</script>

<style scoped>
.imager__container {
  display: grid;
  justify-content: space-around;
  max-width: 100%;
  min-height: 448px;
  padding: 40px 50px;
  background-color: white;
}

.imager__image {
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
}

.imager__btns {
  text-align: center;
}

.imager__btn__download,
.imager__btn__delete {
  border: transparent;
  cursor: pointer;
  padding: 10px;
  border-radius: 9px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  margin: 40px 5px;
  text-decoration: none;
}

.imager__btn__download {
  background: #00ad5f;
  color: white;
}

.imager__btn__delete {
  background: white;
  color: #00ad5f;
}

.imager__btn__download:hover {
  background: white;
  color: #00ad5f;
}

.imager__btn__delete:hover {
  background: #00ad5f;
  color: white;
}
</style>