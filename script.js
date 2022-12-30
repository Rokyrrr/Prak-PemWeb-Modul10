var userScore = 0,
    compScore = 0;

$('.choice-sec').click(function(){ 
  var userChoice = $(this).attr('data-choice');
  $('.choice').toggleClass('choice-active');
  $('.fight').toggleClass('fight-active');

  function randomInteger(min,max){
     var rand = min + Math.random() * (max + 1 - min);
     rand = Math.floor(rand);
     return rand;
  }
  var computerChoice = randomInteger(1,3);

  $('.fight-u').removeClass('active1');
  $('.fight-c').removeClass('active1');

  $('.active').toggleClass('active1');
  
  function fight(){
    $('.fight-u').removeClass('active1');
    $('.fight-u[data-choice='+ userChoice +']').toggleClass('active1');

    $('.fight-c').removeClass('active1');
    $('.fight-c[data-choice='+ computerChoice +']').toggleClass('active1');
  }
  setTimeout(fight, 1500);
  
  function outcome(){
    if (userChoice == computerChoice){
      draw();
    }else if(userChoice == 1 && computerChoice == 2){
      compWin();
    }else if(userChoice == 2 && computerChoice == 1){
      userWin();
    }else if(userChoice == 1 && computerChoice == 3){
      userWin();
    }else if(userChoice == 3 && computerChoice == 1){
      compWin();
    }else if(userChoice == 2 && computerChoice == 3){
      compWin();
    }else if(userChoice == 3 && computerChoice == 2){
      userWin();
    }
  }
  setTimeout(outcome, 1500);

  var result = document.getElementsByClassName('result')[0];
  var scoreUser = document.getElementsByClassName('user')[0];
  var scoreComp = document.getElementsByClassName('computer')[0];

  function draw(){
    result.innerHTML = 'Draw';
  }
  function userWin(){
    result.innerHTML = 'User Win!';
    userScore++;
    scoreUser.innerHTML = userScore;
  }
  function compWin(){
    result.innerHTML = 'Computer Win!';
    compScore++;
    scoreComp.innerHTML = compScore;
  }

  setTimeout(function (){
    $('.restart').toggleClass('restart-active');
  },1500);
});

$('.restart').click(function () { 
  $('.choice').toggleClass('choice-active');
  $('.fight').toggleClass('fight-active');
  $(this).toggleClass('restart-active');
});