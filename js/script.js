




// //Bot UI
// let botui = new BotUI('botui-app');
// botui.message.bot({
//     delay: 1500,
//     loading:true,
//     content: 'Hello!',
// }).then(() => {
//     botui.message.add({
//         delay: 1500,
//         loading:true,
//         content: 'I\'m Håkon.'
//     }).then(() => {
//         botui.message.add({
//             delay: 1800,
//             loading:true,
//             content: 'I\'m a student @ Kristiania University College..'
//         }).then(() => {
//             botui.message.add({
//                 delay: 1800,
//                 loading:true,
//                 content: '..and a part time developer.'
//             }).then(() => {
//                 botui.message.add({
//                     delay: 1800,
//                     loading:true,
//                     content: 'I\'m always looking for exciting projects and opportunities!'
//                 }).then(() => {
//                     botui.action.button({
//                         delay:1800,
//                         loading:true,
//                         action: [
//                             { // show only one button
//                                 text: 'Continue to site!',
//                                 value: 'one'
//                             }
//                         ]
//                     }).then(function (res) { // will be called when a button is clicked.
//                         show();
//                     });
//                 })
//             })
//         })
//     })
//
// });


/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 34,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#018413"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 13,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 170,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
//Bot UI

function show() {

    document.getElementById("bot").className = "animated bounceOutUp";

    setTimeout(function(){
        document.getElementById("bot").style.display = "none";
        document.getElementById("particles-js").className = "animated fadeIn slow";
        document.getElementById("social").style.opacity = "1";
        document.getElementById("buttons").style.opacity = "1";
        document.getElementById("social").className = "container fixed-bottom animated slideInUp slow";
        document.getElementById("buttons").className = "container pt-5 animated slideInDown slow";
        document.getElementById("particles-js").style.opacity = "1";
    }, 1000);





}