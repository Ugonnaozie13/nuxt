<template>
    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="title">
                        <h4>Can you avoid sun exposure and tanning for up to 2 weeks before and after treatment?</h4>
                    </div>

                    <article class="options">
                        
                        <button class="Opt" @click="$router.push('/sixthquestion')">
                            <h5>Yes</h5>
                        </button>
                       
                        <button class="Opt opt2" @click="$router.push('/sixthquestion')">
                            <h5>No</h5>
                        </button>
                        
                    </article>
                </div>
            </section>
            <div>
                    <button class="btn" type="button" @click="$router.push('/fourthquestion')" > &lt; </button>
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
    width: 30vw;
    margin: 0 auto;
    /* border: 1px solid red; */
}
.title {
    text-align: center;
}
.options {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    /* padding: 1rem 0; */
}
.Opt {
    background: white;
    padding: 1rem;
    border: transparent;
    width: 100%;
    text-align: left;
    /* border: 0.5px solid var(--secondaryColor); */
}
.opt2 {
    border-top: 1px solid black;
}


/* FOOTER */

.ret-icon {
    cursor: pointer;
    background: var(--primaryColor);
    border: none;
    color: var(--shade);
    padding: 0.2rem;
    border-radius: 0.3em;
    position: fixed;
    bottom: 30px;
    right: 40px;
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



</style>