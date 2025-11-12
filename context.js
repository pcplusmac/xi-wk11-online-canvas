
const objA = {
    name:"aa",
    age: 18   
}

const objB = {
    name:"bb",
    age: 23
}
const objC = {
    name:"cc",
    age: 56
}
const objD = {
    name:"dd",
    age:48   
}

function someFunc(food, sport) {
    console.log(`the object name is: <${this.name}>; \nthe age of this object is "${this.age}"; \nI love ${food};\tmy favourite sport is ${sport}`)
}

someFunc.call(objA,"KFC","SOCCER")
someFunc.apply(objD,['Rice','basketball'])
someFunc.bind(objB,"PIZZA","RUGBY")() // note: with the (), someFunc will not be invoked. 
// you can alos save the bind to a variable to invoke later whenever you like. 
const newFuncBind = someFunc.bind(objC,'Macas','waterball','blue')
newFuncBind()
