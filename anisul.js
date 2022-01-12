 /*LIBERY FUNCTION

 // একটি word এর মধে কতটি carektar রয়েছে তা দেখার জন্য (length) ববহার করি।
        // var text = "Bangladesh";
        // var len = text.length;
        // document.write(len);

        // var text = "Bangladesh";
        // text.length;
        // document.write(text.length);

        // var text = "Bangladesh";
        // var len = text.length;
        // document.write("Number of Character: " + len);

        // var text = "Bangladesh";
        // document.write("<br/>Number of Character : " + text.length);*/




// USER INPUT কিভারবে নিতে পারি। (prompt) এর মাধ্মে। অন্ড কতটি carektar রয়েছে।
        // var text = prompt("Enter Your Name : ")
        // document.write("Number of character " + text.length);*/


//একটি word এর কত তম carektar টি দেখতে চাই, তার জন্য (charAt(?))
        // var text = "Bangladesh";
        // var cha = text.charAt(8);
        // document.write(cha);

//একটি word কে কিভাবে আমরা upperCase to lowerCase convert করতে পারি।
        // var text = "Bangladesh";
        // text = text.toUpperCase();
        // document.write(text);

        // var text = " BAngladesh";
        // text = text.toLowerCase();
        // document.write(text);


//CONCAT একটা variabol এর সাথে আরো একটা variabol যোগ করবো (concat)
        // var text1 = "Bangladesh ";
        // var text2 = "is a Beautiful conuntry.";
        // var text = text1.concat(text2);
        // document.write(text);
        
        
//carectar slice (একটি word এর কত থেকে কত carektar দেখাতে চাই slice এর মাধ্মে)
        // var text1 = "Bangladesh";
        // var text = text1.slice(2,5);
        // document.write(text);



//TAKS
        // var fastName = "Lolit ";
        // var lastName = "MOhan";
        // var fullName = fastName + lastName;
        // document.write(fullName);

        // var fullName = fullName.toLowerCase();
        // document.write(fullName);
        // var text = prompt("Enter Your Name: ");
        // document.write("Number of Character : " + text.length);


        // var fastName = prompt("Enter Your FastName :<br/> ");
        // document.write(fastName );
        // var lastName = prompt("Enter your lastName :");
        // document.write(lastName);

        // var len = fastName+lastName.length;
        // document.write(len);

//CLASS: 09 Arithmetic and assignment operator
        //Arithmetic operator : +, -, *, /, %(Modulas), **, --, ++(Exponent),
        //assignment operator : =, +=, -=, *=, /=, %=, **=,

// 16. logical operators
        // var marks = prompt("Enter your Marks: ");
        // if(marks >= 80 && marks <= 100)
        // console.log("A+");
        // else if(marks >= 70 && marks <= 79)
        //     console.log("A");
        // else if(marks >= 60 && marks <= 59)
        //     console.log("A-");
        // else if (marks >= 50 && marks <= 49)
        //     console.log("B");
        // else if(marks >= 40 && marks <= 39)
        //     console.log("C");
        // else if(marks >= 33 && marks <= 39)
        //     console.log("D");
        // else
        //     console.log("Fail");
    //
        // var x = 8;
        // x += 5; // x = x+x
        // console.log(x);

        // var y = 4;
        // // y *= 3; //y = y*y; 4*3
        // // document.write(y);

        // y /= 9; //y = 4/9;
        // document.write(y);


//
        // var sum1 = prompt("Enter fast Number :");
        // var sum2 = prompt("Enter las Number: ");

        // sum1 = parseFloat(sum1, 10);
        // sum2 = parseFloat(sum2, 10);

        // var sum = sum1 + sum2;
        // var sub = sum1 - sum2;

        // document.write("Sum1 + sum2 = " + sum + "<br/> <br/>");
        // document.write("Sum1 - sum2 = " + sub);



//
        // var fastName = prompt("Enter your FastNameber : ");
        // var lastName = prompt("Enter your LastNameber :");
        // fastName = parseFloat(fastName, 10);
        // lastName = parseFloat(lastName, 10);
        // var sum = fastName + lastName;
        // var sub = fastName - lastName;
        // var times = fastName * lastName;
        // var share = fastName / lastName;
        // var modulas = fastName % lastName;
        // document.write("Enter your sum = " + sum + "<br/>");
        // document.write("Enter yiur sub = " + sub + "<br/>");
        // document.write("Enter yiur times = " + times + "<br/>");
        // document.write("Enter yiur share = " + share + "<br/>");
        // document.write("Enter yiur modulas = " + modulas);


