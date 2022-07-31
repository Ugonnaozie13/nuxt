<template>
    <nav class="navbar">
            <p class="nav-p">QUESTIONS? (917) 979-0001</p>              
            <a href="#" class="image">
                <img src="@/images/logo.png" alt="">
            </a>    
            <span class="nav-cancel"><i class="fa fa-times"></i>CANCEL</span>
        </nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
    background: #22252A;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    color: #F7F5F1;
    height: 70px;
}

.image{
    position: absolute;
    width: 186px;
    height: 51px;
    margin-left: 580px;
    top: 9px;
}

.nav-p {
    width: 100px;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 11px;
    letter-spacing: 0.06em;
    margin-left: 50px;
}

.nav-cancel {
    margin-right: 50px;
    font-family: 'Proxima Nova';
    font-size: 11px;
    line-height: 11px;
    cursor: pointer;
}

i {
    margin-right: 10px;
}

</style>
