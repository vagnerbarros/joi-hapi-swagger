const expect = require('chai').expect;
const userModel = require('../../model/ModelUser');

const user = {
  username: "vagner",
	password: "123",
	repeat_password: "123",
	birth_year: "1990",
	email: "vagner@gmail.com"
}

describe('Test User', () => {

  it('Save User', (done) => {
    
    let savedUser = userModel.save(user);
    expect(savedUser.id).to.be.equal(1);
    done();
  });

  it('List Users', (done) => {

    let users = userModel.list();
    expect(users).to.be.length(1);
    done();
  });

  it('Find ID', (done) => {

    let user = userModel.findId(1);
    expect(user.id).to.be.equal(1);
    done();
  });
});