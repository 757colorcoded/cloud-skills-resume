/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const API_URL = 'https://guodjhls3c.execute-api.us-east-2.amazonaws.com/Prod/experiences';
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            data.forEach(job => {
                const container = document.getElementById("experiences");
                const startDate = `${job.start_month}/${job.start_year}`;
                let endDate = "";
                if (job.end_month === 0 && job.end_year === 0) {
                    endDate = "Present";
                } else {
                    endDate = `${job.end_month}/${job.end_year}`;
                }
                container.innerHTML += `<div class="d-flex flex-column flex-md-row justify-content-between mb-5"><div class="flex-grow-1"><h3 class="mb-0">${job.title}</h3><div class="subheading mb-3">${job.company}</div><p>${job.description}</p></div><div class="flex-shrink-0"><span class="text-primary">${startDate} - ${endDate}</span></div></div>`;
            });
        });
