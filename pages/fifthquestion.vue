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
    --spacing: 0..05rem;
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
    /*font-family: var(--fontFamily);
    color: var(--fontColor);*/
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
    padding: 5rem 0;
}

.section-center {
    width: 40vw;
    margin-left: 350px;
    /* border: 1px solid red; */
    
}
.title {
    text-align: center;
    width: 48vw;
    margin: 0 auto;

}
.options {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    border: 0.5px solid black;
    margin-left: 100px;
    /* padding: 1rem 0; */
}
.Opt {
    background: white;
    padding: 1rem;
    border: transparent;
    
    text-align: left;
    /*border: 0.5px solid var(--secondaryColor); */
}
.opt2 {
    border-top: 0.5px solid black;
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