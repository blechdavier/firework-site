<script lang="ts">
	import { onMount } from 'svelte';
	const carouselPhotos = ['glide.png', 'battle.png', 'lobby.png'];
	let index = 0;

	function next() {
		index = (index + 1) % carouselPhotos.length;
	}

	function prev() {
		index = (index - 1 + carouselPhotos.length) % carouselPhotos.length;
	}

	setInterval(next, 5000);

	let rainbowText: HTMLParagraphElement;

	let start = Date.now();

	function updateRainbowText(start: number) {
		if (!rainbowText) return;
		const text = rainbowText.innerText;
		const time = (Date.now() - start) / 1000;
		const newText = text
			.split('')
			.map(
				(char, i) =>
					`<span style="color: hsl(${(i / text.length - time) * 360}, 100%, 70%)">${char}</span>`
			)
			.join('');
		rainbowText.innerHTML = newText;
	}

	setInterval(() => updateRainbowText(start), 1000 / 10);
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet" />

<section class="h-screen bg-cover bg-center bg-[url(earth.webp)] flex flex-col">
	<div class="flex flex-col items-center justify-center flex-grow">
		<h1 class="text-5xl sm:text-8xl font-bold text-white/70 tracking-wider sm:mt-8">Firework</h1>
		<div class="h-0 px-4 mb-5 sm:mb-0">
			<h2 class="text-lg sm:text-2xl font-bold text-sky-600/40 tracking-wide">
				An implementation of the Minecraft server written in Rust.
			</h2>
		</div>
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
	<div class="h-8 sm:h-32 bg-gradient-to-b from-transparent to-slate-900" />
