<template>
  <div class="footer__container">
      <div class="footer__copywrite">
        <p>©2021 Data Mockup.</p>
        <small>
            Made With ❤️ by
            <a target="_blank" href="https://github.com/Daltonic">Daltonic 🔥</a>
        </small>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer__container {
        display: inline-block;
        text-align: center;
        width: 100%;
        background: #4d5458;
        padding: 10px;
    }

    .footer__copywrite  {
        color: white;
        padding: 10px 0;
    }

    .footer__copywrite > small > a  {
        color: orange;
        text-decoration: none;
        transition: all .2s ease-in-out;
    }

    .footer__copywrite > small > a:hover  {
        color: green;
    }
</style>