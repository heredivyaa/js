// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>DOM - Query Selector</title>
//     <!-- <script src="arrays.js"></script> -->
//      <!-- <style>
//         .red-color{
//             color:red;
//         }
//         .underline{
//             text-decoration: underline;
//         }
//      </style> -->
// </head>
// <body>
//     <nav class="block">
//         <p class="paragraph">Welcome to my Website</p>
//     </nav>
//     <div class="block">
//         <h4>hey there, My name is <span class = "red-color" id="username">Kashish Sharma</span>:)</h4>
//         <p class="paragraph">Here is code for you</p>
//         <pre><code>console.log('Hey there')</code></pre>
//     </div>

//         <div>
//         <h4>hey there, My name is <span class = "red-color" id="username">Kashish Sharma</span>:)</h4>
//         <p class="paragraph">Here is code for you</p>
//         <pre><code>console.log('Hey there')</code></pre>
//     </div>

//     <button onclick="console.log('Hey!, I am clicked')">Click Me</button>
//     <script>

//     </script>
// </body>
// </html>




//query selector

        //selectors
        //tagname
        //id
        //class

        //1. tagname
        const div = document.querySelector("div");
        console.log(body);
        body.innerHTML = "<h1>Hacked!!!</h1>";
        console.log(div.innerHTML); // will return body code in a string 

        const pre = document.querySelector("pre");
        pre.innerHTML = "alert('Hii there')";

        //2. id
        const username = document.querySelector("#username");
        console.log(username.innerText);

        //3.class
        const ele = document.querySelector(".paragraph")
        console.log(ele.innerText);

        const all = document.querySelectorAll(".block");
        all.forEach((e)=>{
            console.log(e.innerHTML);
        })



        //getElementByName-->
        // const el = document.getElementById('username');
        // el.innerText = "John Doe";
        // el.classList.add("red-color" , "underline");
        // console.log(el.classList);

        // el.classList.remove("red-color");

        //want to add style 
        // el.style.textDecoration = 'underline';
        // el.style.color = "tomato";
        // el.parentElement.style.backgroundColor = "grey";


        //remove elements
        // el.remove;

        //getElementsByclassName --> this returns multiple elements so have to loop over it 

        // const el = document.getElementsByClassName("block");
        // console.log(el);

        // for(let i =0; i< el.length ; i++){
            // console.log(el.item(i));
            // el[i].style.background = "blue";
            // el.item(i).style.background = "blue"; // both work similarly
        // }

        // const all = document.getElementsByClassName("block");
        // for (let i = all.length - 1; i >= 0; i--) {
        //     all[i].remove();
        // }