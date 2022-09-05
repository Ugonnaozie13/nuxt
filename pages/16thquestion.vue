<template>
    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="title">
                        <h4>What budget would like us to keep in mind?</h4>
                        <h6>This will help us tailor treatment recommendations for you.</h6>
                        </div>
                            <div class="middle">
                                <div class="slider-container">
                                    <span class="bar"><span class="fill"></span></span>
                                    <input id="slider" class="slider" type="range" min="0" max="100" value="50">
                                    <h5> $500   $500-1K   $1k-$2k   $2k-$3k   $3k-$5k   $5k</h5>
                                </div>
                            </div>
                        

                    </div>
                    </section>
                      <div>
                    <button class="cont-btn" @click="$router.push('/17thquestion')">Continue</button>
                    </div>
             <div>
                    <button class="btn" type="button" @click="$router.push('/15thquestion')" > &lt; </button>
            </div>
                </div>
            
</template>

<script>
export default {

}
</script>

<style>

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
    --spacing: 0.05rem;
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
    font-size: medium;
    font-weight: 1;
    margin-top: 20px;
}

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
    width: 48vw;
    margin: 0 auto;

}

.middle {
	width: 80%;
	max-width: 500px;
    margin-left: 50px;
    margin-top: 30px;
}
.slider-container {
	position: relative;
}
.slider-container .bar {
	position: absolute;
	z-index: 1;
	left: 2px;
	top: 7px;
	width: 100%;
	height: 10px;
	border-radius: 5px;
	background-color: #4D4F52;
	overflow: hidden;
}
.slider-container .bar .fill {
	display: block;
	width: 0;
	height: 100%;
	background-color: white;
}
.slider-container .slider {
	position: relative;
	z-index: 2;
	-webkit-appearance: none;
	width: 100%;
	height: 10px;
	border-radius: 5px;
	outline: none;
	background-color: transparent;
}
.slider-container .slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	width: 30px;
	height: 30px;
	background-color: white;
	border-radius: 50%;
	cursor: pointer;
	outline: none;
	box-shadow: 0 0 0 0 rgba(98,0,238,.1);
	transition: .3s ease-in-out;
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
.btn{
    position: absolute;
    width: 40px;
    height: 40px;
    right: 50px;
    bottom: 20px;
    color: white;
    background-color: #c58e7b;
    border: transparent;
}
.page-controller{
    display: flex;
}

</style>
