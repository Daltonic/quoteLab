<template>
  <div class="hero__container">
    <form class="hero__form" :style="{backgroundImage: `url(${require('@/assets/images/search.png')})`}">
      <div class="inner-form">
        <div class="input-field first-wrap">
          <div class="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              ></path>
            </svg>
          </div>
          <input
            id="search"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
        <div class="input-field second-wrap">
          <button class="btn-search" type="button">SEARCH</button>
        </div>
      </div>
      <span class="info">ex. Love, Road, Flower, Garden, House</span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: '@/assets/search.png'
    }
  }
}
</script>

<style scoped>
.hero__container {
    min-height: 50vh;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: poppins,sans-serif;
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 100%;
    padding: 15px;
}

.hero__form {
    width: 100%;
    max-width: 790px;
    padding-top: 24vh;
}

.hero__form .inner-form {
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    box-shadow: 0 8px 20px 0 rgba(0,0,0,.15);
    border-radius: 34px;
    overflow: hidden;
    margin-bottom: 30px;
}

.hero__form .inner-form .input-field.first-wrap {
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    background: #d9f1e3;
}

.hero__form .inner-form .input-field.first-wrap .svg-wrapper {
    min-width: 80px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
}

.hero__form .inner-form .input-field input {
    height: 100%;
    background: 0 0;
    border: 0;
    display: block;
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #000;
}

.hero__form .inner-form .input-field.second-wrap {
    min-width: 216px;
}

.hero__form .info {
    font-size: 15px;
    color: #ccc;
    padding-left: 26px;
}

.hero__form .inner-form .input-field.second-wrap .btn-search {
    height: 100%;
    width: 100%;
    white-space: nowrap;
    font-size: 16px;
    color: #fff;
    border: 0;
    cursor: pointer;
    position: relative;
    z-index: 0;
    background: #00ad5f;
    transition: all .2s ease-out,color .2s ease-out;
    font-weight: 300;
}

.hero__form .inner-form .input-field.second-wrap {
    min-width: 100px;
}

.hero__form .inner-form .input-field {
    height: 68px;
}

@media screen and (max-width: 992px){
    .hero__form .inner-form .input-field {
        height: 50px;
    }
}
</style>
