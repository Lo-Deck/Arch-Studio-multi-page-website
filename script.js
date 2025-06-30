
/* OPEN CLOSE MENU */

const btnMenu = document.querySelector('.button-menu');

let isMenuClicked = false;

btnMenu.addEventListener('click', () => {

    isMenuClicked = !isMenuClicked;

    if(isMenuClicked){
        document.querySelector('.menu').style.display = 'block';
        document.querySelector('.background').style.display = 'block';
    }
    else{

        document.querySelector('.menu').style.display = 'none';
        document.querySelector('.background').style.display = 'none';
    }

});



/* FORM */

if(document.querySelector('.contact')){

    const myForm = document.querySelector('#myForm');
    const formInputs = myForm.querySelectorAll('input, textarea'); 

    formInputs.forEach( (input, index) => {

        input.addEventListener('input', () => {
            input.classList.remove('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = '';

        });

    });


    function validateInput(input, index){

        if (input.validity.valueMissing) {
            input.classList.add('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = `This field is required`;
            return false;
        }

        if (input.type === 'email' && input.validity.typeMismatch) {
            input.classList.add('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = `Not a valid email address`;
            return false;
        }

        if (input.validity.tooShort) {
            input.classList.add('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = `Input too short`;
            return false;
        }

        if (input.validity.tooLong) {
            input.classList.add('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = `Input too long`;
            return false;
        }

        input.classList.remove('error-input');
        document.querySelectorAll('.container-input span.error')[index].textContent = '';
        return true;

    }            


    myForm.addEventListener('submit', (event) => {

        formInputs.forEach( (input, index) => {

            if (!validateInput(input, index)) {
                event.preventDefault(); 
            }
            else{
                console.log('form submit');
                event.preventDefault(); 
            }

        });


    });
    
}



/* CAROUSEL */

if(document.querySelector('.home')){

    const itemCarousel = document.querySelectorAll('.item');
    const linkCarousel = document.querySelectorAll('.carousel a');

    linkCarousel.forEach( (item, index) => {

        item.addEventListener('click', () => {

            document.querySelector('.container-anim-carousel').style.transform = `translateX(${  ( -1110 / 16 - 80 / 16 ) *  ( Number(item.children[0].textContent) - 1 )  }rem)`;

            itemCarousel[index].classList.add('selected');      
            
            for(let i = 0; i < itemCarousel.length; i++){

                if(i !== index){
                    itemCarousel[i].classList.remove('selected');
                }

            }

        });

    });

}



/* MAP */

if(document.querySelector('.contact')){


    let map;

    if(window.innerWidth < 1440){

        map = L.map('map', { scrollWheelZoom: false }).setView([34.556, -93.076], 5);

    }
    else{

        map = L.map('map', { scrollWheelZoom: false }).setView([34.556, -93.076], 6);

    }

    // const map = L.map('map', { scrollWheelZoom: false }).setView([34.556, -93.076], 6);


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);    


    const mainOffice = L.marker([36.16237, -86.75878]).addTo(map);
    mainOffice.bindTooltip(
        `<b>Main Office</b><br>1892 Chenoweth Drive TN`,
        {
            permanent: false,
            direction: 'top',
            offset: [0, -10]
        }
    );


    const secondOffice = L.marker([32.70994, -96.84251]).addTo(map);
    secondOffice.bindTooltip(
        `<b>Second Office</b><br>3399 Wines Lane TX`,
        {
            permanent: false, // Tooltip will hide when not hovered
            direction: 'top', // Position the tooltip above the marker
            offset: [0, -10] // Adjust offset if needed
        }
    );


    const secretOffice = L.marker([49.309906, 2.728861]).addTo(map);
    secretOffice.bindTooltip(
        `<b>My Office</b><br>I am here`,
        {
            permanent: false,
            direction: 'top',
            offset: [0, -10]
        }
    );



    const btnMap = document.querySelectorAll(".button-map");
    const mapDiv = document.querySelector("#map");

    btnMap.forEach( (item, index) => {

        item.addEventListener("click", () => {

            mapDiv.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            if (index === 0){ 
                map.setView(mainOffice.getLatLng(), 10);
            }

            else{
                map.setView(secondOffice.getLatLng(), 10);
            }

        });


    });


    [mainOffice, secondOffice, secretOffice].forEach((item) => {

        item.on("click", () => {
            map.setView(item.getLatLng(), 10);
        })

    });



    /* ZOOM MAP */

    if(window.innerWidth >= 768){

        const textOnMouseMove = document.querySelector(".text-mouse-map-hover");

        mapDiv.addEventListener('mousemove', (event) => {

            textOnMouseMove.style.display = 'inline-block';
            textOnMouseMove.style.left = event.clientX + 'px';
            textOnMouseMove.style.top = event.clientY + 'px';

        });


        mapDiv.addEventListener('mouseout', () => {
            textOnMouseMove.style.display = 'none';
        });


        document.addEventListener('keydown', (event) => {

            if (event.key === 'Control') { 
                map.scrollWheelZoom.enable();
            }

        });

        document.addEventListener('keyup', (event) => {

            if (event.key === 'Control') { 
                map.scrollWheelZoom.disable();
            }

        });

    }


}


