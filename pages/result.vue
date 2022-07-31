<template>
<div>
<div class="first-section">
            <div class="left-side">
                <h5>CUSTOM BEAUTY PLAN</h5>
                <h2>Recomended for <span>you</span></h2>
                <p>Your recommendation is based on your goals to focus on skin and to look young. We referenced hundreds of clinical studies to ensure you’re getting just what your body needs.</p>
                <a href="#">LEARN MORE</a>
            </div>

            <div class="right-side">
                <img class="right-img" src="@/images/result.jpeg" alt="">
            </div>
        </div>
        <div class="second-section">
            <div class="second-left-side">
                <h4>TREATMENTS</h4>
                <p>
                    Made just for you. Your go-to treatments recommended based on our analytical calculations.
                </p>
               
                    <button @click="$router.push('/9thquestion')">CONTINUE</button>
                
            </div>
            <div class="second-right-side">
                <div class="top-cards">
                <div class="img1 img-card">
                    <img class=" treatment-imgs" src="@/images/Rectangle img1.jpg" alt="">
                    <span class="title-price">
                    <h5 class="title">RHA® Collection</h5>
                    <span class="price">$200 - $5k</span>
                    </span>
                    <hr>
                    <p class="text">RHA® Collection is designed to be resilient enough to adapt to your facial movement.</p>
                </div>
                <div class="img-card">
                    <img class="treatment-imgs" src="@/images/Rectangle img2.jpg" alt="">
                    <span class="title-price">
                    <h5 class="title">Perk Up Botox®</h5>
                    <span class="price">$800 - $2k</span>
                    </span>
                    <hr>
                    <p class="text">Botox makes expression lines smoother within days of injections.</p>
                </div> 
            </div>
            <div class="buttom-cards">
            <div class="img3 img-card">
                <img class=" treatment-imgs" src="@/images/Rectangle img3.jpg" alt="">
                <span class="title-price">
                <h5 class="title">Biologique Recherche</h5>
                <span class="price">$550-$2.5k</span>
                </span>
                <hr>
                <p class="text">Clinical and personalised approach to skincare.</p>
            </div>
            <div class="img-card">
                <img class="treatment-imgs" src="@/images/Rectangle img4.jpg" alt="">
                <span class="title-price">
                <h5 class="title">Chic To Cheek</h5>
                <span class="price">$250 - $1k</span>
                </span>
                <hr>
                <p class="text">A microneedling treatment that stimulates collagen and elastin production for tighter skin.</p>
            </div>
        </div>
        </div>
        </div>
        </div>
</template>

<script>
export default {


}
</script>

<style >
*,::after,
::before {
    margin: auto;
    padding: 0;
    box-sizing: border-box;
}

body {
    color: #22252A;
}

a {
    text-decoration: none;
}

i {
    margin-right: 10px;
}

.left-side>h5 {
    position: absolute;
    margin-left: 50px;
    top: 186px;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.1em;
}

.left-side>h2 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 31px;
    margin-left: 50px;
    position: absolute;
    top: 229px;
}

.left-side>h2>span {
    color: #C58E7B;
}

.left-side>p {
    position: absolute;
    width: 421px;
    margin-left: 50px;
    top: 292px;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;
}

.left-side>a {
    position: absolute;
    margin-left: 50px;
    top: 472px;
    color: #22252A;
}

.left-side>a::after {
    content: '';
    position: absolute;
    width: 99%;
    transform: scaleX(1);
    height: 2px;
    top: 20px;
    left: 0;
    background-color: #22252A;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.left-side>a:hover::after {
    color: var(--clr-primary-5);
    transform: scaleX(0);
    transform-origin: bottom left;
}

.right-side>.right-img {
    position: absolute;
    width: 40%;
    height: 450px;
    left: 700px;
    top: 186px;
}


/* TREATMENT SECTION*/

.second-section {
    width: 100%;
    position: absolute;
    height: 996px;
    left: 0px;
    top: 800px;
    background: #F7F5F1;
    display: flex;
}

.second-left-side {
    width: 40%;
}

.second-left-side>h4 {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.1em;
    margin-left: 50px;
    margin-top: 102px;
}

.second-left-side>p {
    width: 309px;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-left: 50px;
    margin-top: 24px;
    line-height: 24px;
}

.second-left-side>button {
    width: 175px;
    height: 56px;
    margin-left: 50px;
    margin-top: 56px;
    background: #C58E7B;
    color: #F7F5F1;
    border-radius: 2px;
    border: none;
    cursor: pointer;
}

.second-left-side>button:hover {
    color: #22252A;
    transition: ease-in 0.5s;
}

.second-right-side {
    width: 50%;
    float: right;
}

.top-cards,
.buttom-cards {
    display: flex;
}

.img1,
.img3 {
    margin-right: 32px;
}

.img-card {
    width: 55%;
    height: 370px;
    margin-top: 102px;
    background: #FFFFFF;
    border: 1px solid #DADDE8;
    border-radius: 10px 10px 5px 5px;
}

.treatment-imgs {
    width: 100%;
    height: 214px;
}

.title-price {
    display: flex;
}

.title {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    margin-top: 35px;
    margin-left: 24px;
    width: 204px;
}

.price {
    align-items: center;
    padding: 6px 12px;
    width: 95px;
    height: 32px;
    background: #F7F0ED;
    color: #C58E7B;
    border-radius: 43px;
    margin-top: 35px;
}

hr {
    width: 320px;
    margin-left: 10px;
    margin-top: 14px;
    border: 1px solid #DADDE8;
}

.text {
    margin-left: 24px;
    margin-top: 15px;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
</style>