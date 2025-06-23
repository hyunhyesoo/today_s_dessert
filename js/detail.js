$(document).ready(function () {
    $('.likeBtn').click(function () {
      let countSpan = $(this).find('.likeCount');
      let currentCount = parseInt(countSpan.text());
      countSpan.text(currentCount + 1);
    });

    $('.favoriteIcon').click(function () {
      window.location.href = "favorite.html";
    });

    $("#favoriteBtn").click(function () {
    // 임시 데이터 생성
    const tempData = {
      name: "글레이즈드 도넛",
      img: "imgs/글레이즈드도넛.png"
    };
    // 세션 스토리지에 임시 저장
    sessionStorage.setItem("tempFavorite", JSON.stringify(tempData));
    // favorite 페이지로 이동
    window.location.href = "favorite.html";
  });

    // 💬 댓글창 기능은 미구현
    $('.commentBtn').click(function () {
      alert("댓글 기능은 아직 구현되지 않았습니다 :)");
    });
  });