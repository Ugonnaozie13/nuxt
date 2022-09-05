<template>
 <div class="hero-container">
     <div class="section-title">

         <h5>10 Questions</h5>
     </div>
     <div class="section-body">

         <h2>Let's get to know <br>each other</h2> 

         <div class="info">
             <p >Take a short 3 minute skin quiz to receive a personalized skincare plan that meets your beauty goal</p>
         </div>
     </div>
           
           <div class="buttons">

               <button class="cont-btn" @click="$router.push('/firstquestion')">Get started</button>
           </div>
 
       
    </div>
</template>

<script>
export default {
    

}
</script>

<style >

/* 
==========
FONTS
==========
Import your fonts below here please
*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;1,100&display=swap');
/* 
==========
Variables
==========
*/
:root {
    --primaryColor: #c58e7b;
    --secondaryColor: #22252a;
    --shade: #faf6f4;
    --fontColor: #f7f5f1;
    --spacing: 0.05rem;
    --fontFamily: "Poppins";
}
/* 
=============
Global Styles
=============
*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
     background: var(--shade);
    /*font-family: var(--fontFamily);*/
    /* color: var(--fontColor); */
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}



.hero-container {
    width: fit-content;
    padding: 0.5rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 15vh;
    border: transparent;
    /* margin-top: 80px; */
}

.hero-container div {
    border: transparent;
}
.section-title {
    margin-bottom: 20px;
}
.section-title h5{
    text-align: center;
    font-weight: 0;
}

.section-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
}
.section-body h2 {
    border: transparent;
    width: 70%;
    font-size: 3rem;
    /* line-height: 4px; */
    text-align: center;
}

.info {
    border: transparent;
    width: 65%;
    font-size: 0.8rem;
    text-align: center;
    margin-top: 20px;

}
p{
    font-family: var(--fontFamily);
    letter-spacing: var(--spacing);
    font-size: small;
    font-weight: 300;
    padding: 1rem 0;
}
.cont-btn {
    width: 175px;
    height: 56px;
    margin-left: 280px;
    margin-top: 20px;
    background: #C58E7B;
    color: #F7F5F1;
    border: transparent;
    text-align: center;
}

h2{
    letter-spacing: var(--spacing);
    font-size: x-large;
    font-weight: 5;
}

h5{
    font-weight: 300;
    font-family: var(--fontFamily);
}

</style>