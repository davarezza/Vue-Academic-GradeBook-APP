<template>
    <header>
        <div class="container-fluid">
            <div class="nav-logo">
                <img class="my-2" src="/img/logosmk.png" alt="Main Icon">
            </div>

            <div class="nav-items">
                <div class="item"><router-link active-class="active" to="/">Home</router-link></div>
                <div class="item"><router-link active-class="active" to="/about">About</router-link></div>
                <div class="item"><router-link active-class="active" to="/nilai">Grade</router-link></div>
                <div class="item"><router-link active-class="active" to="/beranda">Calculator</router-link></div>

                <div class="item-button"><router-link to="/" type="button">Login</router-link></div>
            </div>
        </div>
    </header>
</template>