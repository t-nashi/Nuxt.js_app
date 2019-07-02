<template>
  <header class="header">
    <div class="header-inner">
      <h1><a href="/">my-portfolio</a></h1>
      <p><a href="about">自己紹介</a></p>
      <p><a href="jsonload">json読み込み</a></p>
      <p><a href="hogehoge">エラー</a></p>
    </div>
  </header>
</template>
<style scoped lang="scss">
  // @nuxtjs/style-resourcesプラグインインストール後にnuxt.config.js|modules・styleResources内に記述したことにより不要になった
  // @import "~assets/scss/variables";

  .header {
    background-color: $color-gray;
  }

  .header-inner {
    height: 60px;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: inherit;
    }
  }
</style>