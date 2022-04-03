<template>
  <div id="projects">
    <div id="columns">
      <tile
        v-for="project in projects"
        :key="project.url"
        :project="project"
      ></tile>
    </div>
  </div>
</template>

<script>
import Tile from "@/components/Tile";
import axios from "axios";

export default {
  name: "Projects",
  components: {
    Tile
  },
  data() {
    return {
      projects: Array
    };
  },
  methods: {
    fadeTiles: function() {
      this.$children.forEach(function(elem, ix) {
        window.setTimeout(() => {
          elem.show();
        }, ix * 50);
      });
    }
  },
  async mounted() {
    const response = await axios.get("/static/projects.json");
    this.projects = response.data;

    // The fade effect was initially thought as preloader. However this will result that on
    // fast connection the tiles are faded in too quickly. And on slow connections it takes
    // forever. Hence we set a fixed value here.
    window.setTimeout(this.fadeTiles, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#columns {
  column-width: 320px;
  column-gap: 15px;
  width: 90%;
  margin: 30px auto;
}

@media screen and (max-width: 500px) {
  #columns {
    margin: 10px auto;
  }
}

div#columns small {
  font-size: 1rem;
  float: right;
  text-transform: uppercase;
  color: #aaa;
}

div#columns small a {
  color: #666;
  text-decoration: none;
  transition: 0.4s color;
}

@media screen and (max-width: 750px) {
  #columns {
    column-gap: 0px;
  }

  #columns figure {
    width: 100%;
  }
}
</style>
