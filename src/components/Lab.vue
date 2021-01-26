<template>
  <div class="lab__container">
    <div
      ref="capture"
      :style="{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url(${image}) no-repeat center center / cover`,
      }"
      class="lab__card"
    >
      <p>{{ quote }}</p>
      <small>{{ name }}</small>
    </div>
    <div class="lab__tools">
      <h4>Eith Quote</h4>
      <textarea
        class="lab__form"
        placeholder="Type your quote here, be nice!"
        cols="30"
        rows="10"
        v-model="quote"
        maxlength="150"
      ></textarea>
      <input
        class="lab__form"
        type="text"
        placeholder="Your name"
        v-model="name"
      />
      <button class="lab__btn" @click="onCapture" :disabled="capturing">
        {{ capturing ? "Capturing..." : "Capture" }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import domtoimage from "dom-to-image-more";

export default {
  name: "app-lab",
  data() {
    return {
      name: "",
      quote: "",
      image: "",
      capturing: false,
    };
  },
  methods: {
    ...mapMutations(["setImage"]),
    onCapture() {
      this.capturing = true;
      const capture = this.$refs.capture;

      domtoimage
        .toPng(capture)
        .then((dataUrl) => {
          this.setImage(dataUrl);
          this.capturing = false;
        })
        .catch((error) => {
          this.capturing = false;
          console.error("oops, something went wrong!", error);
        });
    },
  },
  computed: {
    ...mapGetters(["selected"]),
  },
  watch: {
    selected() {
      this.image = this.selected.largeImageURL;
    },
  },
};
</script>

<style scoped>
.lab__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 100%;
  min-height: 448px;
  padding: 40px 50px;
  background-color: #d9f1e3;
}

.lab__card {
  width: 30%;
  width: 300px;
  height: 400px;
  border-radius: 9px;
  padding: 20px;
  object-fit: contain;
  transition: transform 0.45s;
  color: white;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
}

.lab__card > p {
  font-size: 30px;
  font-style: italic;
  margin-bottom: 10px;
}

.lab__card > small {
  font-style: bold;
  float: right;
}

.lab__tools {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 50%;
  background-color: #c0decd;
  border-radius: 9px;
  padding: 20px 50px;
}

.lab__tools > * {
  margin: 10px 0;
  width: 100%;
}

.lab__tools > textarea {
  width: 100%;
}

.lab__form {
  border: none;
  border-radius: 9px;
  padding: 10px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
}

.lab__btn {
  border: none;
  cursor: pointer;
  padding: 10px;
  background: #ffc107;
  color: white;
  border-radius: 9px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
}

.lab__btn:hover {
  background: transparent;
}

@media screen and (max-width: 992px) {
  .lab__tools,
  .lab__card {
    width: 100%;
  }

  .lab__tools {
    margin: 40px 0;
  }

  .lab__card > p {
    padding: 0.5rem 0;
  }
}

@media screen and (max-width: 410px) {
  .lab__card > p {
    font-size: 25px;
  }
}
</style>