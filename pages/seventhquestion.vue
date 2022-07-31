<template>

    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="title">
                        <h4>Do any of these conditions apply to you?</h4>
                    </div>
                    <div class ="grid-container">
                    <article class="options">
                        <div class="grid-item">
                        
                        <button class="Opt opt2" @click="$router.push('/eightquestion')">
                            <h5>Acne</h5>
                        </button>
                        
                        </div>
                        <div class="grid-item">
                        
                        <button class="Opt opt2" @click="$router.push('/eightquestion')">
                            <h5>Eczema</h5>
                        </button>
                      
                        </div>
                        <div class="grid-item">
                        
                        <button class="Opt opt2" @click="$router.push('/eightquestion')">
                            <h5>psoriasis</h5>
                        </button>
                        
                        </div>
                        <div class="grid-item">
                        
                        <button class="Opt opt2" @click="$router.push('/eightquestion')">
                            <h5>Rheumatoid Arthritis</h5>
                        </button>
                        
                        </div>
                        <div class="grid-item">
                         
                        <button class="Opt opt2" @click="$router.push('/eightquestion')">
                            <h5>Active cold store</h5>
                        </button>
                        
                        </div>
                        <div class="grid-item">
                         
                        <button class="Opt opt2" @click="$router.push('/eightquestion')">
                            <h5>Rosacea</h5>
                        </button>
                        
                        </div>
                        <div class="grid-item">
                        
                        <button class="Opt opt2" @click="$router.push('/eightquestion')">
                            <h5>Melasma</h5>
                        </button>
                        
                        </div>
                          <div class="grid-item">
                        
                        <button class="Opt opt2" @click="$router.push('/eightquestion')">
                            <h5>Myasthenia Graves</h5>
                        </button>
                        
                        </div>
                    </article>
                    </div>
                </div>
            </section>
             <div>
                <button class="cont-btn" @click="$router.push('/eightquestion')">Continue</button>
            </div>
            <div>
                    <button class="btn" type="button" @click="$router.push('/sixthquestion')" > &lt; </button>
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

.options {
    margin-top: 30px;

    display: grid;
    grid-template-columns: 1fr 1fr;

    
    /* border: 1px solid black; */

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
}




</style>