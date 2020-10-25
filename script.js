'use strict';

window.addEventListener('DOMContentLoaded', () => {
    let buttonForStudents = document.querySelector('.firstOne'),
        buttonForTeachers = document.querySelector('.secondOne'),
        mainMenu = document.querySelector('.mainPage'),
        loginPage = document.querySelector('.logInPage'),
        returnButton = document.querySelector('.back'),
        logInFormButtonForStudents = document.getElementById('students'),
        logInFormButtonForTeachers = document.getElementById('professors');


        console.log(logInFormButtonForStudents);

    buttonForStudents.addEventListener('click', (e) => {
        
        e.preventDefault();
        mainMenu.classList.add('hidden');
        loginPage.classList.remove('hidden');
        logInFormButtonForStudents.classList.add('active');
        logInFormButtonForTeachers.classList.remove('active');

    });

    buttonForTeachers.addEventListener('click', () =>{
        
        mainMenu.classList.add('hidden');
        loginPage.classList.remove('hidden');
        logInFormButtonForStudents.classList.remove('active');
        logInFormButtonForTeachers.classList.add('active');

    });


    returnButton.addEventListener('click', () => {
        loginPage.classList.add('hidden');
        mainMenu.classList.remove('hidden');
    });


    logInFormButtonForStudents.addEventListener('click', () => {
        logInFormButtonForTeachers.classList.remove('active');
        logInFormButtonForStudents.classList.add('active');
    });

    logInFormButtonForTeachers.addEventListener('click', () => {
        logInFormButtonForStudents.classList.remove('active');
        logInFormButtonForTeachers.classList.add('active');
    });

});