function event(time) {
  if (window.location.origin.includes("youtube.com")) {
    setTimeout(() => {
      let contents = document.querySelector("div#contents");
      if (contents) {
        contents.style.display = "none";
      }
    }, time);

    let video = document.querySelector("video");
    if (video) {
      video.addEventListener("ended", function (e) {
        let miniRecs = document.querySelector(".html5-endscreen");
        if (miniRecs) {
          miniRecs.style.display = "none";
        }
      });
    }
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

  const URL_TO_REDIRECT =
    "https://www.aiberry.com/info/dark-side-instagram-negatively-impacts-mental-health#:~:text=Instagram%20specifically%20can%20cause%20feelings,or%20anxious%20about%20our%20lives.";
  if (window.location.origin.includes("instagram.com")) {
    setTimeout(() => {
      window.location.replace(URL_TO_REDIRECT);
    }, 100000);
  }
});

window.addEventListener("popstate", function () {
  event(6000);
  if (window.location.href.includes("youtube.com/shorts/")) {
    setTimeout(() => {
      window.location.replace("https://www.youtube.com/");
    }, 6000);
  }
});
