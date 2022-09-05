<template>

    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="title">
                        <h4>Where are you located ?</h4>
                    </div>

                    <article class="options" >
                        <div>
                        <button class="Opt opt" @click="$router.push('/secondquestion')">
                            <h5>Denver, CO</h5>
                        </button>
                        </div>
                        
                        <div>
                        <button class="Opt opt2" @click="$router.push('/secondquestion')">
                            <h5>Oklahoma City, OK</h5>
                        </button>
                        </div>
                        
                    </article>
                </div>
            </section>
            <div>
                    <button class="btn" type="button" @click="$router.push('/')" > &lt; </button>
            </div>
    </div>
</template>
<script></script>

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
   /* font-family: var(--fontFamily);
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
    border: 0.5px solid black;
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