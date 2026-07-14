/* =====================================================
   共通フッター
   使い方：
   <footer class="site-footer" id="site-footer"></footer>
   <script>window.SITE_BASE = "../../";</script>  ← ルート(index.html)では "" または省略
   <script src="../../assets/footer.js"></script>
   ===================================================== */
(function () {
  var base = window.SITE_BASE || "";
  var target = document.getElementById("site-footer");
  if (!target) return;

  target.innerHTML =
    '<div class="wrap footer-top">' +
    "<div>" +
    '<div class="footer-brand">ええぞな新居浜</div>' +
    '<p class="footer-tag">にいはまのいい店みつけた! 今日のごはんから、暮らしの相談まで。新居浜のお店・会社を見つけられます。</p>' +
    "</div>" +
    '<div class="footer-cols">' +
    '<div class="footer-col">' +
    "<h4>サイト内のページ</h4>" +
    '<a href="' +
    base +
    'companies/index.html">業種で探す</a>' +
    '<a href="' +
    base +
    'index.html#news">新着情報</a>' +
    '<a href="' +
    base +
    'about.html">このサイトについて</a>' +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="wrap footer-bottom">' +
    "<p>&copy; 2026 ええぞな新居浜</p>" +
    '<p class="footer-credit">写真提供：(一社)新居浜市観光物産協会</p>' +
    "</div>";
})();
