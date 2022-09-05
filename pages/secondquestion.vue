<template>

    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="title">
                        <h4>What are your top 2 skin goal?</h4>
                    </div>
                    <div class ="grid-container">
                    <article class="options">
                        <div class="grid-item">
                        
                        <button class="Opt opt1" @click="$router.push('/thirdquestion')">
                            <h5>Reduce fine lines and wrinkles</h5>
                        </button>
                        
                        </div>
                        <div >
                        
                        <button class="Opt opt2" @click="$router.push('/thirdquestion')">
                            <h5>Treat acne</h5>
                        </button>
                      
                        </div>
                        <div class="grid-item">
                        
                        <button class="Opt opt3" @click="$router.push('/thirdquestion')">
                            <h5>Remove unwanted hair</h5>
                        </button>
                        
                        </div>
                        <div >
                        
                        <button class="Opt opt4" @click="$router.push('/thirdquestion')">
                            <h5>Body contouring & fat reduction</h5>
                        </button>
                        
                        </div>
                        <div >
                         
                        <button class="Opt opt5" @click="$router.push('/thirdquestion')">
                            <h5>Plumping & lifting</h5>
                        </button>
                        
                        </div>
                        <div >
                         
                        <button class="Opt opt6" @click="$router.push('/thirdquestion')">
                            <h5>Improve skin tone</h5>
                        </button>
                        
                        </div>
                        <div >
                        
                        <button class="Opt opt7" @click="$router.push('/thirdquestion')">
                            <h5>Reserve sun damage & brown sports</h5>
                        </button>
                        
                        </div>
                    </article>
                    </div>
                    
                </div>
                <div>
                    <button class="btn" type="button" @click="$router.push('/firstquestion')" > &lt; </button>
            </div>
            </section>
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
    --spacing: 0.05rem;
    
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

.grid-item {
    border: #22252a;
}
.btn{
    position: absolute;
    width: 20px;
    height: 20px;
    right: 50px;
    bottom: 20px;
    color: white;
    background-color: #c58e7b;
    border: transparent;
}
.page-controller{
    display: flex;
}

.Opt h5{
  font-weight: 400;
}

</style>