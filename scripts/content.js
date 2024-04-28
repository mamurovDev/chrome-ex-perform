function event(time) {
  if (window.location.origin.includes("youtube.com")) {
    setTimeout(() => {
      let contents = document.querySelector("div#contents");
      if (contents) {
        contents.style.display = "none";
      }
    }, time);

    let video = this.document.querySelector("video");
    video.addEventListener("ended", function (e) {
      let miniRecs = document.querySelector(".html5-endscreen");
      if (miniRecs) {
        miniRecs.style.display = "none";
      }
    });
  }
}

window.addEventListener("load", function () {
  event(9000);

  if (window.location.origin.includes("access.epam.com")) {
    let itpuAccount = document.querySelector('[data-alias="itpu"]');
    if (itpuAccount) {
      itpuAccount.click();
    }
  }
});
window.addEventListener("popstate", function () {
  event(6000);
});
