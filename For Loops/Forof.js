let resume = {
    Name: "Sankar",
    Age: 29,
    Gender: "Male",
    Hobbies: ["reading", "Writing"],
    Address: {
        City: "Chennai",
        State: "TN",
        Country: "India"    
    },
    Skills: ["HTML", "CSS", "Javascript"],
    education: {
        school: "School"
    }
}
for (let key of Object.keys(resume))
{
    console.log(key, resume[key])
}

