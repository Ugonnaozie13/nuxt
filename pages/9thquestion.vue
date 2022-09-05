<template>

    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="title">
                        <h4>Which treatments should we discuss<br> during your consultation?</h4>
                        <h6>Select up to three treatments.</h6>
                    </div>

<section class="big-container">
    <article class="options">
        <p><b>Threads & Injectibles</b></p>
                        <div class="grid-item">
                        <div>
                        <button class="Opt opt">
                            <h5>perk up botox</h5>
                        </button>
                        
                        </div>
                        <div>
                        
                        <button class="Opt opt2">
                            <h5>botox brow lift</h5>
                        </button>
                        
                        </div>
                        <div >
                        
                        <button class="Opt opt2">
                            <h5>lip filler</h5>
                        </button>
                        
                        </div>
                        <div >
                         
                        <button class="Opt opt2">
                            <h5>chic to cheek</h5>
                        </button>
                        
                        </div>
                        <div >
                        
                        <button class="Opt opt3">
                            <h5>QWO</h5>
                        </button>
                       
                        </div>
                        </div>
                         
                    </article>
                   
                    
                      <article class="options">
                        <p><b>Skincare Services</b></p>
                        <div class="grid-item">
                        <div>
                        <button class="Opt 2">
                            <h5>Biologique Recherche facial</h5>
                        </button>
                        
                        
                        </div>
                        <div >
                        
                        <button class="Opt opt2">
                            <h5>Microneedling</h5>
                        </button>
                        
                        </div >
                        <div >
                        
                        <button class="Opt opt3">
                            <h5>Microdermabrasion</h5>
                        </button>
                        
                        </div>
                        
                        
                        </div>
                    </article>
                    <article class="options">
                        <p><b>Laser Services</b></p>
                        <div class="grid-item">
                        <div>
                        <button class="Opt opt">
                            <h5>IPL Photorejuvenation</h5>
                        </button>
                        
                        </div>
                        <div>
                        
                        <button class="Opt opt2">
                            <h5>Skinwave</h5>
                        </button>
                        
                        </div>
                        <div >
                        
                        <button class="Opt opt2">
                            <h5>Fraxel Laser</h5>
                        </button>
                        
                        </div>
                        <div >
                         
                        <button class="Opt opt2">
                            <h5>Laser Hair Removal</h5>
                        </button>
                        
                        </div>
                        <div >
                        
                        <button class="Opt opt2">
                            <h5>Coolsculpting</h5>
                        </button>
                       
                        </div>
                        <div >
                         
                        <button class="Opt opt3">
                            <h5>YAG Laser</h5>
                        </button>
                      
                        </div>
                        </div>
                         
                    </article>
</section>
                    
                    <div>
                   
                    </div>
                </div>
            </section>
            <div>
                 <button class="cont-btn" @click="$router.push('/10thquestion')">Continue</button>
            </div>
             <div>
                    <button class="btn" type="button" @click="$router.push('/result')" > &lt; </button>
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


.grid-item {
    padding: 0;
    width: 100%;
    position: center;
}
.Opt {
    background: white;
    padding: 1.5rem;
    width: 100%;
    text-align: left;
    border: 0.5px solid var(--secondaryColor); 
    border-bottom: transparent;
}

.opt3{
    border-bottom: 0.5px solid black;
}




.btn{
    position: absolute;
    width: 20px;
    height: 20px;
    right: 50px;
    margin-top: 30px;
    color: white;
    background-color: #c58e7b;
    border: transparent;
}
.page-controller{
    display: flex;
}


.big-container {
    /* border: 1px solid black; */
    margin-top: 40px;
    width: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: flex-start;
}
.cont-btn {
    width: 175px;
    height: 56px;
    margin-left: 550px;
    
    background: #C58E7B;
    color: #F7F5F1;
    border-radius: 2px;
    border: none;
    cursor: pointer;
}
.Opt h5{
  font-weight: 400;
}
.options p{
    font-family: var(--fontFamily);
    font-weight: 400;
    font-size: small;
}

</style>