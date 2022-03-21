// ex. 1

const words = [{value: "bunu"}, {value: "adoi"}, {value: "ztrei"}]
words.sort( (item1, item2)  => {
    
        if (item1.value < item2.value) {
          return -1;
        }
        if (item1.value > item2.value) {
          return 1;
        }
        return 0;
      
}).filter(({value}) => value.charAt(0) === "a" || value.charAt(0) === "b").forEach(({value}) => console.log(value))


// ex. 2

class Button {
    constructor(color, text) {
        this.color = color
        this.text = text
    }
    setColor(changeColor){
        this.color = changeColor
    }
    render(){
        return `<button style="color: ${this.color}">${this.text}</button>`
    }
}

//const clickButton = new Button ("red", "hello")
//document.body.innerHTML = clickButton.render()

// hw1:  cu ajutorul forEach() sa se afiseze butoanele intr un div

let buttons = [new Button ("red", "hello"), new Button ("black", "hello"), new Button ("blue", "hello")]
buttons.forEach(button => {
    //console.log(button)
    document.getElementById("newButtons").innerHTML += button.render()
})

// hw*:  sa se afiseze doar butoanele care sunt doar de o anumita culoare
const result = buttons.filter(button => button.color ==="red").forEach(element =>{
    document.getElementById("sameColor").innerHTML += element.render()
})
//console.log(result)


// ex. 3

const executor = (cb) => {
    //console.dir(executor)
    //console.log(cb)
    let r = cb(2)
    console.log(`${executor.name} is executing...`, r)
}
executor((value) =>{
    console.log(value, "callback executing")
    return value*10
})

// hw2: de desenat diagrama schimb de date intre doua functii, o functie o apeleaza pe cealalta

// - Declare function called executor
// - Assign as parameter another function cb
// - Store cb function as a value, with 2 passed as an argument in a variable r --> [this will be used in the invoked function]
// - Since executor function is a first class object, we can access .name property
//---
// - Invoke the executor function and as an argument pass another callback function wich can then be invoked during the execution of that higher order function (that it is an argument of).



// ex. 4 

const callbacks = [];

callbacks.push(() => {
    console.log('first function');
})

callbacks.push(() => {
    console.log('second function');
})
//callbacks[0]()
callbacks.forEach((item) => item())

// hw3: gasiti o solutie in js prin care sa blocati modificarea ulterioara a array ului
// hint* mai intii cu un obiect literal, dupa care array
 Object.freeze(callbacks)
