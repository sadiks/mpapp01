import Route from '@ember/routing/route';

export default  Route.extend({
  model: function(qId) {
    let component = {};
    let questions = [{
        id:0,
        question:"Do you like Ember",
        answer:"Yes",
        image:"https://randomuser.me/api/portraits/thumb/lego/3.jpg",
        submited:"first user"
    },{
        id:1,
        question:"is Ember good?",
        answer:"Yes",
        image:"https://randomuser.me/api/portraits/thumb/lego/3.jpg",
        submited:"second user"
    }];
    // debugger;
    return questions[qId.id];
  }
});