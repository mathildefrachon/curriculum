const template = document.querySelector('.box_template').content;
let mainCoreAreas = document.querySelector('.main_box_ca');

let left_nav = document.querySelector('.left_nav');

fetch("data.json").then(e => e.json()).then(data => creatCoreAreas(data));

function creatCoreAreas(core) {

    core.coreAreas.forEach(elem => {

        console.log(elem);

        let clone = template.cloneNode(true);
        const box_container = clone.querySelector('.box_container').id = elem.name;
        const a = document.createElement("a");
        const box1 = clone.querySelector('.box1');
        const box2 = clone.querySelector('.box2');
        a.textContent = elem.name;

        a.addEventListener("click", () => filter(elem.name));

        left_nav.appendChild(a);

        let content = clone.querySelector('.content_text').textContent = elem.content;

        elem.learningObjectives.forEach(le => {
            console.log(le);

            let category_title = document.createElement("h2").textContent = le.category;
            console.log("show category title");

            le.learningGoals.forEach(bullet => {
                console.log(bullet);
                let category_text = document.createElement("p").textContent += bullet + "\n";

            });


        });


        mainCoreAreas.appendChild(clone);
    });
}

function filter(area) {
    if (box_container.id == area) {
        box_container.classList.remove('hide');
    } else {
        box_container.classList.add('hide');
    }


}
