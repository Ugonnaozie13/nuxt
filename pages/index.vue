<template>
 <div class="hero-container">
     <div class="section-title">

         <h5>10 Questions?</h5>
     </div>
     <div class="section-body">

         <h2>Let's get to know each other</h2> 

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
    --spacing: 0.1rem;
    --fontFamily: "Trebuchet MS";
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
    padding: 2rem;
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
.cont-btn {
    width: 175px;
    height: 56px;
    margin-left: 170px;
    margin-top: 60px;
    background: #C58E7B;
    color: #F7F5F1;
    border: transparent;
    cursor: pointer;
    text-align: center;
}

</style>