function omikujiexecusion(){
    var fortune=['大吉','中吉','中吉','小吉','小吉','小吉','凶','凶','大凶'];
    var i=Math.floor(9*Math.random());
    var message = fortune[i];
      
    var object = document.getElementById("omikuji");
    object.innerText=message;
    if (i==0){
        object.style.color='red';
    }else{
        object.style.color='black';
    }
    var botan=document.getElementById('botan');
    botan.innerHTML="<button onclick= 'omikujiexecusion()'>もう一度おみくじを引く</button>"
}

