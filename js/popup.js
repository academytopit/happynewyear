//  присвоение переменной элемента текст
//  const text = document.querySelector('.text-js');
//  разбивка текста на буквы
//  text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
//  let element = document.querySelectorAll('span');
//  for(let i=0; i<element.length;i++){
//     element[i].style.transform = "rotate("+i*18+"deg)";
//  }  

let text = document.getElementById("text");

$('.btn-start').on('click', function() {
   $('.start').addClass('active');
   $('.present_form').addClass('active');
   $('.bg').addClass('active');
});

$('.bg').on('click', function() {
   $('.start').removeClass('active');
   $('.present_form').removeClass('active');
   $('.bg').removeClass('active');
});

$('.present_item1').on('click', function() {
   $('.present_item1').removeClass('active');
   $('.present_item1').removeClass('none');
   $('.present_item2').removeClass('active');
   $('.present_item2').removeClass('none');
   $('.present_item3').removeClass('active');
   $('.present_item3').removeClass('none');


   $('.present_item1').addClass('active');
   $('.present_item2').addClass('none');
   $('.present_item3').addClass('none');

   setInterval(function() {
      $(".chest").attr("src", "./img/chestOpen.png");
   }, 500);

   setInterval(function() {
      $('.present_item_text').removeClass('none');
      $('.present_item1').removeClass('active');
      $('.present_item1').addClass('none');
   }, 2000);

   var typed = new Typed('.present_item_text', {
      strings: [rValue],
      startDelay: 2100,
      shuffle: true,
      typeSpeed: 40
    });
});

$('.present_item2').on('click', function() {
   $('.present_item1').removeClass('active');
   $('.present_item1').removeClass('none');
   $('.present_item2').removeClass('active');
   $('.present_item2').removeClass('none');
   $('.present_item3').removeClass('active');
   $('.present_item3').removeClass('none');

   $('.present_item1').addClass('none');
   $('.present_item2').addClass('active');
   $('.present_item3').addClass('none');

   setInterval(function() {
      $(".chest").attr("src", "./img/chestOpen.png");
   }, 500);

   setInterval(function() {
      $('.present_item_text').removeClass('none');
      $('.present_item2').removeClass('active');
      $('.present_item2').addClass('none');
   }, 2000);

   var typed = new Typed('.present_item_text', {
      strings: [rValue],
      startDelay: 2100,
      shuffle: true,
      typeSpeed: 40
    });
});

$('.present_item3').on('click', function() {
   $('.present_item1').removeClass('active');
   $('.present_item1').removeClass('none');
   $('.present_item2').removeClass('active');
   $('.present_item2').removeClass('none');
   $('.present_item3').removeClass('active');
   $('.present_item3').removeClass('none');

   $('.present_item1').addClass('none');
   $('.present_item2').addClass('none');
   $('.present_item3').addClass('active');

   setInterval(function() {
      $(".chest").attr("src", "./img/chestOpen.png");
   }, 500);

   setInterval(function() {
      $('.present_item_text').removeClass('none');
      $('.present_item3').removeClass('active');
      $('.present_item3').addClass('none');
   }, 2000);

   var typed = new Typed('.present_item_text', {
      strings: [rValue],
      startDelay: 2100,
      shuffle: true,
      typeSpeed: 40
    });

});

function RandArray(array) {
   var rand = Math.random()*array.length | 0;
   var rValue = array[rand];
   return rValue;
}

var myArray = ['Прими свое прошлое без сожалений. Справляйся с настоящим уверенно. Смотри в глаза будущему без страха.', 
'Спроси себя, что из сделанного сегодня приблизит тебя к тому, кем ты хочешь стать завтра.', 
'Вовремя начатые действия помогут вам противостоять судьбе.', 
'Новое путешествие наполнит вашу жизнь непередаваемыми воспоминаниями.', 
'Хорошее время, чтобы завершить старые дела.', 
'Занимайтесь тем, что вы любите. Остальное встанет на свои места.', 
'Примите то, что вы не можете изменить, и вы почувствуете себя лучше.',  
'Все усилия, которые вы прилагаете, в конечном итоге окупятся.',
'Поверьте в себя, и окружающие поверят в вас.', 
'Поздравляем, вы находитесь на верном пути.', 
'Со спокойной душой посвятите себя любимому делу.', 
'Не сходите с пути, который предназначен вам судьбой.', 
'Не стоит себя недооценивать. У вас безграничный потенциал.',
'Неудача - шанс сделать лучше в следующий раз.',
'Отдохните, вы этого заслуживаете.', 
'Прислушивайтесь к окружающим. Идеи появляются везде.', 
'Никогда не бойся. Конец одного означает начало чего-то нового.'];

var rValue = RandArray(myArray);

// document.querySelector('#text').innerHTML = rValue;