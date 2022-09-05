 <template>

    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="title">
                        <h4>Please provide your contact information?</h4>
                        <h6>We’ll contact you in your registered contact details to schedule your appointment.</h6>
                    </div>
                    
                    <article class="options">

                      <div class="event">
                     <input type="text" placeholder="First name">
                    </div>
                    <div class="event">
                    <input type="text" placeholder="Last name">
                   </div>
                    <div class="event">
                    <input type="text" placeholder="Email Address">
                    </div>
                     <div class="event">
                    <input type="text" placeholder="Mobile number">
                    </div>
                    </article>
                    
                    
                </div>
            </section>
            <div>
                <button class="cont-btn" @click="$router.push('/12thquestion')">Continue</button>
            </div>
            <div>
                    <button class="btn" type="button" @click="$router.push('/10thquestion')" > &lt; </button>
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
    --spacing: 0.1rem;
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
  /*  font-family: var(--fontFamily);
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
    /*padding: 0.5rem;*/
    width: 30vw;
    margin: 0 auto;
    
}
.title {
    text-align: center;
}
.options {
    margin-top:0px;
    margin-left: 30px;
    border:  transparent;
    padding: 1rem 0; 
}

h6{
    font-family: var(--fontFamily);
    letter-spacing: var(--spacing);
    font-size: small;
    font-weight: 5;
    padding: 1rem 0;
}
.event input{
    width: 20rem;
    border: 0.5px solid rgb(131, 131, 134);
    padding: 1rem;
    height: 50px;
    display: flex;
    
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


.btn{
    position: absolute;
    width: 20px;
    height: 20px;
    right: 50px;
    color: white;
    background-color: #c58e7b;
    border: transparent;
    margin-top: 250px;
    bottom: 5px;
}
</style>