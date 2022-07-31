 <template>

    <div>
         <section class="hero-section">
                <div class="section-center">
                    <div class="title">
                        <h4>Please provide your contact information?</h4>
                        <h6>We’ll contact you in your registered contact details to schedule your appointment.</h6>
                    </div>
                    <div class ="wrapper">
                    <article class="options">
                        <div>
                        
                        <button class="Opt">
                            <h5>Acne</h5>
                        </button>
                        
                        </div>
                        <div>
                        
                        <button class="Opt opt2">
                            <h5>Eczema</h5>
                        </button>
                        
                        </div>
                        <div>
                        
                        <button class="Opt opt3">
                            <h5>Psoriasis</h5>
                        </button>
                        
                        </div>
                        <div>
                         
                        <button class="Opt opt4">
                            <h5>Rheumatoid Arthritis</h5>
                        </button>
                        
                        </div>
                        <div>
                        
                        <button class="Opt opt5">
                            <h5>Active cold store</h5>
                        </button>
                       
                        </div>
                        <div>
                         
                        <button class="Opt opt6">
                            <h5>Rosacea</h5>
                        </button>
                      
                        </div>
                        <div>
                         
                        <button class="Opt opt7">
                            <h5>Melasma</h5>
                        </button>
                        
                        </div>
                        <div>
                         
                        <button class="Opt opt7">
                            <h5>Myasthenia Graves</h5>
                        </button>
                       
                        </div>
                    </article>
                    </div>
                    
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
    font-size:large;
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
.opt3{
     border-top: 1px solid black;
}
.opt4{
     border-top: 1px solid black;
}
.opt5{
     border-top: 1px solid black;
}
.opt6{
     border-top: 1px solid black;
}
.opt7{
     border-top: 1px solid black;
}
.opt8{
     border-top: 1px solid black;
}




.wrapper{
    display:grid;
    grid-template-columns: 1fr 1fr ;
}
.button {
    padding: 1rem 4rem;
    background-color: #C58E7B;
    color: white;
    width: 20rem;
    font-weight: 700;
    transition: 0.5s;
}
h6{
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    margin-bottom: 72px;
    font-size: small;
}
</style>