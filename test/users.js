import supertest from 'supertest';
const  request = supertest ('https://jsonplaceholder.typicode.com/');
import {expect} from 'chai';


describe('users', () =>{
    
    // Searching for all Users and get user id
    it('GET /users', () =>{
        // Handle async behavior
       return request.get('users').then((res) =>{
            expect(res.body).to.be.not.empty; 
            //  console.log(res.body);
        });
    });
    
    // Test Searching for specific username "Delphine" using user id
    it('GET /users/:id', () =>{

        // Handle async behavior
        return request.get('users/9').then((res) =>{
             expect(res.body.id).to.be.eq(9); 
            //  console.log(res.body);
         });
    }); 
});