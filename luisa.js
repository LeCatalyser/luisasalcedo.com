const currentPage = {
  currentPage: "homePage"
};
$(".link a").on("click", function(event) {
  const page = $(event.currentTarget).attr("page");
  console.log(page);
  $("section").css("display", "none");
  $(page).css("display", "block");
  console.log("is it working?");
});
