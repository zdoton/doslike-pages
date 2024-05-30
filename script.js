//alert(window.navigator.userAgent);
const loadarr = ['|','/','-','\\'];
var index = 0;
var timer = null;
var startIntervalFunc = function() {
	if (!timer) timer = setInterval(execIntervalFunc, 80);
};
var execIntervalFunc = function() {
  loading.textContent = loadarr[index];
  index = index < 3 ? index + 1 : 0;
};
var clearIntervalFunc = function() {
	// setIntervalの停止
	clearInterval(timer);
  timer = null;
	index = 0;
  loading.textContent = "b";
};

const textBox = document.getElementById('inputField');
function inputWidthAdjust(){
   //dummyTextBox.textContent = textBox.value;
   //textBox.style.size = textBox.value;
   textBox.setAttribute('size', textBox.value.length != 0 ? textBox.value.length : 1);
}
inputWidthAdjust(); //最初の表示
textBox.addEventListener('input', inputWidthAdjust); //入力される度に幅を設定

// 要素を取得
let element = document.getElementById('startupScreen');
let console = document.getElementById('consoleScreen');
let loading = document.getElementById('loadAnime');

// Wrap every letter in a span
var textWrapper = document.querySelector('.startup .progress-bar .bar1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='bar1'>$&</span>");
textWrapper = document.querySelector('.startup .progress-bar .bar2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='bar2'>$&</span>");
textWrapper = document.querySelector('.startup .progress-bar .bar3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='bar3'>$&</span>");
textWrapper = document.querySelector('.startup .progress-bar .bar4');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='bar4'>$&</span>");

textWrapper = document.querySelector('.console .texting1 .texting');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='texting'>$&</span>");
textWrapper = document.querySelector('.console .texting2 .texting');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='texting'>$&</span>");
textWrapper = document.querySelector('.console .texting3 .texting');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='texting'>$&</span>");

anime.timeline({})
  .add({
    targets: '.startup .uainfo',
    opacity: [0,1],
    duration: 200,
  }).add({
    targets: '.startup .cssinfo',
    opacity: [0,1],
    duration: 200,
  }).add({
    targets: '.startup .progress-bar',
    opacity: [0,1],
    duration: 200,
  }).add({
    targets: '.startup .footerinfo',
    opacity: [0,1],
    duration: 200,
  }).add({
    targets: '.startup .progress-bar .bar1',
    opacity: [0,1],
    duration: 2,
    delay: (el, i) =>  15 * i
  }, '-=400' ).add({
    targets: '.startup .progress-bar .bar2',
    opacity: [0,1],
    duration: 2,
    delay: (el, i) => 15 * i
  }, '-=600').add({
    targets: '.startup .progress-bar .bar3',
    opacity: [0,1],
    duration: 2,
    delay: (el, i) => 15 * i
  }, '-=400' ).add({
    targets: '.startup .progress-bar .bar4',
    opacity: [0,1],
    duration: 2,
    delay: (el, i) => 20 * i,
    endDelay: 400,
    complete: function(anim) {
        element.style.display = 'none';
    }
  }).add({  //console
    duration: 400,
    complete: function(anim) {
        console.style.display = 'block';
    }
  }).add({
    targets: '.console .linkinfo',
    opacity: [0,1],
    duration: 300,
    //animation
    complete: function(anim){
      startIntervalFunc();
    }
  }).add({
    targets: '.console .texting1',
    opacity: [0,1],
    duration: 200,
  }).add({
    targets: '.console .texting1 .texting',
    opacity: [0,1],
    duration: 2,
    endDelay: 200,
    delay: (el, i) =>  80 * i
  }).add({
    targets: '.console .linetext1',
    opacity: [0,1],
    duration: 200,
  }).add({
    targets: '.console .texting2',
    opacity: [0,1],
    duration: 200,
  }).add({
    targets: '.console .texting2 .texting',
    opacity: [0,1],
    duration: 2,
    endDelay: 200,
    delay: (el, i) =>  100 * i
  }).add({
    targets: '.console .image1',
    opacity: [0,1],
    duration: 100,
  }).add({
    targets: '.console .texting3',
    opacity: [0,1],
    duration: 200,
  }).add({
    targets: '.console .texting3 .texting',
    opacity: [0,1],
    duration: 2,
    endDelay: 200,
    delay: (el, i) =>  100 * i
  }).add({
    targets: '.console .map1',
    opacity: [0,1],
    duration: 100,
  }).add({
    targets: '.console .textcursor',
    opacity: [0,1],
    duration: 200,
    complete: function(){
      clearIntervalFunc();
      //document.getElementById("inputField").focus();
      anime({
        targets: '.console .textcursor .cursor',
        loop: 300,
        opacity: [1,0],
        duration: 200,
        delay: 1000,
        direction: 'normal',
      });
    }
  });

  

  