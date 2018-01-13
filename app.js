//Creat the module pattern

//Budget Controller
var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        allItemes: {
            exp: [],
            inc: []
        },
        totals:{
            exp: 0,
            inc: 0
        }
    };
    
})();


//UI Controller
var UIController = (function(){
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };
    
    return{
        getInput: function(){
            return{
                type: document.querySelector(DOMstrings.inputType).value,               //either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
    
})();


//Global app controller
var controller = (function(budgetCtrl, UICtrl){
    
    var setupEventListener = function(){
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };
    
    
    
    var ctrlAddItem = function(){
        //1. get the field input Data
        
        var input = UICtrl.getInput();
        
        //2. add the item to the budget controller
        
        //3. add the item to the UI
        
        //4. calculate the budget
        
        //5. Display the budget on the UI
        
        
    };
    
    
    return {
        init: function(){
            console.log('the Application has started.');
            setupEventListener();
        }
    };
    
    
})(budgetController, UIController);

controller.init();























