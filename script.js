const panels = [
  "welcome",
  "connection",
  "analysis",
  "memory",
  "message",
  "conclusion",
  "final"
];

function showPanel(id) {
  panels.forEach(panel => {
    document.getElementById(panel).classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
  window.scrollTo(0, 0);
}

function startTransmission() {
  showPanel("connection");

  let progress = 0;
  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");
  const result = document.getElementById("connectionResult");

  const timer = setInterval(() => {
    progress += 2;
    bar.style.width = progress + "%";
    text.textContent = progress + "%";

    if (progress >= 100) {
      clearInterval(timer);

      setTimeout(() => {
        result.classList.remove("hidden");
      }, 500);
    }
  }, 50);
}

function showAnalysis() {
  showPanel("analysis");
}

function showMemory() {
  showPanel("memory");
}

function showMessage() {
  showPanel("message");

  // ==============================
  // WRITE YOUR MESSAGE HERE
  // ==============================
  const message = `Hey Loki,
صعب شرح الامتنان لوجودك في حياتي love u lokiii
 ربنا يديم وجودك في حياتي
  hope اني اكون قدرت استخدم ايدي احسن المرة دي و اعمل حاجة خارج عن المالوف تليق بحد مميز زيك
   كدا كدا مفيش في ابداعك

Happy Birthday ❤️`;

  typeMessage(message);
}

function typeMessage(text) {
  const element = document.getElementById("messageText");
  element.textContent = "";
  let i = 0;

  const timer = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(timer);
    }
  }, 25);
}

function showConclusion() {
  showPanel("conclusion");
}

function finish() {
  showPanel("final");
}
