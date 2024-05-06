let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())

let myCreatedDate=new Date(2024,4,14) // new Date("2024-4-14")
console.log(myCreatedDate);
console.log(myCreatedDate.toString())
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp=Date.now()
//console.log(myTimeStamp.getTime());

let newDate=new Date(2024,4,14) // new Date("2024-4-14")
console.log(newDate.getDay());