// TEMPERATURE CONVERT
        // var fahrenheit = parseFloat(prompt("enter Your templerature = "));
        // var celsus = (fahrenheit - 32) * (5/9);
        // document.write("Celsus = " + celsus);

    //
        // var celsus = parseFloat(prompt("Enter YOur celsus Temperature = "));
        // var fahrenheit = (celsus * (9/5)) + 32;
        // document.write("farhenite : " + fahrenheit);


 // OPARETOR 
        // 1. assign oparetor
        // >, <, >=, <=, =, ==, ===, !=, !,
        // 2. logical oparetor
        // &&, ||, 

//TAKS
            // var x = 20;
            // var y = 70;
            // var z = 40;

            // if(x>y){
            //     console.log("x is the maximum number" );
            // }
            // else if(y>z){
            //     console.log("y is the maximum number");
            // }
            // else{
            //     console.log("z is the maximum number");
            // }


// 10-30 find out odd number between 10 to 30

            // for (var i = 3; i <= 30; i++){
               
            //     if(i % 2 !=0){
            //         console.log(i);
            //     }
            // }

// 10-30 find out even number betwen 
        // for(var i = 10; i<30; i++){
        //     if(i%2 !=0 ){
        //         console.log(i);
        //     }
        // }


// একটি letter vowel না consonated তা নিরনয় করতে পারি loop এর সাহাযে।
            // var letter = prompt("Enter your letter : ");

            // letter = letter.toLowerCase();

            // if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "y"){
            //     console.log("vowel");
            // }else
            //     console.log("Consonated");
                
        
                
// digit spelling (if, else if, else)

            /*var digit = prompt("Enter any digit");

            if(digit == 0)
                console.log("Zoro");
            else if(digit == 1)
                console.log("One");
            else if(digit == 2)
                console.log("Two");
            else if(digit == 3)
                console.log("Three");
            else if(digit == 4)
                console.log("Four")
            else if(digit == 5)
                console.log("Five");
            else if(digit == 6)
                console.log("Six");
            else if(digit == 7)
                console.log("Seven");
            else if(digit == 8)
                console.log("Eight");
            else if(digit == 9)
                console.log("Nine");*/


// DIGIT SPALING ( SWITCH, CASE, BREAK, DEFAULD)

            // var digit = prompt("Enter Your Digit");
            // switch (digit){
            //     case "0":
            //     console.log("Zero");
            //     break;
            //     case "1":
            //     console.log("One");                    break;
            //     case "2":
            //     console.log("Two");
            //     break;
            //     case "3":
            //     console.log("Three");
            //     break;
            //     case "4":
            //     console.log("Four");
            //     break;
            //     case "5":
            //     console.log("Five");
            //     break;
            //     case "6":
            //     console.log("Six");                    break;
            //     case "7":
            //     console.log("Seven");
            //     break;
            //     case "8":
            //     console.log("Eight");                    break;
            //     case "9":
            //     console.log("Nine");
            //     break;
            //     default :
            //     console.log("Not a digit");
            //    }

// DIGIT SPALING (if, else if, else)
            //    var digit = prompt("Enter your Digit");

            //    if(digit == 0)
            //        console.log("Zero")
            //     else if(digit == 1)
            //         console.log("One");
            //     else if (digit == 2)
            //         console.log("Two");
            //    else if (digit == 3)
            //         console.log("Three");
            //     else if (digit == 4)
            //         console.log("Four");
            //     else
            //         console.log("Not a digit");


//LOOP CONTROL ST...

            /*document.write("<h1> Bangladesh </h1>");
            document.write("<h1> Bangladesh </h1>");
            document.write("<h1> Bangladesh </h1>");
            document.write("<h1> Bangladesh </h1>");
            document.write("<h1> Bangladesh </h1>");

            for(starting; condition; update){
            document.write("<h1> Bangladesh </h1>");

            } */

            // for(var x = 1; x <= 100; +x){
            //     document.write(" " +x);
            // }


//TARNARY OPARETOR
            // var number = Number(prompt("Entre your Number: "));

            // // if(number > 0){
            // //     ;
            // // } else{
            // //     console.log("Number is Nagative");
            // // }

            // number>0 ? console.log("Number is Positive") : console.log("Number is Nagative");
            
//FOR LOOP 

    // for(var i=1; i<=100; i = i+1){
    //     document.write(" " + i);
    // }

    // for(var i = 1; i <= 100; i++){
    //     document.write(" " + i);
    // }

