const request = require('supertest');
const expect = require('expect');
var app = require('./server.js').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found',
        name: 'App v1.0'
      });
    })
    .end(done);
});

it('should return my user object', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Brady', 
        age: 23
      });
    })
    .end(done);
})