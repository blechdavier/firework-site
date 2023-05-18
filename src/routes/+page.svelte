<script lang="ts">
	const carouselPhotos = ['glide.png', 'battle.png', 'lobby.png'];
	let index = 0;

	function next() {
		index = (index + 1) % carouselPhotos.length;
	}

	function prev() {
		index = (index - 1 + carouselPhotos.length) % carouselPhotos.length;
	}
</script>

<!-- <section class="h-screen w-screen bg-gradient-to-br from-indigo-200 to-teal-100 overflow-hidden">
	<div class="h-screen w-screen grid grid-cols-2 -rotate-6">
		<div
			class="rounded-3xl bg-gradient-to-br from-white to-neutral-100 shadow-2xl shadow-cyan-700/20 p-8 m-4"
		>
			<h2 class="font-bold text-3xl text-center">15,000</h2>
			<p class="font-bold text-lg text-center">Lines of Rust.</p>
		</div>
		<div
			class="rounded-3xl bg-gradient-to-br from-white to-neutral-100 shadow-2xl shadow-cyan-700/20 p-8 m-4"
		>
			<h2 class="font-bold text-3xl text-center">600+</h2>
			<p class="font-bold text-lg text-center">Hours.</p>
		</div>
		<div
			class="rounded-3xl bg-gradient-to-br from-white to-neutral-100 shadow-2xl shadow-cyan-700/20 p-8 m-4"
		>
			<h2 class="font-bold text-3xl text-center">250+</h2>
			<p class="font-bold text-lg text-center">GitHub Commits.</p>
		</div>
	</div>
</section> -->
<!-- 
<section class="h-screen w-screen bg-cover bg-center bg-black bg-[url(particles.jpg)] relative">
	<div class="absolute inset-0 bg-black/40" />
	<div class="absolute inset-0 z-10 flex flex-col items-center justify-center">
		<h1 class="text-white/70 font-bold text-6xl tracking-wide">Performance Like Never Before.</h1>
	</div>
</section> -->

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet" />

<section class="bg-cover bg-center bg-[url(earth.png)]">
	<div class="h-screen flex flex-col items-center justify-center">
		<h1 class="text-8xl font-bold text-white/70 tracking-wider mt-16">Firework</h1>
		<h2 class="text-2xl font-bold text-sky-600/40 tracking-wide">
			An implementation of the Minecraft server written in Rust.
		</h2>
		<div class="absolute bottom-2 animate-pulse flex flex-col items-center text-white">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="currentColor"
				class="bi bi-arrow-down-circle-fill"
				viewBox="0 0 16 16"
			>
				<path
					d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
				/>
			</svg>
			<p class="text-xl font-bold">Scroll to learn more.</p>
		</div>
	</div>
	<div class="h-32 bg-gradient-to-b from-transparent to-slate-900" />
</section>
<section class="bg-slate-900 text-stone-800 p-32">
	<div class="grid lg:grid-cols-3 text-white">
		<div class="rounded-t-2xl shadow-xl p-8 bg-gradient-to-br from-slate-700 to-slate-800">
			<p class="text-sm text-white/70">Lines of Rust</p>
			<p class="text-6xl font-extrabold">15K+</p>
		</div>
		<div class="shadow-xl p-8 bg-gradient-to-br from-slate-700 to-slate-800 border b">
			<p class="text-sm text-white/70">Lines of Rust</p>
			<p class="text-6xl font-extrabold">15K+</p>
		</div>
		<div class="rounded-b-2xl shadow-xl p-8 bg-gradient-to-br from-slate-700 to-slate-800">
			<p class="text-sm text-white/70">Lines of Rust</p>
			<p class="text-6xl font-extrabold">15K+</p>
		</div>
	</div>
</section>
