import supertest from 'supertest';
const request = supertest('https://jsonplaceholder.typicode.com/');
let user = {};
const username = 'Delphine';
let userPosts = [];
let comments = [];
const isValidEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};

import { expect } from 'chai';


describe('users', () => {

    /**
     * Searching for all Users and get user id
     * And Adding the Async Handler
     */
    it('GET /users', async () => {
        // Handle async behavior
        const res = await request.get('users');
        expect(res.body).to.be.not.empty;
    });

    /**
     * Writng a Negative/Failing Test fetch empty users
     * Thsi is to test if the Terminal will fail as expect fro negative tests
     * And Tests are passing sucessfull. 
     */
    // it('GET /users with failing Test', async () =>{
    //     // Handle async behavior
    //    const res = await request.get('users');
    //     expect(res.body).to.be.empty;
    // });

    /**
     * Searching for specific username "Delphine" using user id=9
     * And Adding the Async Handler
     */
    // it('GET /users/:id', async () => {

    //     // Handle async behavior
    //     const res = await request.get('users/9');
    //     expect(res.body.id).to.be.eq(9);
    //     console.log(res.body);
    // });

    /**
    * Searching for specific username "Delphine"
    * And Adding the Async Handler
    */
    it('GET /users', async () => {

        // Handle async behavior
        const res = await request.get('users');
        const specifiedUsers = res.body.filter(user => user.username === username);
        expect(specifiedUsers).to.be.not.empty;
        user = specifiedUsers[0];
        // console.log(user);
        expect(user.username).to.be.eq(username);
    });

    /**
     * Searching for the Posts made by "Delphine"
     * For this we will use Assertion
     */
    it('GET /posts', async () => {

        // Handle async behavior
        const res = await request.get('posts');
        userPosts = res.body.filter(post => post.userId === user.id);
        expect(userPosts).to.be.not.empty;
        // console.log(userPosts);
    });

    /**
    * Searching for the comments of posts written by "Delphine"
    * For this we will use Assertion
    */
    it('GET /posts/{postId}/comments', async () => {

        // Handle async behavior
        for (let i = 0; i < userPosts.length; i++) {
            const res = await request.get(`posts/${userPosts[i].id}/comments`);
            const postComments = res.body;
            if (postComments.length > 0) {
                comments.push(...postComments);
                expect(postComments).to.be.not.empty;
            }
        }
    });

    /**
         * Validate email address for the comments of posts written by "Delphine"
         * For this we will use Assertion
         */
    it('Validate', async () => {

        // console.log(comments);
        for (let i = 0; i < comments.length; i++) {
            // console.log(comments[i].email + ' IsValid=' + isValidEmail(comments[i].email));
            expect(isValidEmail(comments[i].email)).to.be.eq(true);
        }
    });

});