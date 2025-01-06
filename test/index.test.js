const request = require('supertest');
const { app, server } = require('../index');

describe('GET /', () => {
    afterAll(() => {
        server.close();
    });

    it('should return Hello, GitHub Actions!', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Hello, GitHub Actions!');
        expect(res.statusCode).toBe(200);
    });
});
