// Object Property Shorthand
// ex 1
const newUser = (id, name, email) => {
    return {
        id, 
        name,
        email,
    };
};

console.log(newUser(54, 'Isa', 'isa@mail.com'));

// ex 2
const getPosition = (latitude, longitude) => {
    return {
        latitude,
        longitude,
    };
};

console.log(getPosition(-20.548, -47.871));