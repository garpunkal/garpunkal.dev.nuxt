<template>
	<section class=" text-gray-500 bg-brand-dark dark:text-gray-300 dark:bg-gray-900 body-font " id="projects">
		<div class="container px-5 py-5 md:py-14 mx-auto">
			<div class="flex w-full flex-wrap mb-20">
				<h3 class=" text-3xl font-extrabold sm:text-65xl tracking-tighter lg:text-4xl text-gray-400 dark:text-gray-500 text-center w-full mt-10 lg:mt-0 ">
					{{ title }}
				</h3>
			</div>
			<div class="flex flex-wrap md:-m-2 -m-1">
				<div class="flex flex-wrap lg:flex-grow w-full md:w-1/3 lg:w-1/3" div v-for="project in items.slice(0, 9)" :key="project.id">
					<div class="md:p-2 p-1 w-full">
						<Project :item="project" :large="true" />						
					</div>
				</div>

				<div class="flex flex-wrap w-1/2 md:w-1/4 lg:w-1/4" div v-for="project in items.slice(9, items.length)" :key="project.id">
					<div class="md:p-2 p-1 w-full">
						<Project :item="project" :large="false" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import Project from "@/components/project.vue";
export default {
	components: { Project },
	props: {
		title: { type: String, required: true },
		items: { type: Array, required: true },
	}	
};
</script>
