$(function() {
  const currentPage = {
    currentPage: "homePage"
  };
  $(".link a").on("click", function(event) {
    // const page = $(event.currentTarget).attr("page");
    // console.log(page);
    // $("section").css("display", "none");
    // $(page).css("display", "block");
    // console.log("is it working?");
  });
});

$(".link a").click(function(event) {
  event.preventDefault();
  var hash = this.hash;
  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top
    },
    800,
    function() {}
  );
});
