import Route from '@ember/routing/route'; 

export default Route.extend({
    // redirect: function(){
    //     window.console.log("redirect() @ routes/index.js")  ;
    //     this.transitionTo("commits.index");
    // },
    // model: function() {
    //     console.log("model fn @ Route.") ;
    //     let  companies = [{
    //         "name" : "Google",
    //         "headquarters": "Mountain View",
    //         "revenue":"59b"
    //         },{
    //           "name" : "Facebook",
    //           "headquarters":"Menlo Park",
    //           "revenue":"7b"
    //         },{
    //           "name" : "twitter",
    //           "revenue": "664m",
    //           "headquarters":"San Francisco"
    //         }];
    //     // return ['Android', 'iOS', 'Tizen'];
    //     return companies;
    // }
  model: function() {
    // return {
    //     name: "Ravi Kumar",
    //     avatar: "https://randomuser.me/api/portraits/thumb/lego/3.jpg",
    //     bio: "Famous painter"
    // };
    let questions =[{
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
    return questions;
  },
  actions: {
    newAction: function(id) {            
        console.log('TTTT'+id);
        this.transitionTo("question",id);
    }
  }
});
// console.log("in Route.") ;
