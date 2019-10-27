let modal= document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

//функции для отображения модального окна
btn.onclick = () =>{
    modal.style.display="block";

}
span.onclick = () =>{
    modal.style.display="none";

}
window.onclick = (event) =>{
    if(event.target == modal){
        modal.style.display = "none"
    }
}

//создание "полотна", где будут располагаться массивы
let cns = document.getElementById('canvas');
let context = cns.getContext('2d');

//основной текст на станице
document.write("<h1 class = 'text'>Неотсортированный массив</h1>");
document.write("<h2 class = 'text2'>Отсортированный массив<br>Щелкни мышкой по экрану и посмотри, как изменится массив</h2>");
document.write("<p class = 'text3'>Процесс</p>");


//создание неотсортированного массива
let arrUnsort = [1, 5, 2, 3];
for(let i = 0; i< arrUnsort.length; i++){
    arrUnsort[i] = new Image();
}

//создание отсортированного массива
let arrSort = [1, 5, 2, 3];

for(let i = 0; i<arrSort.length;i++){
    arrSort[i] = new Image();
}

//создаю красную стрелку
document.write( "<img class = 'arrow' src = 'image/10.png' width = '60'><img>" );

//каждому элементу массива - свое изображение
arrUnsort[0].src = 'image/1.png';
arrUnsort[1].src = 'image/5.png';
arrUnsort[2].src = 'image/22.png';
arrUnsort[3].src = 'image/33.png';

arrSort[0].src = 'image/1.png';
arrSort[1].src = 'image/5.png';
arrSort[2].src = 'image/22.png';
arrSort[3].src = 'image/33.png';

//функция,которая рисует изобажения
let draw = () =>{
    context.drawImage(arrUnsort[0], 200, 100);
    context.drawImage(arrUnsort[1], 350, 100);
    context.drawImage(arrUnsort[2], 500, 100);
    context.drawImage(arrUnsort[3], 650, 100);
    context.drawImage(arrSort[0], 200, 800);
    context.drawImage(arrSort[3], 350, 800);
    context.drawImage(arrSort[1], 650, 800);
    context.drawImage(arrSort[2], 800, 800);
    context.drawImage(arrSort[0], 200, 1000);
    context.drawImage(arrSort[1], 350, 1000);
    context.drawImage(arrSort[3], 650, 1000);
    context.drawImage(arrSort[2], 800, 1000);
    context.drawImage(arrSort[0], 200, 1200);
    context.drawImage(arrSort[1], 350, 1200);
    context.drawImage(arrSort[2], 650, 1200);
    context.drawImage(arrSort[3], 800, 1200);
    context.drawImage(arrSort[0], 200, 400);
    context.drawImage(arrSort[1], 350, 400);
    context.drawImage(arrSort[2], 500, 400);
    context.drawImage(arrSort[3], 650, 400);   

}
arrSort[1].onload = draw;
arrSort[2].onload = draw;
arrSort[3].onload = draw;



//функция для сортировки массива пузырьком

let BubbleSort = () => {
   
   let count = arrSort.length-1;
   let interval = setInterval(function(){
   for (let i = 0; i < arrSort.length; i++) {
       for(let j = 0; j < count-i; j++){
           if(arrSort[j].src > arrSort[j+1].src){
               let max = arrSort[j].src;
               arrSort[j].src = arrSort[j+1].src;
               arrSort[j+1].src = max;
           }
       }
    }
       
   }, 1000);

}   

//при клике вызывается функция BubbleSort
document.addEventListener("click", BubbleSort , false);










  

















 