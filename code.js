// let count=0;
// for(let i=1;i<=100;i++)
// {
//     if(i%2==0)
//     {
//         console.log(i,"Is Even")
//         count++;
//     }
// }
// console.log("Total Even Numbers are:",count);


// let gnum=35;

// let userum=prompt("Guess Number: ");

// while(userum != gnum)
// {
//     userum=prompt("Again Guess Number: ")
// }
// console.log("Congrats");

// let str="my name"
// str.toUpperCase();
// console.log("h")

// let arr=[85,97,44,37,76,60]
// let sum =0;
// for(let i=0;i<arr.length;i++)
// {
//     sum=sum+arr[i];
// }
// console.log(sum);
// console.log("Average is:", sum/arr.length)

// let prices=[250,645,300,900,50]
// let finalprice=[];
// let i=0;
// for(let price of prices)
// {
//   let  cal=(price/100)*90;
//     finalprice.push(cal);
//     console.log("Price after 10% off:","before: ",price,"After: ",cal);
// }
// console.log("Final prices array:", finalprice, finalprice.length);

// let prices = [250, 645, 300, 900, 50];
// let finalPrices = []; // New array to store final prices

// for (let price of prices) {
//     let discountedPrice = (price / 100) * 90;
//     finalPrices.push(discountedPrice); // Add discounted price to the new array
//     console.log("Price after 10% off: before:", price, "After:", discountedPrice);
// }

// console.log("Final prices array:", finalPrices);

// let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

// company.shift(0);
// console.log(company);

// company.splice(1,1,"OLA")
// company.push("amazon")
// console.log(company);

// function sum(n1,n2)
// {
//     let s=n1+n2;
//     console.log("sum is: ",s);
// }
// let num1=prompt("Enter 1st number: ")
// let num2=prompt("Enter 2nd number: ")
// sum(num1,num2);

// function countVow(str)
// {
//     let count=0;
// for(let char of str)
// {
//     if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u")
// {
//     count+=1;
// }
// }

// console.log("Total Vowels are:",count)
// }

// countVow("faraz ahmad")

// const vow=(str)=>
// {
//     let count=0
//     for(let char of str)
// {
//     if(char==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u")
//     {
//        count+=1; 
//     }
// }
// console.log("count is:",count);
// }

// vow("imran khan");

// let arr=[1,2,3,4]
// arr.forEach(function sqr(val){
// console.log(val*val);
// })

// marks=[67,78,76,88,98,89,95,99]
// let topper=marks.filter((val)=>
// {
//     return val>90;
// }
// );

// console.log(topper)


// n=prompt("enter number: ")
// let arr=[];
// for(i=1;i<=n;i++)
// {
// arr[i-1]=i;
// }
// let sumArr=arr.reduce((res,curr)=>{
//     return res+curr;
// }
// );

// let mulArr=arr.reduce((res,curr)=>
// {
//     return res*curr;
// }
// );3

// console.log(sumArr)
// console.log(mulArr)

// let arr=[9];
// let n=prompt("Enter n:")
// for(let i=1;i<=n;i++)
// {
// arr.push(i);
// }
// console.log(arr);

// let arr=[1,2,3,4];
// let newarr=arr.splice(0,1,10)
// console.log(newarr)
// console.log(arr)

// let arr=[1,2,3,4]
// let narr=arr.map(
//     (val)=>{
//         return val%2===0;
//     }
// );
// console.log(narr)

// let ne= document.querySelector("h2");
// ne.innerText=ne.innerText+" stu"
// let divs=document.querySelectorAll(".box");
// divs[0].innerText="unique1"
// divs[1].innerHTML="unique2"
// divs[2].innerHTML="unique3"
// let idx=1;
// for(let div of divs)
// {
//     div.innerText="Unique "+idx;
//     idx++
// }
// console.log("hello")

// let newbtn=document.createElement("button")
// newbtn.innerText="click me"
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
// document.querySelector("body").prepend(newbtn)

// let para=document.querySelector("p");
// para.classList.add("p2")

// let btn=document.querySelector("button")
// let bgc="light"
// let bd=document.querySelector("body")
// btn.addEventListener("click",()=>
// {
//     if(bgc==="light")
//     {
//         bd.style.backgroundColor="black";
//         bgc="dark";
//     }
//     else{
//         bd.style.backgroundColor="white";
//         bgc="light";
    
//     }
//     console.log(bgc)
// });

// class User{
//     constructor(name,email)
//     {
//         this.name=name;
//         this.email=email;
//     }
//     viewData() {
//         console.log("Website Data",Data)
//     }
// }

// class Admin extends User{
//     constructor(name,email)
//     {
//        super(name,email)
//     }
//     editData(){
//     Data="update";
//     }
// }

// let obj1=new User("far","az");
// let adm1=new Admin("h","hy");

function getData(id,getNextData)
{
setTimeout( ()=>{
    console.log("data",id)
    if(getNextData)
    {
        getNextData();
    }
},2000)
}
//  getData(1);
//  getData(2);

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })

let url="https://alexwohlbruck.github.io/cat-facts/"

// let f= fetch(url);
// console.log(f)

let getfact= async ()=>{
console.log("loading.....")
    let response= await fetch(url);
console.log(response);

}