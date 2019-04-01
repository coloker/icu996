<template>
  <div>
    <router-view/>
  </div>
</template>

<style>
  *{
    margin: 0;padding: 0;
  }
  ul{
    list-style: none;
  }
  body{
    color: aliceblue;
    background-color: #de335e;
    padding: 40px;
  }
  .markdown-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: #24292e;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
  }
  div.content {
    margin: 0 auto;
    max-width: 500px;
    padding: 10px;
  }

  .markdown-body.override {
    color: #fff;
  }
  .markdown-body.override a {
    color: #fff;
    text-decoration: none;
  }
  .markdown-body.override blockquote {
    color: #fff;
  }
</style>
