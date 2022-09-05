<template>
    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="img">
                    <img src="@/images/Group 403.png" alt="" class="logo">
                    </div>
                    <div class="title">
                        <h4>We're done</h4>
                        <h6>We’re so excited to see you! We will be contacting<br> you soon at (555)-555-5555 to confirm your <br>appointment!</h6>
                    </div>
                    <div class="img">
                    <img src="@/images/Mask Group.jpg" alt="" class="nice">
                    </div>
                    
                </div>
            </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>
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
    font-size: xx-large;
    font-weight: 10;
    margin-top: 20px;
}
h6{
    font-family: var(--fontFamily);
    letter-spacing: var(--spacing);
    font-size: small;
    font-weight: 5;
    padding: 1rem 0;
}
.title {
    text-align: center;
}
.logo{
    margin-left:600px;
    margin-top: 50px;
}
.nice{
    width: 652px;
    margin-left:325px;
    margin-top: 30px;
    height: 368.83px;
    margin-bottom: 150px;
}

</style>
