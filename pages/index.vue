<template>
  <div>
    <Profile />
    <!-- <Projects :items="$page.highlights" title="Projects" />
		<Articles :items="$page.articles" /> -->
    <!-- <Experiences :items="experiences" /> -->
    <Tweets />
    <SiteFooter />
  </div>
</template>

<script>
import Experiences from "@/components/experiences.vue";
import SiteFooter from "@/components/sitefooter.vue";
import Projects from "@/components/projects.vue";
import Profile from "@/components/profile.vue";
import Articles from "@/components/articles.vue";
import Tweets from "@/components/tweets.vue";

export default {
  head() {
    return {
      bodyAttrs: {
        class: "bg-brand dark:bg-black",
      },
    };
  },
  components: {
    Experiences,
    SiteFooter,
    Projects,
    Profile,
    Articles,
    Tweets,
  },
  mounted: function () {
    document.querySelectorAll('a[href^="#projects"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
    document.querySelectorAll('a[href^="#top"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
    });
  },
  data() {
    return {
      companies: [],
      projects: [],
      experiences: [],
    };
  },
  async asyncData({ $axios }) {
    const baseApiUrl = "https://cloud.squidex.io/api/content/garpunkaldev/";
    const config = {
      headers: {
        "X-Flatten": true,
        "X-NoResolveLanguages": 1,
        "X-Languages": "en",
        timeout: 1000,
        retry: 3,
        retryDelay: 4000,
      },
    };

    const experiencesData = await $axios.$get(
      baseApiUrl + "experience",
      config
    );
    const companiesData = await $axios.$get(baseApiUrl + "company", config);
    const projectsData = await $axios.$get(baseApiUrl + "project", config);

    console.log(experiencesData);
    console.log(companiesData);
    console.log(projectsData);
  },
};
</script>
