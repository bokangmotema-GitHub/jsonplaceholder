import supertest from 'supertest';
const  request = supertest ('https://jsonplaceholder.typicode.com/');
import {expect} from 'chai';


describe('users', () =>{
    
    /**
     * Searching for all Users and get user id
     * And Adding the Async Handler
     */
    it('GET /users', async () =>{
        // Handle async behavior
       const res = await request.get('users');
        expect(res.body).to.be.not.empty;
    });

    /**
     * Writng a Negative/Failing Test fetch empty users
     * Thsi is to test if the Terminal will fail as expect fro negative tests
     * And Tests are passing sucessfull. 
     */
    it('GET /users with failing Test', async () =>{
        // Handle async behavior
       const res = await request.get('users');
        expect(res.body).to.be.empty;
    });
    
    /**
     * Test Searching for specific username "Delphine" using user id
     * And Adding the Async Handler
     */
    it('GET /users/:id', async () =>{

        // Handle async behavior
        const res = await request.get('users/9');
        expect(res.body.id).to.be.eq(9);
    });
});