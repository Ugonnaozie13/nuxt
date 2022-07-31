<template>

    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="title">
                        <h4>Which services would you like to book?</h4>
                        <h6>Select up to two treatments.</h6>
                    </div>

<section class="big-container">
    
    <article class="options">
                         
                        <div class="grid-item">
                        <div>
                        <button class="Opt opt">
                            <h5>Perk up butox</h5>
                        </button>
                        
                        </div>
                        <div>
                        
                        <button class="Opt opt2">
                            <h5>Butox brow lift</h5>
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
                        
                        <button class="Opt opt2">
                            <h5>QWO</h5>
                        </button>
                       
                        </div>
                     
                        </div>
                         
                    </article>
                   
                    
                      <article class="options">
                        
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
                        
                        <button class="Opt opt2">
                            <h5>Microdermabrasion</h5>
                        </button>
                        
                        </div>
                        
                        
                        </div>
                    </article>
                    <article class="options">
                         
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
                         
                        <button class="Opt opt2">
                            <h5>YAG Laser</h5>
                        </button>
                      
                        </div>
                        </div>
                         
                    </article>
</section>
       
                  
                </div>
            </section>
              <div>
                    <button class="cont-btn" @click="$router.push('/11thquestion')">Continue</button>
                    </div>
             <div>
                    <button class="btn" type="button" @click="$router.push('/9thquestion')" > &lt; </button>
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
    font-family: var(--fontFamily);
    color: var(--fontColor);
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
    text-transform: capitalize;
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
}
.Opt {
    background: white;
    padding: 0.75rem;
    width: 100%;
    text-align: left;
    /* border: 0.5px solid var(--secondaryColor); */
}


.btn{
    position: absolute;
    width: 40px;
    height: 40px;
    right: 50px;
    bottom: 20px;
    color: white;
    background-color: #c58e7b;
}
.page-controller{
    display: flex;
}
.h6 {
    position: absolute;
    margin-left: 50px;
    top: 186px;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.1em;
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
    margin-top: 50px;
    background: #C58E7B;
    color: #F7F5F1;
    border-radius: 2px;
    border: none;
    cursor: pointer;
    text-align: center;
}


</style>