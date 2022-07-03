<template>
  <div class="lg:pr-14 pr-4 self-center mt-80 text-left">
    <h2 class="comment" slot="s_comment">
      Various<br />Work Experiences<br />For your Brand
    </h2>
  </div> 
</template>

<script>

export default {
 
}
</script>

<style lang="scss" scoped>
.comment {
    font-family: "Noto Sans KR";
    font-weight: 900;
    font-size: 50px;
    letter-spacing: 0px;
    line-height: 70px;
    -webkit-transition: all 1.7s ease 0.61s;
    transition: all 1.7s ease 0.61s;
    font-family: "Exo", sans-serif;
    &::before {
      content: "";
      transition: left 0.2s cubic-bezier(0.47, 0, 0.745, 0.715),
        width 0.15s cubic-bezier(0.47, 0, 0.745, 0.715),
        opacity 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      height: 1px;
      position: absolute;
      bottom: -20px;
      width: 0;
      height: 0.14em;
      bottom: 0;
      left: 0;
      opacity: 0.5;
    }
  }
  .comment_away {
    color: #000;
  }  
</style>