$(document).ready(function () {
  let selectedCards = [];

  $(document).on("click", ".card", function () {
    window.location.href = "detail.html";
  });

   // 삭제 버튼 클릭 시 안내 (현재는 선택 기능이 없으므로 항상 안내만 뜸)
  $(".wishlistDelete").click(function () {
      alert("삭제할 항목을 선택하세요.");
  });

  // 세션스토리지에 임시로 저장된 즐겨찾기 항목 가져와서 카드로 추가
  const temp = sessionStorage.getItem("tempFavorite");
  if (temp) {
    const data = JSON.parse(temp);
    const cardHtml = `
      <div class="card">
        <div class="cardImage">
          <span class="checkIcon"></span>
          <img src="${data.img}" alt="${data.name}">
        </div>
        <h3>${data.name}</h3>
      </div>
    `;
    $(".cardGrid").append(cardHtml);
    sessionStorage.removeItem("tempFavorite");
  }
});