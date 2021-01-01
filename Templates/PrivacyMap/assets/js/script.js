function mostrar(e) {
    if (e.classList.contains("fa-sun-o")) { //if there is a moon
        e.classList.remove("fa-sun-o"); //removes icon moon class
        e.classList.add("fa-moon-o"); //sets sun class
        e.style.color = "#585858";
        document.body.style.background = 'rgb(243, 242, 242)';
        document.querySelector('#userName').style.color = 'rgb(99, 99, 99)';

        let links = document.querySelectorAll('.link');
        // Pega apenas o primeiro do array
        links[0].style.filter = 'grayscale(0%)';
        // pega todos
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(0%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        // Pega apenas o primeiro do array
        circulos[0].style.filter = 'grayscale(0%)';
        // pega todos
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(0%)';
        }

    } else { //senão
        e.classList.remove("fa-moon-o"); //removes icon moon class
        e.classList.add("fa-sun-o"); //sets sun class
        e.style.color = "rgb(225, 225, 0)";
        document.body.style.background = 'rgb(10, 10, 10)';
        document.querySelector('#userName').style.color = '#fff';

        let links = document.querySelectorAll('.link');
        // Pega apenas o primeiro do array
        links[0].style.filter = 'grayscale(0%)';
        // pega todos
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(0%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        // Pega apenas o primeiro do array
        circulos[0].style.filter = 'grayscale(0%)';
        // pega todos
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(0%)';
        }
    }

}