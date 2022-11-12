<script setup lang="ts">

</script>


<template>
  <nav id="header-navbar" class="navbar navbar-expand-lg header-lightblue">
    <div class="container">

      <!-- logo -->
      <a class="navbar-brand" href="#">
        <img src="../assets/lisa-logo.png" role="img" aria-label="logotipo lisa" alt="logotipo lisa">
      </a>

      <!-- hamburger menu -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- nav items -->
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><RouterLink class="nav-link text-primary" to="/">home</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link text-primary" to="/estudo">o estudo</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link text-primary" to="/participantes">participantes</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link text-primary" to="/publicacoes">publicações</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link text-primary" to="/calendario">calendário</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link text-primary" to="/galeria">galeria</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link text-primary" to="/faq">FAQ's</RouterLink></li>
          <li class="nav-item"><RouterLink class="nav-link text-primary" to="/contactos">contactos</RouterLink></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../scss/main.scss";
#header-navbar {
  /*height: $nav-height;*/
}
.text-primary {
  color: $primary !important;
}

.header-lightblue {
  background-color: $color-blue4;
}

#header-navbar .navbar-nav {
  font-size: 1.2rem;
  font-weight: bold;
  font-family: $font-title;
}
#header-navbar .navbar-nav a {
  color: $primary;
}


#header-navbar .navbar-nav a:hover,
#header-navbar .navbar-nav .router-link-active {
  text-decoration-line: underline;
  text-decoration-thickness: 25%;
  text-decoration-color: $tertiary;
}

#header-navbar .navbar-nav .router-link-active {
  //color: $tertiary !important;
}

</style>