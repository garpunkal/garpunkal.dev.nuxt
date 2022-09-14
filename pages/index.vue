<template>
	<div>
		<Profile />
		<Projects :items="projectsJson" title="Projects" />
		<Articles :items="articlesJson" />
		<Experiences :items="experiencesJson" />
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
import {
	buildList,
	mapProject,
	mapExperience,
	dynamicSortMultiple,
} from "@/utils/utilities.js";
import DevToSource from "@/utils/devto.js";

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
	async asyncData({ $axios, $config: { DEVTO_API_KEY }}) {
		const squidexUrl = "https://cloud.squidex.io/api/content/garpunkaldev/";
		const squidexConfig = {
			headers: {
				"X-Flatten": true,
				"X-NoResolveLanguages": 1,
				"X-Languages": "en",
				timeout: 1000,
				retry: 3,
				retryDelay: 4000,
			},
		};

		const experienceData = await $axios.$get(
			squidexUrl + "experience",
			squidexConfig
		);
		const companyData = await $axios.$get(
			squidexUrl + "company",
			squidexConfig
		);
		const projectData = await $axios.$get(
			squidexUrl + "project",
			squidexConfig
		);
		// experiences
		const experiencesJson = [];
		for (const item of experienceData.items) {
			// filter relations
			const company = companyData.items.find(function (x) {
				return x.id === item.data.company[0];
			});
			const projects = buildList(item.data.projects, projectData.items);
			const contribs = buildList(item.data.contributions, projectData.items);
			// map
			experiencesJson.push(mapExperience(item, company, projects, contribs));
		}

		// highlights
		const projectsJson = [];
		for (const item of projectData.items)
			if (item.data.IsHighlight === true) projectsJson.push(mapProject(item));

		projectsJson.sort(dynamicSortMultiple("-sortOrder", "title"));
		experiencesJson.sort(dynamicSortMultiple("-orderDate"));

		console.log($config.DEVTO_API_KEY);
		let devTo = new DevToSource('Y5PHSbDNbrjt7CdMfBzBwmA3');

		console.log(devTo);
		var articlesJson = await devTo.fetchDevToArticles();
		articlesJson.sort(dynamicSortMultiple("-published_at"));

		return { experiencesJson, projectsJson, articlesJson };
	},
};
</script>