//WILE LOOP
// 1 + 2 + 3 + 4........+ 100
    // var i = 1;
    // while(i <= 100){
    //     document.write(" " + i)
    //     i = i+1;
    // }

// 2 + 4 + 6 + ......+ 40
    // var x = 2;
    //         while(x <= 40){
    //             document.write(" " + x);
    //             x = x+2;
    //         }

// var i = 1;
        // while(i <= 20){
        //     document.write(" " +i);
        //     i = i+1;
        // }


 // 1 + 2 + 3 +....+20;
        //  var i = 1;
        //  var sum = 0;
        //  while(i <= 20){
        //      document.write(" " +i);
        //      i = i + 1;
        //      sum = sum + i;
 
        //  }
        //  document.write(" <br> " +sum);
 
// 2 + 4 + 6 + ...... + 100
        // var a = 2;
        // var sum = 0;
        // while(a <= 100){
        //     document.write(" " +a);
        //     a = a+2;
        //     sum = sum + a;
        // }
        // document.write(" ="+sum);

// DO WHILE LOOP
        // var i = 1;
        // do{
        //     document.write(" " + i);
        //     i++;
        // } while(i <= 70);


//FOR IF ADVANCED
        // for (var i = 1; i<=100; i++){
        //     document.write(" " +i);
        //     if(i == 10){
        //         break;
        //     } 
        // }

        // for (var a = 1; a <= 100; a++){
        //     if( a == 10){
        //         break;
        //     }
        //     document.write(" " +a);
            
        // }

// if else er sahaje Numberta Positive / nagative
        // var number = prompt("Enter a Number : ");
        //     if(number > 0){
        //         console.log("Positive Number");
        //     } else{
        //         console.log("Nagative Number");
        //     }

 //  var number = prompt("Enter a Number : ");

        // if(number > 0){
        //     console.log("Positive");
        // }
        // else if(number < 0){
        //     console.log("Nagative");
        // } else{
        //     console.log("Zero");
        // }

//TERNARY OPARETOR
        // var number = prompt("Enter your Number ");
        // var resjult = number>0 ? "Positive" : number<0 ? "Nagative" : "Zero";
        // console.log(resjult);

        // var number = prompt("Enter a Number");
        // number>0 ? console.log("Positive") : console.log("Nagative");


// TRADITIONAL FUNCTION
        // var name = 5;
        // var result = name * name;
        // document.write("Result = " +result +"<br>");



// CREATE A FUNCTION
        // function squer(){
        //     var name = 9;
        //     var result = name * name;
        //     document.write("Result = "+ result + "<br>");
        // }
        // squer();
        // squer();
        // squer();
    //
        // function squer(name){
        //     var result = name * name;
        //     document.write("Result = "+ result + "<br>");
        // }
        // squer(4);
        // squer(6);
        // squer(8);

    //
        // function squer(name1,name2){
        //         var result = name1 * name2;
        //         document.write("Result = "+ result + "<br>");
        //     }
        //     squer(29,5);

    //
        // function squer(name1,name2){
        //     var result = name1 * name2;
        //     return result;
        // }
        // var x = squer(5,6);
        // document.write(x);
        
    //
        // function addition(x,y){
        //     var result = x+y;
        //     document.write("Sum = " +result +"<br>");
        // }
        // addition(20, 28);
    //
        // function subtraction(l,p){
        //     var result = l-p;
        //     document.write("sub = " +result +"<br>");
        // }
        // subtraction(50,38);
    //
        // function squer(l,p){
        //     var result = l*p;
        //     document.write("gun = "+ result +"<br>");
        // }
        // squer(6,7);
    //
        // function divaidet(l,p){
        //     var result = l/p;
        //     document.write("divaidet = "+result);
        // }
        // divaidet(34,4);

// IIFES = (Immediately Invokeable Function Expressions)
        // function diplay(message){
        //     console.log(message);
        // };
        // diplay("Hello Lolit Mohan. How are you?")

    //
        // (function diplay(message){
        //     console.log(message);
        // })("Lolit mro sala");


