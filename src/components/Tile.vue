<template>
  <div class="card-holder">
    <div
        class="card"
        v-bind:class="{ isClickable: project.url, hidden: hidden }"
        v-on:click="openUrl"
    >
      <div v-if="project.lightbox">
        <lightbox
            :thumbnail="project.image"
            :images="[project.image]"
        ></lightbox>
      </div>
      <div v-else>
        <div v-if="project.video">
          <LazyVideoAsGIF :sources="[project.video + '.webm', project.video + '.mp4']"/>
        </div>
        <div v-else-if="project.youtube_url">
          <LazyYoutube :src="project.youtube_url" />
        </div>
        <div v-else>
          <img
              class="card-img-top"
              v-lazy="project.image"
              v-if="project.image"
          />
        </div>
      </div>
      <div v-html="project.rawhtml" v-if="project.rawhtml"></div>
      <article class="card-body">
        <h4 class="card-title" v-if="project.title">{{ project.title }}</h4>
        <div class="card-text">
          <p>
            <span v-html="project.caption" style="margin-right: 5px"> </span>
            <a :href="project.url" v-if="project.url">more</a>
          </p>
          <div class="text-muted" v-if="project.date">
            <time :datetime="project.date">{{
                project.date | moment("from", "now")
              }}
            </time>
            <div class="vcs-icon" v-if="project.bitbucket">
              <a :href="project.bitbucket" title="Bitbucket">
                <img
                    class="icon delay-1"
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/bitbucket.svg"
                />
              </a>
            </div>
            <div class="vcs-icon" v-if="project.github">
              <a :href="project.github" title="Github">
                <img
                    class="icon delay-1"
                    src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

export default {
  name: "Tile",
  props: {
    project: Object
  },
  data() {
    return {
      hidden: true
    };
  },
  methods: {
    openUrl(event) {
      if (this.project.url) {
        window.location.href = this.project.url;
      }
    },
    show() {
      this.hidden = false;
    }
  }
};
</script>

<style scoped lang="scss">
.card-holder {
  break-inside: avoid-column;
  padding: 10px;
}

.isClickable {
  cursor: pointer;
}

/*.isClickable:hover {
   transform: scale(1.03);
  } */

.card {
  transition: all 0.3s ease-in-out;
}

.hidden {
  opacity: 0;
}

img[lazy="loading"] {
  background-color: #fff;
  background-image: url("../assets/spinner.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.vcs-icon {
  float: right;
  cursor: pointer;

  img {
    width: 20px;
  }
}
</style>
