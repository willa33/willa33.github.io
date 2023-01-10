//當按鍵是data="add"，數字增加，按鍵是data="minus"時，數字減少
$(".count-btn").click(function () {
  //attr()=>屬性，點擊時判斷屬性是什麼
  var btnType = $(this).attr("data");
  //取input的值，以方便做運算
  var inputVal = $("#chart").val();
  //if點下去的按鍵是add，數字加一
  if (btnType == "add") {
    //input id＝>addResult的Valuer加一
    $("#chart").val(parseInt(inputVal) + 1);
  } else if (btnType == "minus" && inputVal > 1) {
    $("#chart").val(parseInt(inputVal) - 1);
  }
});
/*
$("button").click(function () {
  var inputVal = $("#chart").val();
  var cartVal = Number($(".cart").get("data-count") || 0);
  $(".cart").addClass("on");
  cartVal.setAttribute("data-count", cartVal + 1);
  //$("data-count").val(parseInt(inputVal) + cartVal);
});
*/
var cart = document.querySelector(".cart");
var add = document.getElementsByClassName("add");

for (but of add) {
  but.onclick = (e) => {
    var inputVal = $("#chart").val();
    var item = Number(cart.getAttribute("data-count") || 0);
    cart.setAttribute("data-count", item + parseInt(inputVal));
    $(".cart").addClass("on");
  };
}

$(".add").click(function () {
  alert("已成功加入購物車車！！！");
  $("#chart").val(1);
});

const hamburger = document.querySelector(".hamburger");
const allMenu = document.querySelector(".allMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  allMenu.classList.toggle("active");
});
