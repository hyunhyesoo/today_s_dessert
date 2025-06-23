
  $(document).ready(function () {
    $(".goIntro").click(function (e) {
      e.preventDefault();
      window.location.href = "intro.html";
    });

    $(".goCategory").click(function (e) {
      e.preventDefault();
      window.location.href = "category.html";
    });

    $(".searchBtn").click(function (e) {
      e.preventDefault();
      window.location.href = "filter.html";
    });
  });
