<template>
	<div class="w-full flex flex-row justify-start md:justify-center lg:justify-start items-center">
		<svg class="flex flex-grow-0 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" :class="cssclass" :stroke-width="strokeWidth" :stroke="stroke" :fill="fill" role="img" viewBox="0 0 24 24" >
					<title>{{title}}</title>
			<path :d="svgPath" :stroke-linecap="strokeLineCap" :stroke-linejoin="strokeLineJoin" />
		</svg>
		<span class="pl-1 flex-shrink">
			{{ title }}
		</span>
	</div>
</template>
<script>
export default {
	props: {
		title: { type: String, required: true },
		svgPath: { type: String, required: true },
		strokeWidth: { default: "", type: String },
		stroke: { default: "", type: String, },
		fill: { default: "currentColor", type: String },
		strokeLineCap: { default: "currentColor", type: String },
		strokeLineJoin: { default: "currentColor", type: String},
		cssclass: { default: "h-6 w-6 fill-current text-brand dark:text-brand p-1", type: String },
	},
};
</script>
