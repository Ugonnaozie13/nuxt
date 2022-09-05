<template>

    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="title">
                        <h4>Are you currently taking medications <br>from this list?</h4>
                        <h6>We may ask you to pause certain medications<br> around time of treatment</h6>
                    </div>
                    <div class ="grid-container">
                    <article class="options">
                        <div class="grid-item">
                        
                        <button class="Opt opt1" @click="$router.push('/seventhquestion')">
                            <h5>Accutane</h5>
                        </button>
                        
                        </div>
                        <div class="grid-item">
                        
                        <button class="Opt opt2" @click="$router.push('/seventhquestion')">
                            <h5>Retinols or acne medication other than Accutane</h5>
                        </button>
                      
                        </div>
                        <div class="grid-item">
                        
                        <button class="Opt opt3" @click="$router.push('/seventhquestion')">
                            <h5>Anti-histamines</h5>
                        </button>
                        
                        </div>
                        <div class="grid-item">
                        
                        <button class="Opt opt4" @click="$router.push('/seventhquestion')">
                            <h5>Fish oil</h5>
                        </button>
                        
                        </div>
                        <div class="grid-item">
                         
                        <button class="Opt opt5" @click="$router.push('/seventhquestion')">
                            <h5>Aspirin or Ibuprofen</h5>
                        </button>
                        
                        </div>
                        <div >
                         
                        <button class="Opt opt6" @click="$router.push('/seventhquestion')">
                            <h5>Herbal supplements including green tea</h5>
                        </button>
                        
                        </div>
                        <div >
                        
                        <button class="Opt opt7" @click="$router.push('/seventhquestion')">
                            <h5>Anti-coagulation medication</h5>
                        </button>
                        
                        </div>
                    </article>
                    </div>
                    
                </div>
            </section>
            <div>
                <button class="cont-btn" @click="$router.push('/seventhquestion')">Continue</button>
            </div>
            <div>
                    <button class="btn" type="button" @click="$router.push('/fifthquestion')" > &lt; </button>
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
    --spacing: 0..05rem;
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
    /*font-family: var(--fontFamily);
    color: var(--fontColor);*/
}
ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}
h1,
h2,
h3,
h4 {
    letter-spacing: var(--spacing);
    font-size: x-large;
    font-weight: 10;
}

h6{
    font-family: var(--fontFamily);
    letter-spacing: var(--spacing);
    font-size: small;
    font-weight: 5;
    padding: 1rem 0;
}


/* SECTION */
section {
    color: var(--secondaryColor);
}
.hero-section {
    /* border: 1px solid black; */
    padding: 5rem 0;
}
.section-center {
    padding: 0.5rem;
    width: fit-content;
    margin: 0 auto;
    /* border: 1px solid red; */
}
.title {
    text-align: center;
}

.options {
    margin-top: 30px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    
    /* border: 1px solid black; */

}

.Opt {
    background: white;
    padding: 1.5rem;
    width: 100%;
    text-align: left;
    border: 0.5px solid var(--secondaryColor); 
    border-bottom: transparent;
    border-right: transparent;
}

.opt6{
    border-bottom: 0.5px solid black;
    border-right: 0.5px solid black;
}

.opt7{
    border-right: 0.5px solid black;
    border-bottom: 0.5px solid black;   
}

.opt4{
    border-right: 0.5px solid black;
}


.opt2{
    border-right: 0.5px solid black;
}


.btn{
    position: absolute;
    width: 20px;
    height: 20px;
    right: 50px;
    margin-top: 20px;
    color: white;
    background-color: #c58e7b;
    border: transparent;
    margin-bottom: 20px;
}

.cont-btn {
    width: 175px;
    height: 56px;
    margin-left: 550px;
    margin-top: 20px;
    
    background: #C58E7B;
    color: #F7F5F1;
    border-radius: 2px;
    border: none;
    cursor: pointer;
}
.Opt h5{
  font-weight: 400;
}




</style>