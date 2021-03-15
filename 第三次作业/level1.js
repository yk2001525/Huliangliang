const user = {
    name:"John",
    years: 30
}
// var {name, years, isAdmin} = user;



var name,years,isAdmin;
({name,years,isAdmin} = {name : user.name,years : user.years,isAdmin : "false"})