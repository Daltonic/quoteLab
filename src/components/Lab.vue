<template>
  <div class="lab__container">
    <div class="lab__card">
      <p>
        In a world mostly wiped out by the plague and embroiled in an elemental
        struggle between good and evil, the fate of mankind rests on the frail
        should...
      </p>
      <small>Nicolas Tesla</small>
    </div>
    <div class="lab__tools">
        <h4>Eith Quote</h4>
        <input class="lab__form" type="text" placeholder="Your name">
        <textarea class="lab__form" placeholder="Remember, be nice!" cols="30" rows="10" maxlength="50"></textarea>
        <button class="lab__btn">Capture</button>
    </div>
  </div>
</template>

<script>
export default {};
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
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/skyscrapers.jpg);
  background-size: cover;
  width: 300px;
  height: 400px;
  border-radius: 9px;
  padding: 20px;
  object-fit: contain;
  transition: transform .45s;
  color: white;
  box-shadow: 0 8px 20px 0 rgba(0,0,0,.15);
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
    box-shadow: 0 8px 20px 0 rgba(0,0,0,.15);
}

.lab__btn {
    border: none;
    cursor: pointer;
    padding: 10px;
    background: white;
    border-radius: 9px;
    box-shadow: 0 8px 20px 0 rgba(0,0,0,.15);
    transition: all .2s ease-in-out;
}

.lab__btn:hover {
    background: transparent;
    color: white;
}

@media screen and (max-width: 992px){
    .lab__tools, .lab__card {
        width: 100%;
    }

    .lab__tools {
        margin: 40px 0;
    }

    .lab__card > p {
        padding: 5rem 0;
    }
}
</style>