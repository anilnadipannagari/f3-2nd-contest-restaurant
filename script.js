let mains=document.getElementsByTagName("main");
let major=document.getElementById("apidata");
let tb=document.getElementById("row");
let bd=document.getElementsByTagName("body");//fetchimg data from given url
fetch('https://free-food-menus-api-production.up.railway.app/burgers').then((apidata)=>{
console.log(apidata);

return apidata.json();

}).then((actualdata)=>{

    console.log(actualdata);
     //let Array=actualdata;
      //using for so that we can traverse every array elements
    // window.onload=getMenu;
    function getMenu()
    {
     
      for(let k=0;k<60;k++)
      {
       //creating division for each element ,we can also use map method instead of for
         const mr=document.createElement("div");
        const mydata=actualdata[k];
      
         
   const cr=document.createElement("div");
       //accessing one image out of 5 image of every object ,rendering, rating ,description, stocks & prices
      cr.innerHTML=`
     
      <img src=${mydata.img} height="200" width="200" alt="photo" border="1px solid black" box-sizing="border-box"  justifyContent="space-between" />    
     <br>
      Name: ${mydata.name}
      <br>
      country:${mydata.country} 
      <br>
      Price  ${mydata.price}
      <br>
     
      <br>
     
     
       Rating -${mydata.rate}
       <br>
       Description -${mydata.dsc}
      <br>
      
      



      
      `
    //  cr.style.display="flex";
     ///cr.style.flexDirection="row";
      cr.style.height="370px";
      cr.style.width="200px";
      cr.style.borderStyle="solid";
    //cr.style.boxSizing="border-box";
    cr.style.borderRadius="5px";
    cr.style.borderColor="black"
    cr.style.display="block";
    
     // cr.style.box-sizing="border-box";
     

       
    //mains.append(cr);
    //appending created division to another division so that every element can print
    major.append(cr);
    //giving styles related with flexwrap and its direction height and weidth
    /*major.style.display="flex";
   major.style.flexWrap="wrap";
    major.style.flexDirection="column";
  major.style.justifyContent="space-between";
  major.style.margin="5px";
  major.style.padding="5px";
  major.style.width="400px";
 major.style.height="1000px"*/
      }
    //SVGTextContentElement.
  //content.style.flexDirection="";
    }
    window.onload=getMenu();

   // getMenu();
    let count=0;
    let obj={};
  
    const probj1=new Promise((resolve,reject)=>{
   setTimeout(function takeorder(){

  let k=Math.floor(Math.random()*60);
       if(k<=57)
       {
          const mydata1=actualdata[k];
          const mydata2=actualdata[k+1];
          const mydata3=actualdata[k+2];
     


     count++;
    //let obj={};let obj1={};let obj2={};let obj3={};
    
    console.log(k);
    

      obj={
        fisrt:`${mydata1.name}`,
        second:`${mydata2.name}`,
       third:`${mydata3.name}`
         }


   }
   resolve(obj);
   reject('Error while communicating');
  },2500)


    });
    probj1.then((item)=>{
     console.log(item);
    }).catch((error)=>{
      console.log(error);
    })
    
    
    
    
  //  let count=0;
    let obk={};
  
    const probj2=new Promise((resolve,reject)=>{
   setTimeout(function orderPrep(){

 // let k=Math.floor(Math.random()*60);
      


    
    //let obj={};let obj1={};let obj2={};let obj3={};
    
    
    

      obk={
       order_status:true,
       paid:false
         }


   //}
   resolve(obk);
   reject('Error while communicating');
  },1500)


    });
    probj2.then((item)=>{
     console.log(item);
    }).catch((error)=>{
      console.log(error);
    })
    
    
    
    
    
    
    
    
    
    /*function  getorder () 
   {
     let k=Math.floor(Math.random()*60);
       if(k<=57)
       {
    const mydata1=actualdata[k];
    const mydata2=actualdata[k+1];
    const mydata3=actualdata[k+2];
    


     count++;
    //let obj={};let obj1={};let obj2={};let obj3={};
    
    console.log(k);
    

      obj={
        fisrt:`${mydata1.name}`,
        second:`${mydata2.name}`,
       third:`${mydata3.name}`
    }

  }
      // obj.add(actualdata[k]);
      /// obj.add(actualdata[k+1]);
      // obj.add(actualdata[k+1]);

     //  Object.assign(obj,mydata1.name);
      // Object.assign(obj2,actualdata[k+1]);
      // Object.assign(obj3,actualdata[k+2]);
     //  console.log(obj1);
      // Object.assign(ob2,obj3);
     //  Object.assign(obj,obj1);


       


     //  Object.assign(obj,obj2);
      // Object.assign(obj,obj3);
      //obj={...mydata1.name,...mydata2.name,...mydata3.name};
      
  console.log(obj);
   
   
     



  }
  getorder();*/



  let obf={}; var paystatus;
   var counter=0;
  const probj3=new Promise((resolve,reject)=>{
 setTimeout(function payOrder(){

// let k=Math.floor(Math.random()*60);
    


  
  //let obj={};let obj1={};let obj2={};let obj3={};
  
  
  

    obf={
     order_status:true,
     paid:true
       }
    
     //  paystatus=obf.paid;counter++;

      // console.log(counter);
   // console.log(paystatus);

 //}
 resolve(obf);
 reject('Error while communicating');
},1000)


  });
  probj3.then((item)=>{
   console.log(item); paystatus=obf.paid;counter++;
  }).catch((error)=>{
    console.log(error);
  })
  


    
  setTimeout(function thankyouFnc()
  {
    console.log(counter);
    console.log(paystatus);
       if(counter===1)
       {
        if(paystatus==true)
        {
        console.log("done");
         alert("THANK YOU");
       }
      }
  },1100)






   // thankyouFnc();








 // mr.append(content);
  //mr.style.display="flex";
  //mr.style.flexDirection="column";*/
  
  //bd.append(content);
  //bd.style.display="flex";
  //bd.style.flexDirection="column";
  //mains.append(content);
  //mains.display*/
  //.style.display="flex"; 
  //mains.style.flexDirection="row";

//}
     

}).catch((error)=>{


    console.log(`The Error: ${error}`);
});