// Array = is an oject; collection of variables

        // var name1, name2, name3, name4, name5;
        // name1 = "Lolit";
        // name2 = "Mohan";
        // name3 = "Purni";
        // name4 = "Rany";
        // name5 = "Love";
        // // console.log(name5);

    //
        // var names = ["Lolit","Mohan","Purni","Rany","Lolit"];
        // console.log( names.length);
        // console.log(typeof names);
        // console.log(names[5]);
      
    // push = name add korbe.
        var names = ["Lolit","Mohan","Purni","Rany","Lolit"];
        console.log(names.length);
        names.push("Purnima");
        names.push("hurnima");
        names.push("curnima");
        console.log(names.length);
        console.log(names);

    // pop = name Remove korbe.
        // var names = ["Lolit","Mohan","Purni","Rany","Lolit"];
        // names.pop();
        // console.log(names);

// Array concation Kora.
        // var country1 = ["Bangladesh","India"];
        // var country2 = ["pakistan","Nepal"];
        // var country = country1.concat(country2);
        // console.log(country);


// Array in Loop using korbo kivabe.
        // var num = [10,20,30,40,50];
        // var sum = 0;
        // for(var i = 1; i< 5; i++ ){
        //     console.log(num[i]);
        //     sum = sum+ num[i];
        // }

    //
        // console.log("sum = " + sum);

        //  var num = new Array();

        //  for(var i = 0; i < 5; i++){
        //      num[i] =parseFloat(prompt("Enter 4 Number : "));
        //  }
        //  var sum = 0;
        //  for(var i = 0; i < 5; i++){
        //      console.log(num[i]);
        //      sum = sum + num[i];
        //  }
        //  console.log("sum = "+ sum);

// shift  opposite of er biporit kaj kore pop (Element add/remove) 
        //var names = ["Lolit", "Mohan", "Barman"];
        // console.log(names);

        // names.shift();
        // console.log(names);

//unshift opposite of push; (Element Add)
        //var names = ["Lolit", "Mohan", "Barman"];
        // names.unshift("Sagor");
        // console.log(names);


//splies method (Element Add)
        // var names = ["Lolit", "Mohan", "Barmon"];
        // console.log(names);
        // names.splice(2,1, "Korim","Rohim");
        // console.log(names);

    // element remove
        // var names = ["Lolit", "Mohan", "Barmon"];
        // names.splice(1,2);
        // console.log(names);

// short method (Element gulo alfa bete sajiyea nibe)
        // var names = ["Lolit", "Mohan", "Barman"];
        // console.log(names);

        // var sorteName = names.sort();
        // console.log(sorteName);

// Ulta vabe kaj korbe (z,y,x....a)
        // var names = ["Lolit", "Mohan", "Barman","Quta"];
        // console.log(names);

        // var sortName = names.sort();
        // names.reverse();
        // console.log(names);

// Number sortiing kivabe korbo(1,2,3,4....)
        // var number = [30,20,2,9,80];
        // console.log(number);

        // var sortingNumber = number.sort(function(a,b){
        //     return a-b;
        // });
        // console.log(number);


// Number sortiing kivabe korbo(80,30,20.9,2....)
        // var number = [30,20,2,9,80];
        // console.log(number);

        // var sortingNumber = number.sort(function(a,b){
        //     return b-a;
        // });
        // console.log(number);


// 1D Array
//TAKS
            //One dimensional Array
            // create a function called highestScore that 
            // Receive a 1d array called scores
            // return the hightest score
//01740415801

        // one dimensional array 
            // function highestScore(){

            //     var max = scores[0];
            //     for(var x = 1; x <scores.length; x++){
            //         if(max < scores[x]){
            //             max = scores[x];
            //         }
            //     }
            //     return max;
            // }
            // var scores = [20,269,30,50,89];
            // var maxScores = highestScore(scores);
            // console.log(maxScores);

        //Two dimensional Array
            // function highestScore(playerInfo){
            //     var highestScorer = playerInfo[0][0];
            //     var highestScore = playerInfo[0][1];

            //     for(var x=1; x<playerInfo.length; x++){
            //         if(highestScore<playerInfo[0][1]){
            //             highestScore = playerInfo[0][1];
            //             highestScore = playerInfo[x][0];
            //         }
            //     }   
            //     return highestScore;

            // }
            // var playerInfo = [
            //     ["Lolit",20],
            //     ["Mohan", 17],
            //     ["Purni", 16],
            //     ["Rany", 44],
            // ];

            // var name = highestScore(playerInfo);
            // console.log(name);


