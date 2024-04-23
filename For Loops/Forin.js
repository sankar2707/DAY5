let myresume = {
    Name: "Sankar",
    Age: 29,
    Gender: "Male",
    Hobbies: ["reading", "Writing"],
    Address: {
        City: "Chennai",
        State: "TN",
        Country: "India"    
    },
    Skills: ["HTML", "CSS", "Javascript"]
}
for(let key in myresume){
    console.log(key, myresume[key])
}

