export function addUser(name) {
    return {
        type: 'ADD_USER',
        user: name
    };
};
