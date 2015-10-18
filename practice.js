//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      The 'this' keyword is used as a referent to a previously stated variable within an object.   
      It is used this way, not only for asthetics but for precision as well. 
      It is used to refer back to the object in context also called the 'antecedent object'.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      I could not find this in the pre-reading or anywhere online for that fact.  I wil wait for lecture... lol

  // 3) What is the difference between call and apply?

      //Answer
      The apply and call methods are almost identical when setting the this value except that you pass 
      the function parameters to apply () as an array, while you have to list the parameters individually 
      to pass them to the call () method. Apply is also useful in that you do not have to pass a function at all.  
      You can just pass an array to have the conditions completed on it. 

  // 4) What does .bind do?

      //Answer
      With the bind () method, we can explicitly set the this value for invoking methods on objects, we can borrow
      and copy methods, and assign methods to a variable to be executed as functions, and you can use bind for currying.

//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  // //getUsername --> which is a function that returns the current object's username property. 
  // *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: 'sheridanerin',
      email: 'sheridanerin@gmail.com',
      getUsername: function() {
        return this.username;
      }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

console.log(user.getUsername());

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function () {
    this.move += 10;
    return this.move;
  };
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

// //Hint, you'll need to write a moveCar function which is added to every object that is being 
// returned from the Car function. You'll also need to use the 'this' keyword properly in order 
// to make sure you're invoking moveCar on the right object (prius vs mustang).


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

// //Above you're given the getYear function. Using your prius and mustang objects from above, 
// use the proper syntax that will allow for you to call the getYear function with the prius 
// then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here

getyear.call(prius);
getYear.call(mustang);



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
  it should not give back anything since we have not told the function which object should be applied.


//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  nothing.  <----  Checked in Chrome, it is actually 'undefined'. 

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

setTimeout(getUsername.call(user), 5000);
