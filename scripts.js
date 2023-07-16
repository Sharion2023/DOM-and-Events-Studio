// Write your JavaScript code here.
window.addEventListener("load", function () {

    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground =document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const rocket = document.getElementById("rocket");
    


    takeoff.addEventListener("click", function(event){
    let status = confirm("Confirm that the shuttle is ready for takeoff.")

    if(status === true) {
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        height = Number(spaceShuttleHeight.innerHTML);
        height += 10000;
        spaceShuttleHeight.innerHTML = height;

            }
        })

    landing.addEventListener("click", function(event){

    let popup = alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = ("The shuttle has landed.");
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
    })

    missionAbort.addEventListener("click", function(event) {

        let status = confirm("Confirm that you want to abort the mission.");
        if(status === true) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
        }
    })

    up.addEventListener("click", function(event){

    })

});
// Remember to pay attention to page loading!

