// object literal

let petSalon ={
    name: "The Fashion Pet",
    phone: "555-555-5555",
    workHours: {
        open: "9:00 am",
        close: "9:00 pm",
    },
    address:{
        street: "Palm Ave",
        zip: "92021",
        city: "San Diego"
    },

    pets:[
        {
            
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming"   
        },

        {

            name:"Snowflake",
            age:5,
            gender:"Female",
            breed:"Alaskan Snow",
            service:"Grooming"
        },

        {
         
            name:"Thumper",
            age:2,
            gender:"Male",
            breed:"Netherland Dwarf",
            service:"Nail trim"
        }
    ]

}



function displayFooterInfo(){
    document.getElementById("footer").innerHTML= `<label>${petSalon.name} opens at ${petSalon.workHours.open} to ${petSalon.workHours.close}</label>`;
}
displayFooterInfo();

console.log(petSalon.pets.length); //displaying number of pets
console.log(petSalon.pets[0].name); //displaying the name

console.log(petSalon.pets[1].name);
console.log(petSalon.pets[2].name);