//object er bebohar

            //Student details 
                // var name = "Lolit Mohan";
                // var age = 20;
                // var cgpa = 3.74;
                // var lag = ["Bangla", "English", "hindi"];

            // console.log(age);
        //create object multipol
            // var student1 = {
            //     name : "Lolit Mohan",
            //     age : 20,
            //     cgpa : 3.78,
            //     lang : ["Bangla Basic", "English Entermatic", "hindi expert"]

            // }

            // var student2 = {
            //     name : "Lolit Mohan",
            //     age : 20,
            //     cgpa : 3.78,
            //     lang : ["Bangla Basic", "English Entermatic", "hindi expert"]

            // }

            // var student3 = {
            //     name : "Lolit Mohan",
            //     age : 20,
            //     cgpa : 3.78,
            //     lang : ["Bangla Basic", "English Entermatic", "hindi expert"]

            // }
            // console.log(student1.lang);

//adding a constructor
            /*function student(name,age,cgpa,lang){
                this.name = name;
                this.age = age;
                this.cgpa = cgpa;
                this.lang = lang;

                    this.display = function(){
                        console.log(this.name);
                        console.log(this.age);
                        console.log(this.cgpa);
                        console.log(this.lang);

                    }
            }

            var student1 = new student("Lolit",20,3.54,["bangal","hindi", "English"])
            var student2 = new student("Purni",16,3.54,["bangal","hindi", "English"])
            var student3 = new student("Mohan",21,3.54,["bangal","hindi", "English"])

            student3.display();*/
        
// Math Object 

            // var numberOner = parseInt(prompt("Enter your First Number : "));
            // var numberTwo = parseInt(prompt("Enter Your second Number : "));

            // var maximum = (numberOner,numberTwo);
            // console.log(maximum);

            // var x= 2;
            // var y = 9.0344;
            // var z = x+y;
            // console.log(Math.sqrt(z));
            // console.log(Math.abs(z));
            // console.log(Math.sin(z));
            // console.log(Math.pow(x,y));
            // console.log(Math.floor(z));
            // console.log(Math.ceil(z));
            // console.log(Math.round(x,y));
            // console.log(Math.max(x,y));

        //
            // var x = 7;
            // console.log(Math.sin(x));
            // console.log(Math.round(2.3));
            // console.log(Math.max(56,65,454,345,454,43,33333,543,345,))

            // var date = new Date;
            // console.log(date);


//QUERY SELECTOR
            // document.querySelector("#home").innerHTML = "LolitMohan Barman";

            // document.querySelector("h1").innerHTML = "Purnima Rany";

// ONCLICK METHOD

// DOM Event | Event Object | onchange event
            

        
// BOM  (Browser Object Model)
        
        // // hrf
        //     console.log(location.href);

        // // protocol
        // console.log(location.protocol);

        // //hostname
        // console.log(location.hostname);

        // //port
        // console.log(location.port);

        // //pathname
        // console.log(location.pathname);


       
    //  var locationDiv = document.querySelector(".location-div");

    //  var p1 = locationDiv.children[0];
    //  p1.textContent = location.href;

    //  var p2 = locationDiv.children[1];
    //  p2.textContent = location.protocol;

    //  var p3 = locationDiv.children[2];
    //  p3.innerHTML = location.hostname;

    //  let p4 = locationDiv.children[3];
    //  p4.innerHTML = location.port;

    //  let p5 = locationDiv.children[4];
    //  p5.innerHTML = location.pathname;

    //  let visit = document.getElementById("visit-my-website");
    //  visit.addEventListener("click", function(){
    //      location.assign("https://www.google.com");
    //  })


    //54 class BOM popup, boxes, a;ert, confirm, prompt
    // console.clear();
    // alert 
            // function deleteSomething(){
            //     let value = confirm("Do you want to deleted");
            //     if(value){
            //         console.log("deleted");
            //     }else{
            //         console.log("Not deleted");
            //     }
            // }
            // deleteSomething();


    //prompt
            // function welcomeMessage(){

            //     var name = prompt("Enter your Name");
            //     if(name == null || name == " "){
            //         text = "no name found"
            //     }else{
            //         text = name;
            //     }
            //     var h1 = document.createElement("h1")
            //     var text;
                
            //     var textNode = document.createTextNode(text);
            //     h1.appendChild(textNode);
            //     document.body.appendChild(h1);
            // }
            // welcomeMessage();


// BOM 
            //Timing events methods
            // set Timeout(), 
            // set Interval(),

        // set Timeout()
            // setTimeout(() => {
            //     console.log("hi lolit")
            // }, 2000);

            // setTimeout(display, 2000);
            // function display(){
            //     console.log('display function');
            // }

        // set Interval()
            

        

 

            

            