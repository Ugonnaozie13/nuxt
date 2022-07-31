<template>
    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="title">
                        <h4>What color is the hair in the desired hair removal area?</h4>
                    </div>
                   
            <div class="grid-container">
            <article class="options">
                <div class="grid item">
                <button class="Opt" @click="$router.push('/result')">
                <div >
                <div class="img">
                <img src="@/images/Mask Group.png" alt="" class="logo">
                </div>
                    <div class="subtitle">
                        White or Grey
                    </div>
                    </div>
                    </button>
                    </div>
                
                <div class="grid item">
                
                 <button class="Opt" @click="$router.push('/result')">
                <div >
                    <div class="img">
                    <img src="@/images/image 76.png" alt="" class="logo">
                    </div>
                        <div class="subtitle">
                             Red
                        </div>
                        </div>
                        </button>
                        </div>
                    
               <div class="grid item">
               <button class="Opt" @click="$router.push('/result')">
               <div>
                    <div class="img">
                    <img src="@/images/image 77.png" alt="" class="logo">
                    </div>
                        <div class="subtitle">
                            Blonde or light brown
                        </div>
                        </div>
                        </button>
                        </div>

               <div class="grid item">
               <button class="Opt" @click="$router.push('/result')">
               <div>
                    <div class="img">
                    <img src="@/images/image 74 (1).png" alt="" class="logo">
                    </div>
                        <div class="subtitle">
                            Dark brown
                        </div>
                        </div>
                        </button>
                        </div>

              <div class="grid item">
               <button class="Opt" @click="$router.push('/result')">
               <div>
                    <div class="img">
                    <img src="@/images/image 89.png" alt="" class="logo">
                    </div>
                        <div class="subtitle">
                            Dark
                        </div>
                        </div>
                        </button>
                        </div>
                        
                    </article>
                    </div>
                </div>
            </section>
            <div>
                    <button class="btn" type="button" @click="$router.push('/seventhquestion')" > &lt; </button>
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
:root {
    --primaryColor: #c58e7b;
    --secondaryColor: #22252a;
    --shade: #faf6f4;
    --fontColor: #f7f5f1;
    --spacing: 0.1rem;
    --fontFamily: "Trebuchet MS";
}
/* 
==========
Variables
==========
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
    grid-template-columns: 1fr 1fr 1fr;
    
    /* border: 1px solid black; */

}
.grid-item {
    padding: 0;
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

.logo {
  height: 100px;
  margin: 15px;
}
.subtitle{
    text-align: center;
} 
.logo-container{
     border-radius: 100px;
}


</style>