var firstWrapper, secondWrapper, wrapper, element1, element2, element3, box;
var element4, element5, element6, element7, element8, element9, element10;
var element11, element12, element13, element14,element15;

firstWrapper = document.querySelector(".wrapper");
secondWrapper = document.querySelector(".wrapper__two");
 box = document.querySelector(".box");

 element1 = 'Lorem First Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'
 element2 = 'Lorem Second Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'
 element3 = 'Lorem Third Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'


 element4 = 'Lorem fourth Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'
 element5 = 'Lorem fifth Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'
 element6 = 'Lorem sixth Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'

 element7 = 'Lorem seventh Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'
 element8 = 'Lorem eight Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'
 element9 = 'Lorem nigth Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'

 element10 = 'Lorem tenth Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'
 element11 = 'Lorem eleveth Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'
 element12 = 'Lorem twevle Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'


 element13 = 'Lorem thirteen Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'
 element14 = 'Lorem fourteen Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'
 element15 = 'Lorem fifteen Text sit amet consectetur adipisicing elit.Autem alias eveniet deleniti recusandae pariatur? Temporibus consequuntur quasi voluptatibus aliquid doloribus sit reiciendis,eos dolorum repellendus pariatur velit amet, repellat nulla?'

var list = [element1, element2, element3, element4, element5, element5, element6, element7,
element8,element9,element10, element11, element12, element13, element14, element15];



secondWrapper.addEventListener("click", function(){

   secondWrapper.style.display = "none";
   firstWrapper.style.display = "block";
});

firstWrapper.addEventListener("click", genRandom);

let  randomArray = [];

function genRandom(){
   let randomNumber = Math.floor(Math.random() * 15);
   // Base requirement
   if(randomArray.length >= 15){
      return console.log("you out of number to guess");
   };
   if(randomArray.includes(randomNumber) == false){
      randomArray.push(randomNumber);
      box.textContent = list[randomNumber];
      console.log(randomNumber, randomArray);

   }else{
      genRandom();
      
   }
   secondWrapper.style.display = "block";
   firstWrapper.style.display = "none";

};




















