<template>
    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="title">
                        <h4>Let’s personalize your options</h4>
                        <h6>New is exciting! In order for us to personalize <br> your options, please let us know which type(s) of <br> services you're most interested in.</h6>
                    </div>
                   
            <div class="grid-container">
            <article class="options">
                <div class="grid item">
                <div>
                <button class="Opt opt1" @click="$router.push('/15thquestion')">
                <div >
                <div class="logo-container">
                <img src="@/images/copy 1.png" alt="" class="logo">
                </div>
                    <div class="subtitle">
                        Hair Services
                    </div>
                    </div>
                    </button>
                    </div>
                </div>
                <div class="grid item">
                
                 <button class="Opt opt2" @click="$router.push('/15thquestion')">
                <div >
                    <div class="logo-container">
                    <img src="@/images/hair.png" alt="" class="logo">
                    </div>
                        <div class="subtitle">
                             Face and neck services
                        </div>
                        </div>
                        </button>
                        </div>
                    
               <div class="grid item">
               <button class="Opt opt3" @click="$router.push('/15thquestion')">
               <div>
                    <div class="logo-container">
                    <img src="@/images/copy 2.png" alt="" class="logo">
                    </div>
                        <div class="subtitle">
                            Body services
                        </div>
                        </div>
                        </button>
                        </div>

               <div class="grid item">
               <button class="Opt opt4" @click="$router.push('/15thquestion')">
               <div>
                    <div class="logo-contaier">
                    <img src="@/images/image 86.png" alt="" class="logo">
                    </div>
                        <div class="subtitle">
                            Medical services
                        </div>
                        </div>
                        </button>
                        </div>
                        
                    </article>
                    </div>
                </div>
            </section>
            <div>
                    <button class="cont-btn" @click="$router.push('/15thquestion')">Continue</button>
                    </div>
            <div>
                    <button class="btn" type="button" @click="$router.push('/13thquestion')" > &lt; </button>
            </div>
    </div>
</template>

<script>
export default {


}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;1,100&display=swap');
:root {
    --primaryColor: #c58e7b;
    --secondaryColor: #22252a;
    --shade: #faf6f4;
    --fontColor: #f7f5f1;
    --spacing: 0.05rem;
    --fontFamily: "Poppins";
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
    grid-template-columns: 1fr 1fr ;
    width: max-content;
    margin-left: 10px;
    

    
    /* border: 1px solid black; */

}
.grid-item {
    padding: 0;
}
.Opt {
    background: white;
    padding: 0.5rem;
    width: 100%;
    text-align: left;
    border: 0.5px solid var(--secondaryColor);
    border-right: transparent;
    border-bottom: transparent;
}

.opt4 {
    border-right: 0.5px solid black;
    border-bottom: 0.5px solid black;
}
.opt2 {
    border-right: 0.5px solid black;
}

.opt3 {
    
    border-bottom: 0.5px solid black;
}


.btn{
    position: absolute;
    width: 20px;
    height: 20px;
    right: 50px;
    
    color: white;
    background-color: #c58e7b;
    border: transparent;
}
.page-controller{
    display: flex;
}

.logo{
  height: 100px;
  margin: 15px;
  border-radius: 50px;
}
.subtitle{
    text-align: center;
} 

.Opt h5{
  font-weight: 400;
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
    text-align: center;
}

</style>