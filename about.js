document.getElementById("About").innerHTML = `<a class="nav-link activePage border-2 border-bottom" href="about.html">About</a>`


const david_quebenco = `
<h2><span class="orangeText">DAVID</span> QUEBENGCO</h2>
<h6>Group Leader</h6>
<h4 class="pt-5 fst-italic pb-5">
“Learning to code is useful no matter what your career ambitions are.”  <span class="orangeText"> – Arianna Huffington</span>
</h4>`;

const oman_mendiola = `
<h2><span class="orangeText">OMAN RALPH</span> MENDIOLA</h2>
<h6>Group Member</h6>
<h4 class="pt-5 fst-italic pb-5">
“You don’t think your way to creative work. You work your way to creative thinking.” <span class="orangeText"> – George Nelson</span>
</h4>`;

const ej_santosidad = `
<h2><span class="orangeText">ERICK-JOHN </span>SANTOSIDAD</h2>
<h6>Group Member</h6>
<h4 class="pt-5 fst-italic pb-5">
“Design is not just what it looks like and feels like. Design is how it works.” <span class="orangeText"> – Steve Jobs</span>
</h4>`;

const danica_libres = `
<h2><span class="orangeText">DANICA</span> LIBRES</h2>
<h6>Group Member</h6>
<h4 class="pt-5 fst-italic pb-5">
“A user interface is like a joke. If you have to explain it, it’s not that good.” <span class="orangeText"> – Martin LeBlanc</span>
</h4>`;

const charlene_lopez = `
<h2><span class="orangeText">CHARLENE</span> LOPEZ</h2>
<h6>Group Member</h6>
<h4 class="pt-5 fst-italic pb-5">
“Styles come and go. Good design is a language, not a style.” <span class="orangeText"> – Massimo Vignelli</span>
</h4>`;

const onHover = (x) => {

    let id = `name${x}`
    console.log(id)

    if(x === 1){
        document.getElementById("cardFooter1").innerHTML = david_quebenco;   
    }else if(x === 2){
        document.getElementById("cardFooter1").innerHTML = oman_mendiola;
    }else if(x === 3){
        document.getElementById("cardFooter1").innerHTML = ej_santosidad;
    }else if(x === 4){
        document.getElementById("cardFooter1").innerHTML = danica_libres;
    }else if(x === 5){
        document.getElementById("cardFooter1").innerHTML = charlene_lopez;
    }
    
}

const offHover = (x) => {
    let member = `cardfooter${x}`;
    console.log(member)
    document.getElementById("cardFooter1").innerHTML = `<img src="https://media.tenor.com/pw9ZsUdsEYgAAAAj/capoo-blue-cat.gif" class="img-fluid" alt="...">`;
    document.getElementById("cardContainer").setAttribute("class","row d-flex justify-content-between pt-5 cardContainer");
    for(let y = 1 ; y <= 5 ; y++){
        document.getElementById(y).setAttribute("class","col-md-2 card text-bg-dark rounded-0 bg-transparent border-0 rounded-0 bg-transparent border-0");
    }
}

const onHover2 = () => {
    document.getElementById("1").setAttribute("class","col-md-2 card text-bg-dark rounded-0 bg-transparent border-0 cardAbout");
    document.getElementById("2").setAttribute("class","col-md-2 card text-bg-dark rounded-0 bg-transparent border-0 cardAbout");
    document.getElementById("3").setAttribute("class","col-md-2 card text-bg-dark rounded-0 bg-transparent border-0 cardAbout");
    document.getElementById("4").setAttribute("class","col-md-2 card text-bg-dark rounded-0 bg-transparent border-0 cardAbout");
    document.getElementById("5").setAttribute("class","col-md-2 card text-bg-dark rounded-0 bg-transparent border-0 cardAbout");
}

const offHover2 = () => {
    document.getElementById("1").setAttribute("class","col-md-2 card text-bg-dark rounded-0 bg-transparent border-0");
    document.getElementById("2").setAttribute("class","col-md-2 card text-bg-dark rounded-0 bg-transparent border-0");
    document.getElementById("3").setAttribute("class","col-md-2 card text-bg-dark rounded-0 bg-transparent border-0");
    document.getElementById("4").setAttribute("class","col-md-2 card text-bg-dark rounded-0 bg-transparent border-0");
    document.getElementById("5").setAttribute("class","col-md-2 card text-bg-dark rounded-0 bg-transparent border-0");

}

document.getElementById("cardFooter1").addEventListener("mouseover", onHover);
document.getElementById("cardFooter1").addEventListener("mouseout", offHover);

document.getElementById("cardContainer").addEventListener("mouseover", onHover);
document.getElementById("cardContainer").addEventListener("mouseout", offHover);