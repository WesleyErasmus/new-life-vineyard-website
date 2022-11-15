<template>
    <!-- ========== Webpage Navbar ========== -->
    <nav id="app-navbar">
    
        <!-- Navbar Church Logo -->
        <div class="church-logo-container">
            <RouterLink class="nav-link-item" :to="{ name: 'home' }">
            <img class="nlv-logo" src="src\assets\nlv-logo-1.jpg" alt="NLV Logo">
            </RouterLink>
        </div>
    
        
        <!-- Navbar Meu Links -->
        <div class="nav-links">
            <RouterLink class="nav-link-item" :to="{ name: 'about' }">ABOUT US</RouterLink>
            <RouterLink class="nav-link-item" :to="{ name: 'ministries' }">MINISTRIES</RouterLink>
            <RouterLink class="nav-link-item" :to="{ name: 'prayer' }">COUNSELLING & PRAYER</RouterLink>
            <RouterLink class="nav-link-item" :to="{ name: 'sermons' }">SERMONS</RouterLink>
            <RouterLink class="nav-link-item dropdown" :to="{ name: 'resources' }">
    
                <!-- Resources dropdown -->
                <button class="dropbtn dropdown-toggle">RESOURCES</button>
                <div class="dropdown-content">
                    <a href="#">What does it mean to be a Christian</a>
                    <a href="#">Ready to give your life to Jesus</a>
                    <a href="#">How to pray</a>
                    <a href="#">The role of the church</a>
                    <a href="#">What is the Bible</a>
                    <a href="#">Dealing with grief</a>
                </div>
            </RouterLink>
            <!-- End of Resources dropdown -->
    
            <RouterLink class="nav-link-item" :to="{ name: 'giving' }">GIVING</RouterLink>
            <RouterLink class="nav-link-item" :to="{ name: 'contact' }">CONTACT</RouterLink>
        </div>
        <!-- End of Navbar Meu Links -->
    
        <!-- Become a member button -->
        <div class="church-member-container">
            <RouterLink class="nav-link-item" :to="{ name: 'home' }"><button class="nav-member-btn">BECOME A MEMBER</button></RouterLink>
        </div>
    </nav>
    <!-- ========== End of Navbar ========== -->

</template>

<script>
export default {

}
</script>

<style scoped>
/* ========== App Navbar ========== */
#app-navbar {
    z-index: 1;
    position: fixed;
    width: 100vw;
    padding: 0 1.95rem;
    display: flex;
    background: var(--secondary-color);
}

/* Navbar Logo image container */
.church-logo-container {
    position: absolute;
    top: 0;
    left: 4%;
    height: 100%;
    display: flex;
    align-items: center;
}

/* Navbar logo img sizing and border */
.nlv-logo {
    width: 65px;
    border-radius: 50%;
}

/* Navbar become a member button */
.church-member-container {
    position: absolute;
    top: 0;
    right: 4%;
    height: 100%;
    display: flex;
    align-items: center;
}

/* Navbar menu buttons spacing */
.nav-links {
    height: 100%;
    padding: 20px 0 0;
    display: flex;
    align-items: center;
    align-items: flex-end;
    left: 7%;
}

/* Navbar link/button styling */
.nav-links a {
    height: 100%;
    margin: 10px 0 0 40px;
    font-size: calc(14px + 0.2rem);
    text-decoration: none;
    color: var(--primary-color);
    margin-bottom: 25px;
    border-bottom: 2px transparent solid;
}

/* Navbar link hover effects */
.nav-links a:hover {
    color: #444;
    border-bottom: 2px #444 solid;
}

/* ========== Resources dropdown ========== */
/* Resources nav button */
.dropbtn {
    background-color: transparent;
    border: none;
}

.dropbtn:hover {
    color: #444;
}

/* Dropdown router-link container */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Resources dropdown menu items */
.dropdown-content {
    display: none;
    position: absolute;
    margin-top: 0px;
    background-color: ghostwhite;
    min-width: 400px;
    font-size: 12px;
    z-index: 1;
}

/* Dropdown menu link styling */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    margin: 0 10px 10px 10px;
    margin: 0;
    text-decoration: none;
    display: block;
}

/* Dropdown menu link hover effects */
.dropdown-content a:hover {
    background-color: rgb(255, 255, 255);
}

/* Display Resources dropdown content on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

.nav-member-btn {
    border: none;
    background: #444;
    color: ghostwhite;
    padding: 0.65rem 2rem;
    border-radius: 4px;
    font-size: calc(12px + 0.1rem);
    line-height: 1;
}

.nav-member-btn:hover {
    opacity: 0.75;
}
</style>