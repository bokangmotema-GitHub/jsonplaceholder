import supertest from 'supertest';
const  request = supertest ('https://jsonplaceholder.typicode.com/');


// Searching for all Users
describe('users', () =>{
    it('GET /users', () =>{
        request
        .get('users').end((err, res) =>{
            console.log(err);
            console.log(res.body);
        });
    });
});