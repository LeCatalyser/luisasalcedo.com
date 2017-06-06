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
$(".typed").typed({
  strings: ["developer", "operations nerd", "counselor"],
  typeSpeed: 0,
  loop: true,
  backDelay: 3000
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
