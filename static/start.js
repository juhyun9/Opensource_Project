const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 8; /* 질문 갯수 */
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; /* 유형 갯수  */

function calResult() {
  var pointArray = [ /* 유형 갯수  */
    {name: '1', value: 0, key: 0},
    {name: '2', value: 0, key: 1},
    {name: '3', value: 0, key: 2},
    {name: '4', value: 0, key: 3},
    {name: '5', value: 0, key: 4},
    {name: '6', value: 0, key: 5},
    {name: '7', value: 0, key: 6},
    {name: '8', value: 0, key: 7},
    {name: '9', value: 0, key: 8},
    {name: '10', value: 0, key: 9},
    {name: '11', value: 0, key: 10},
    {name: '12', value: 0, key: 11},
    {name: '13', value: 0, key: 12},
    {name: '14', value: 0, key: 13},
    {name: '15', value: 0, key: 14},
    {name: '16', value: 0, key: 15},
    {name: '17', value: 0, key: 16},
    {name: '18', value: 0, key: 17},
  ]
  for(let i = 0; i < endPoint ; i++){
    var target = qnaList[i].a[select[i]];
    for(let j = 0; j < target.type.length; j++){
      for(let k = 0; k < pointArray.length; k++){
        if(target.type[j] === pointArray[k].name){
          pointArray[k].value +=1;
        }
      }
    }
  }

  /* 동일한 점수의 유형이 나올 때의 구분  */
  var resultArray = pointArray.sort(function (a,b){ 
    if(a.value > b.value){
      return -1;
    }
    if(a.value < b.value){
      return 1;
    }
    return 0
  })

  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult() {
  let point = calResult();
  const resultName = document.querySelector(".resultname");
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement("img");
  const imgDiv = document.querySelector("#resultImg");
  var imgURL = "img/image-" + point + ".png";
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add("img-fluid");
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector(".resultDesc");
  resultDesc.innerHTML = infoList[point].desc;
}

function goResult() {
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450);
  });
  
  calResult();
  setResult();
}

function ImageFadeOut(qIdx, idx) {
  var left = document.querySelector(".leftImage");
  var right = document.querySelector(".rightImage");
  left.disabled = true;
  left.classList.remove("fadeIn");
  left.classList.add("fadeOut");
  right.disabled = true;
  right.classList.remove("fadeIn");
  right.classList.add("fadeOut");

  setTimeout(() => {
    if (qIdx + 1 === endPoint) {
      goResult();
      return;
    } else {
      setTimeout(() => {
        var target = qnaList[qIdx].a[idx].type;
        select[qIdx] = idx;
        for (let i = 0; i < target.length; i++) {
          select[target[i]] += 1;
        }
        goNext(++qIdx);
      }, 450);
    }
  }, 450);
}

function addAnswer(answerText, qIdx, Idx) {
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("my-3");
  answer.classList.add("py-3");
  answer.classList.add("mx-auto");
  answer.classList.add("fadeIn");

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    function () {
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none";
        }
        goNext(++qIdx);
      }, 450);
    },
    false
  );
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    goResult();
    return;
  }

  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }

  var left = document.querySelector(".leftImage");
  var right = document.querySelector(".rightImage");
  var qnaURL = "./img/question/";
  left.src = qnaURL + qIdx + "-A.png";
  right.src = qnaURL + qIdx + "-B.png";

  try {
    left.classList.remove("fadeOut");
    right.classList.remove("fadeOut");
  } catch (e) {
    console.log(e);
  }
  left.classList.add("fadeIn");
  right.classList.add("fadeIn");

  left.addEventListener(
    "click",
    function () {
      var target = qnaList[qIdx].a[0].type;
      ImageFadeOut(qIdx, 0);
    },
    false
  );

  right.addEventListener(
    "click",
    function () {
      var target = qnaList[qIdx].a[1].type;
      ImageFadeOut(qIdx, 1);
    },
    false
  );

  var status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qIdx + 1) + "%";
}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
