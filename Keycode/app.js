const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {  
    console.log(event);
// this triggers the event to happen and below adds that on keydown the properties of the key are shown in console

    const key = event.key;  // the value of key is taken when the event (keydown) happens (a = key: "a")
    const keyCode = event.keyCode; // the value of keyCode is taken when the event (keydown) happens  (a = keyCode: 65)
    const code = event.code; // the code is taken when the event (keydown) happens  (a = "KeyA")

    // each of these divs represent a small box with the result, the small tag adds text to describe the result
    // for key there's an added if statement, written down in a different way to practice syntax
    // IFA === B ?(then) DOTHIS :(otherwise) DO THIS
    insert.innerHTML = `
        <div class=keyinfo>
            <small id="press">You pressed: ${event.key === " " ? "Space" : key}<br>Here's some useful info</small>
        </div>
        <div class="key">  
            ${event.key === " " ? "Space" : key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${code}
            <small>event.code</small>
        </div>
    `; 
});