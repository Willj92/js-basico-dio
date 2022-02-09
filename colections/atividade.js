function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Wilson', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jossyane', "User");
usuarios.set('Andre', 'Admin');

console.log(getAdmins(usuarios));