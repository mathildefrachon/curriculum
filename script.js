 const template = document.querySelector('.box_template').content;
 let mainCoreAreas = document.querySelector('.main_box_ca');
let box1 = document.querySelector('.box1');
let box_overview = document.querySelector('.box_overview');
 //LEFT NAV VARS

 let left_nav = document.querySelector('.left_nav');

let overview_link = document.querySelector("#overview_link");
 let business_link = document.querySelector('#business_a');
 let design_link = document.querySelector('#des_vis_a');
 let inter_link = document.querySelector('#int_dev_a');
 let comun_link = document.querySelector('#com_pre_a');
let overview_button = document.querySelector("#overview_button");
 let business_button = document.querySelector('#business_button');
 let design_button = document.querySelector('#design_button');
 let inter_button = document.querySelector('#inter_button');
 let commun_button = document.querySelector('#commun_button');
 var counter = -1;

 function fetchthatBastard() {
     fetch("data.json").then(e => e.json()).then(data => buildCoreAreas(data));
     console.log("vai");

 }

 business_link.addEventListener('click', choose1);
 inter_link.addEventListener('click', choose2);
 comun_link.addEventListener('click', choose3);
 design_link.addEventListener('click', choose4);

 function choose1() {
     counter = 1;
     showContent();
 }

 function choose2() {
     counter = 2;
     showContent();
 }

 function choose3() {
     counter = 3;
     showContent();
 }

 function choose4() {
     counter = 4;
     showContent();
 }

 function showContent() {

     switch (counter) {
         case 1:
             box1.classList.remove('hide');
             box_overview.classList.add('hide');
             break;

         case 2:
             box1.classList.remove('hide');

             break;

        case 3:
             box1.classList.remove('hide');

             break;

        case 4:
             box1.classList.remove('hide');

             break;


     }
 }




 function buildCoreAreas(core) {
     console.log(core.coreAreas);

     core.coreAreas.forEach(elem => {

         console.log("entraste?")
         let clone = template.cloneNode(true);
         let box1 = clone.querySelector(".box1");
         let box2 = clone.querySelector(".box2");
        let button_slide = clone.querySelector(".arrow").addEventListener('click', ()=>{
            box1.classList.toggle('hide');
            box2.classList.toggle('hide');
        });

         clone.querySelector('.content_text').textContent = elem.content;
         console.log(elem.content);

         clone.querySelector('.skills_text').textContent =

             clone.querySelector('.knowledge_text').textContent = "will fetch";

         clone.querySelector('.competencies_text').textContent = "fetch";
         mainCoreAreas.appendChild(clone);

     });

     core.semesterStructure.forEach()
 }
