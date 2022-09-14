<template>
	<section class=" bg-brand-dark dark:bg-gray-900 body-font" id="experience">
		<div class="container px-5 py-5 md:py-14 mx-auto">
			<div class="flex w-full flex-wrap mb-20">
				<h3 class="text-3xl font-extrabold sm:text-65xl tracking-tighter lg:text-4xl  text-center w-full mt-10 lg:mt-0 text-gray-400  dark:text-gray-300">
					Experience
				</h3>
			</div>
			<div class="pt-0 pb-0 sm:items-start mx-auto" v-for="item in items" :key="item.id">
				<Experience :item="item" />
			</div>
		</div>
	</section>
</template>
<script>

export default {
	props: { items: { type: Array, required: true } },
};
</script>
