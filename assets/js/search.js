(function () {
  var input = document.getElementById("poem-search");
  var list = document.getElementById("poem-list");
  var noResults = document.getElementById("no-results");
  if (!input || !list) return;

  var items = Array.prototype.slice.call(list.querySelectorAll("li"));

  input.addEventListener("input", function () {
    var q = input.value.trim().toLowerCase();
    var visibleCount = 0;

    items.forEach(function (item) {
      var haystack = item.getAttribute("data-search") || "";
      var match = haystack.indexOf(q) !== -1;
      item.style.display = match ? "" : "none";
      if (match) visibleCount++;
    });

    noResults.style.display = visibleCount === 0 ? "block" : "none";
  });
})();
