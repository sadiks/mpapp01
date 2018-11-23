import Component from '@ember/component';

export default Component.extend({
    questionAnswer:[],
    actions:{
        gettingId :function(id){
            console.log('Log');
            // this.transitionTo("question/"+id);
            this.set('questionId',id);
            this.sendAction('action',id);
        }
    }
});