</section>
<section class="bg-gradient-to-b from-slate-900 via-sky-950 to-slate-900 text-white/80 md:p-32 p-4">
	<h1 class="text-white/90 text-6xl font-bold mb-8">About Firework</h1>
	<h2 class="text-white/90 text-4xl font-medium mb-4">How to Play</h2>
	<div
		class="rounded-2xl grid lg:grid-cols-2 text-white shadow-xl bg-gradient-to-br from-slate-700 to-slate-800"
	>
		<div class="p-8 border-slate-800/70 border-b lg:border-b-0 lg:border-r">
			<p class="text-sm text-white/70">Step 1</p>
			<p class="text-5xl font-extrabold">Install Minecraft</p>
			<a
				class="font-medium underline text-sky-400 hover:text-sky-600 mt-2"
				href="https://launcher.mojang.com/download/Minecraft.exe"
			>
				Official Admin-Free Download <span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="inline-block ml-1 -mt-1"
						viewBox="0 0 16 16"
					>
						<path
							d="M6.555 1.375 0 2.237v5.45h6.555V1.375zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16V0z"
						/>
					</svg>
				</span>
			</a>
			<a
				class="font-medium underline text-sky-400 hover:text-sky-600 block"
				href="https://www.minecraft.net/en-us/download"
				target="_blank"
			>
				Standard Download
			</a>
			<a
				class="font-medium underline text-sky-400 hover:text-sky-600 block"
				href="https://youtube.com/watch?v=dQw4w9WgXcQ"
				target="_blank"
			>
				Download for Arch Linux
			</a>
		</div>
		<div class="p-8">
			<p class="text-sm text-white/70">Step 2</p>
			<p class="text-5xl font-extrabold">Add Server:</p>
			<p
				class="text-3xl sm:text-5xl font-mono bg-slate-900 rounded-md p-2 mt-2 inline-block"
				bind:this={rainbowText}
			>
				firework.gg
			</p>
		</div>
	</div>
	<h2 class="text-white/90 text-4xl font-medium mb-4 mt-8">Project Statistics</h2>
	<div
		class="rounded-2xl grid lg:grid-cols-4 text-white shadow-xl bg-gradient-to-br from-slate-700 to-slate-800"
	>
		<div class="p-8">
			<p class="text-sm text-white/70">Lines of Rust</p>
			<p class="text-6xl font-extrabold">15K+</p>
		</div>
		<div class="p-8 border-slate-800/70 border-y lg:border-y-0 lg:border-x">
			<p class="text-sm text-white/70">Hours</p>
			<p class="text-6xl font-extrabold">600+</p>
		</div>
		<div class="p-8 border-slate-800/70 border-b lg:border-b-0 lg:border-r">
			<p class="text-sm text-white/70">GitHub Commits</p>
			<p class="text-6xl font-extrabold">260+</p>
		</div>
		<div class="p-8">
			<p class="text-sm text-white/70">Concurrent Players/Machine</p>
			<p class="text-6xl font-extrabold">1K+</p>
		</div>
	</div>
	<h2 class="text-white/90 text-4xl font-medium mb-4 mt-8">Project Description</h2>

	<article class="rounded-2xl p-8 shadow-xl bg-gradient-to-br from-slate-700 to-slate-800">
		<div>
			<h1 class="text-6xl font-bold text-white">From Bytes to Blocks</h1>
			<h2 class="text-2xl font-bold text-white">Heestand, Bradford (2023)</h2>
		</div>
		<div class="space-y-4">
			<h2 class="text-4xl font-bold text-white mt-16">Introduction</h2>
			<p>
				Our goal was to do a difficult project relating to systems programming in Rust. Rust allowed
				us to write safe code because it guarantees memory-safety and thread-safety – enabling us to
				eliminate many classes of bugs at compile-time. Along with this safety, Rust is blazingly
				fast and memory-efficient: with no runtime or garbage collector, it can power
				performance-critical services, which our project is not, but it is awesome that it lets
				Firework be damn fast.
			</p>
			<p>
				The project we chose to do was implementing the Minecraft server application from the ground
				up. With the framework that we created with our server application, we chose to reimplement
				the Glide and Battle minigames from Minecraft: Console Edition.
			</p>
		</div>
		<div class="space-y-4">
			<h2 class="text-4xl font-bold text-white mt-16">Justification</h2>
			<p>We chose reimplementing the Minecraft server application because it:</p>
			<ul class="list-disc ml-12">
				<li>
					<p>Has protocol built directly on top of TCP with many complex elements:</p>
				</li>
				<li>
					Has complex multithreaded systems and logic that would allow us to learn and take
					advantage of some of the intricacies of using Rust in a complex codebase
				</li>
				<li>
					Minecraft is fun and has a wide appeal among kids and teens, so we can cultivate a
					community around our project
				</li>
			</ul>
		</div>
		<div class="flex flex-col relative">
			<div
				class="-ml-10 md:-ml-16 w-[calc(100%+80px)] md:w-[calc(100%+128px)] shadow-xl rounded-2xl p-4 bg-gradient-to-br from-slate-600 to-slate-700 my-12"
			>
				<h2 class="text-4xl font-bold text-white mb-4">Image Carousel</h2>

				<div
					class="aspect-video relative bg-stone-700 overflow-hidden rounded-md md:rounded-2xl shadow-xl"
				>
					<div class="absolute h-full w-full">
						{#each carouselPhotos as photo, i}
							<img
								class="absolute h-full w-full object-cover transition-opacity duration-500"
								src={photo}
								alt=""
								style={`opacity: ${i === index ? 1 : 0}`}
							/>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="space-y-4 text-white/80">
			<h2 class="text-4xl font-bold text-white">Deliverables</h2>
			<h3 class="text-2xl font-bold text-white">Protocol</h3>
			<p>
				The Minecraft client communicates with the server using a protocol: a fixed set of
				“packets,” complex data structures that are used to represent different objects or actions
				in the game world. Implementing a way to communicate with the Minecraft client was a
				prerequisite before we could start making any games.
			</p>
			<p>
				Deserializing server-bound packets and serializing client-bound packets allow interfacing
				with raw binary data and converting it to and from various packets for later processing
			</p>
			<h3 class="text-2xl font-bold text-white">Client Handling</h3>
			<p>
				Firework has to keep track of tons of data about each client, manage logging in to the
				server using Mojang's authentication API, and prevent unauthorized users from logging in.
			</p>
			<p>
				The login sequence is just the tip of the iceberg, though, and our server has to manage
				connected clients as they use and navigate the server, including running all client movement
				and hit packets through a simple anti-cheat.
			</p>
			<h3 class="text-2xl font-bold text-white">Glide Minigame</h3>
			<p>
				In the Glide Minigame, players race to be the first to complete a course, flying through on
				an "elytra", Minecraft's in-game equivalent of a hang glider. They use orange boost pads to
				gain speed, and smoky updrafts to gain altitude. In each of the three maps, there are
				opportunities to increase risk to take a shortcut.
			</p>
			<h3 class="text-2xl font-bold text-white">Battle Minigame</h3>
			<p>
				In the Battle Minigame, players fight to be the last one standing in a free-for-all, using
				weapons and armor that they find in treasure chests around one of three maps.
			</p>
			<p>
				Our team looked through the source code of Minecraft: Java Edition to find the exact logic
				and rules for PVP (player versus player) combat, and we implemented them in Rust. This is to
				make sure that the game is as close to the original as possible, and players with previous
				experience with the game can easily pick it up.
			</p>
			<h3 class="text-2xl font-bold text-white">Lobby & Queue</h3>
			<p>
				Firework has a lobby that players can join and leave at any time. When a player joins the
				server, they are put into the lobby, where they can choose to play either the Glide or
				Battle minigame. When a player chooses to play a minigame, they are put into a queue for
				that minigame. When the queue has enough players, the game starts, with all players in the
				queue being put into the game.
			</p>
			<p>
				At the end of the game, players are put back into the lobby, where they can choose to play
				another game.
			</p>
		</div>
		<div />
	</article>
</section>
