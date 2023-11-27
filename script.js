
'use strict';

const pics = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.jpeg',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.jpeg',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.png',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.jpeg',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const { createApp } = Vue

createApp({
    data() {
        return {
            pics: pics,
            currentIndex: 0,
        };
    },
    methods: {
        next() {
            console.log('click next');
            this.currentIndex++;

            if(this.currentIndex > this.pics.length - 1){
                this.currentIndex = 0;
            }
        },
        prev() {
            console.log('click prev');
            this.currentIndex--;
            
            if(this.currentIndex < 0){
                this.currentIndex = this.pics.length - 1;
            }
        },
        changeImage(pic) {
            this.currentIndex = this.pics.indexOf(pic);
        },   
        autoplayOn() {
            this.autoplayInterval = setInterval(() => {
                this.next();
            }, 3000);
        },
    
        autoplayOff() {
            clearInterval(this.autoplayInterval);
        },
        created() {
            this.autoplayOn();
        },
    }
}).mount('#app');
