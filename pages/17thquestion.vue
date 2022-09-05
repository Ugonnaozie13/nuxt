<template>
<div class="big-container">
        <div class="main">
            <h4>Do you have any upcoming <br> vaccination?</h4>
        <h6>Vaccinations can sometimes affect the outcomes of certain<br>
           treatments. If you have, or if you have, any type of<br>
           vaccine within 30days of treatment, please indicate the<br>
           vaccination date below.</h6>
        </div>   
    <div class="cont">
        <p>SEP 2021</p>
        <p>OCT 2021</p>
        <P>NOV 2021 </P>
    </div>
    
    <div class="calend">
        <div class="con">
            <div class="calendar">
                <div class="weekdays">
                    <div>SU</div>
                    <div>MO</div>
                    <div>TU</div>
                    <div>WE</div>
                    <div>TH</div>
                    <div>FR</div>
                    <div>SA</div>
                </div>  
                <div class="days">
                    <div class="prev-date">26</div>
                    <div class="prev-date">27</div>
                    <div class="prev-date">28</div>
                    <div class="prev-date">29</div>
                    <div class="prev-date">30</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                    <div>16</div>
                    <div>17</div>
                    <div>18</div>
                    <div>19</div>
                    <div>20</div>
                    <div>21</div>
                    <div>22</div>
                    <div>23</div>
                    <div>24</div>
                    <div>25</div>
                    <div>26</div>
                    <div>27</div>
                    <div>28</div>
                    <div>29</div>
                    <div>30</div>
                </div>
            </div>   
        </div>  
    </div>
     <div>
    <button class="cont-btn" @click="$router.push('/endpage')">Continue</button>
    </div>
<div>
    <button class="btn" type="button" @click="$router.push('/16thquestion')" > &lt; </button>
</div>
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
.main{
    text-align: center;
    justify-content: center;
    align-items: center;
    /* border: 1px solid blue; */
}
h1,
h2,
h3,
h4 {
    letter-spacing: var(--spacing);
    font-size: x-large;
    font-weight: 10;
}

.event{
    justify-content: center;
    text-align: center;
    margin-top: 20px;
}
.event input{
    width: 32rem;
    border-radius: 2px;
    border: 1px solid rgb(131, 131, 134);
    padding: 12px;
}

.cont{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.cont p{
    font-size: 13px;
    padding: 0 78px;
}
.calend{
    width: 100%;
    height: 50vh;
    color: rgb(36, 36, 39);
    /* margin-left: 20px; */
    display: flex;
    justify-content: center;
    align-items: center;
    
    /*
    
*/
}
.calendar{
    width: 32rem;
    height: 18rem;
    background-color: white;
    border: 1px solid rgb(119, 119, 119);
    
}

.weekdays{
    width: 100%;
    height: 3rem;
    padding-bottom: 7px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(119, 119, 119);
}

.weekdays div{
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.1rem;
    width:calc(31.2rem / 7);
    display: flex;
    justify-content: center;
    align-items: center;
}

.days{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0.2rem;
}

.days div{
    font-size: 12px;
    margin: 0.3rem;
    width: calc(27rem / 7);
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.prev-date{
    opacity: 0;
}

.days div:hover{
    background-color: rgb(252, 249, 249);
    border: 1px solid rgb(161, 160, 160);
    cursor: pointer;
    border-radius: 50px;
}

.but button{
    padding: 15px 55px 15px 55px;
    background-color: rgb(167, 125, 91);
    color: white;
    border: none;
    cursor: pointer;
    border-radius:50px;
}

.but{
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 40px 0px 40px 0px;
}
.h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
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
.cont-btn {
    width: 175px;
    height: 56px;
    margin-left: 550px;
    margin-top: 50px;
    background: #C58E7B;
    color: #F7F5F1;
    border-radius: 2px;
    border: none;
    cursor: pointer;
    text-align: center;
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
.big-container{
    margin-top: 80px;
}

</style>

