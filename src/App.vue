<template>
  <div id="app">
    <header>
      <div>
        <div id="title">
          <h1>Silvan Mühlemann</h1>
          <div id="subtitle">
            my weekend projects
            <!--  <li class="hide-on-tablets appear-later">Triathlete</li> -->
          </div>
        </div>
        <div id="social-icons">
          <div class="hold-togeher">
            <a title="Strava" href="http://app.strava.com/athletes/2276942"
              ><img
                class="icon delay-1"
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/strava.svg"
            /></a>
            <a title="Instagram" href="https://instagram.com/smuehlemann/"
              ><img
                class="icon delay-2"
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"
            /></a>
            <a
              title="Facebook"
              href="https://www.facebook.com/silvan.muehlemann"
              ><img
                class="icon delay-3"
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"
            /></a>
          </div>
          <div class="hold-togeher">
            <a
              title="LinkedIn"
              href="https://ch.linkedin.com/in/silvanmuehlemann"
              ><img
                class="icon  delay-4"
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"
            /></a>

            <a
              title="Soundcloud"
              href="https://soundcloud.com/silvan-muehlemann"
              ><img
                class="icon delay-5"
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/soundcloud.svg"
            /></a>
            <a title="Github" href="https://github.com/silvanm/"
              ><img
                class="icon delay-6"
                src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
            /></a>
          </div>
        </div>
      </div>
    </header>
    <projects></projects>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from '@/components/Projects'

export default {
  name: "app",
  components: {Projects}
};
</script>

<style lang="scss">
body {
  /* In the build this should override the bootstrap definitions */
  font-family: "Source Sans Pro", sans-serif !important;
  background-color: #eaeaea !important;
}

@media (max-width: 360px) {
  header > div {
    flex-wrap: wrap;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

header {
  opacity: 0;
  animation: fadeIn ease-in 1;
  animation-fill-mode: forwards;
  animation-duration: 0.2s;
  animation-delay: 0.1s;

  @media (max-width: 500px) {
    padding: 10px 0;
  }

  #subtitle {
    white-space: nowrap;
    display: inline-block;
    opacity: 0;
    animation: fadeIn ease-in 1;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
  }

  .icon {
    animation: fadeIn ease-in 1;
    animation-fill-mode: forwards;
    animation-duration: 0.2s;
    opacity: 0;
  }

  .delay-1 {
    animation-delay: 2s;
  }

  .delay-2 {
    animation-delay: 2.2s;
  }

  .delay-3 {
    animation-delay: 2.4s;
  }

  .delay-4 {
    animation-delay: 2.6s;
  }

  .delay-5 {
    animation-delay: 2.8s;
  }

  .delay-6 {
    animation-delay: 3s;
  }

  > div {
    width: 90%;
    padding: 10px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    > div {
      display: inline-block;
    }

    #title {
      h1 {
        margin-right: 5px;
      }
    }

    #social-icons {
      text-align: right;

      > div {
        display: inline-block;
        white-space: nowrap;
      }
    }
  }

  padding: 20px 0px;
  background-color: white;
  font-size: 1rem;

  h1 {
    font-size: 1.5rem;
  }

  h1,
  h2 {
    display: inline;
  }

  .icon {
    width: 20px;
    margin-left: 5px;
  }
}
</style>
<style>
@import "//fonts.googleapis.com/css?family=Source+Sans+Pro:400";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
