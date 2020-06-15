// window.addEventListener("keydown",checkKeyPress,false);
// function checkKeyPress(key){
//     if(key.keyCode == 65 ){
//         alert("You clicked A")
//     }
//     else(
//         alert("Please click A")
//     )
// }
// window.addEventListener("keyup",checkKey,false);
// function checkKey(key){
//     if(key.keyCode == 65 ){
//         alert("You clicked A")
//     }
//     else(
//         alert("Please click A")
//     )
// }
// window.addEventListener( "keypress" ,checkPress,false);
// function checkPress(key){
//     if(key.keyCode == 97 ){
//         alert("You clicked A")
//     }
//     else(
//         alert("Please click A")
//     )
// }
window.addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));
window.addEventListener("keypress", (event) => alert(`You pressed the ${event.key} character`));
 addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
    console.log('You copied an item!');
    }
    });
 window.addEventListener('click', (event) => {
        if (event.shiftKey) {
        console.log('A Shifty Click!');
        }
    });

    //TOUCH EVENTS
    window.addEventListener("touchend" , () => console.log("touch End")
     );
     window.addEventListener("touchstart" , () => console.log("touch End")
     );
     window.addEventListener("touchcancel" , () => console.log("touch End")
     )
     window.addEventListener("touchleave" , () => console.log("touch End")
     )
     window.addEventListener("touchenter" , () => console.log("touch End")
     )

