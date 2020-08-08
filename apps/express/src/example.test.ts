const { server } = require('./main');
const request = require('supertest')

describe('TEST: /', () => {
  it('Should work just fine', async () => {
    await request(server).get('/');
  });
});

export {};