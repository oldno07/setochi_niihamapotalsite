/* =====================================================
   共通ヘッダー
   使い方：
   <header class="site-header" id="site-header"></header>
   <script>window.SITE_BASE = "../../";</script>  ← ルート(index.html)では "" または省略
   <script src="../../assets/header.js"></script>
   ===================================================== */
(function () {
  var base = window.SITE_BASE || "";
  var target = document.getElementById("site-header");
  if (!target) return;

  target.innerHTML =
    '<div class="wrap header-inner">' +
    '<a href="' +
    base +
    'index.html" class="brand">' +
    '<span class="brand-text">ええぞな新居浜<small>にいはまの、いい店みつけた!</small></span>' +
    "</a>" +
    '<nav class="nav-links">' +
    '<a href="' +
    base +
    'companies/index.html">一覧から探す</a>' +
    '<a href="' +
    base +
    'index.html#categories">業種で探す</a>' +
    '<a href="' +
    base +
    'index.html#news">新着情報</a>' +
    '<a href="' +
    base +
    'about.html">このサイトについて</a>' +
    "</nav>" +
    "</div>";
})();
