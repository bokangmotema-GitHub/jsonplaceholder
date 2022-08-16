import supertest from 'supertest';
const  request = supertest ('https://jsonplaceholder.typicode.com/');


// Searching for all Users and get user id
describe('users', () =>{
    it('GET /users', () =>{
        request
        .get('users').end((err, res) =>{
            console.log(err);
            console.log(res.body);
        });
    });

    // Search for username "Delphine" using Id
    it('GET /users/:id', () =>{
        request
        .get('users/9').end((err, res) =>{
            console.log(err);
            console.log(res.body);
        });
    });
});