var carrousel = document.getElementById("carrousel");

var news = carrousel.getElementsByClassName("news");

var current = 0;

function showNews() {
  for (var i = 0; i < news.length; i++) {
    news[i].style.display = "none";
  }
  news[current].style.display = "block";
}

function nextNews() {
  current++;
  if (current >= news.length) {
    current = 0;
  }
  showNews();
}

showNews();

var interval = 2000; 

var timer = setInterval(nextNews, interval);

function pauseTimer() {
  clearInterval(timer);
}

function resumeTimer() {
  timer = setInterval(nextNews, interval);
}

carrousel.addEventListener("mouseover", pauseTimer);
carrousel.addEventListener("mouseout", resumeTimer);
