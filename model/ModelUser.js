
class ModelUser{

    constructor(){
        this.users = [];
    }

    save(user){

        user.id = this.users.length + 1;
        this.users.push(user);
        return user;
    }

    findId(id){

        if(id <= this.users.length){
            return this.users[id - 1];
        }
    }

    list(){

        return this.users;
    }
}

const user = new ModelUser();

module.exports = user;