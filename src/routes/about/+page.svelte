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

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap" rel="stylesheet" />

<svelte:head>
	<title>Firework (2023)</title>
</svelte:head>
<div class="relative">
	<div
		class="absolute inset-0 pattern-cross pattern-size-4 pattern-stone-200 pattern-bg-stone-100 -z-10"
	/>
	<section>
		<div class="p-24 font-serif text-xl text-slate-800 space-y-8">
			<div>
				<h1 class="text-6xl font-bold font-display text-slate-900">From Bytes to Blocks</h1>
				<h2 class="text-2xl font-bold font-display text-slate-900">Heestand, Bradford (2023)</h2>
			</div>
			<div class="space-y-4">
				<h2 class="text-4xl font-bold font-display text-slate-900">Introduction</h2>
				<p>
					Our goal was to do a difficult project relating to systems programming in Rust. Rust
					allowed us to write safe code because it guarantees memory-safety and thread-safety –
					enabling us to eliminate many classes of bugs at compile-time. Along with this safety,
					Rust is blazingly fast and memory-efficient: with no runtime or garbage collector, it can
					power performance-critical services, which our project is not, but it is awesome that it
					lets Firework be damn fast.
				</p>
				<p>
					The project we chose to do was implementing the Minecraft server application from the
					ground up. With the framework that we created with our server application, we chose to
					reimplement the Glide and Battle minigames from Minecraft: Console Edition.
				</p>
			</div>
			<div class="space-y-4">
				<h2 class="text-4xl font-bold font-display text-slate-900">Justification</h2>
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
				<div class="w-full aspect-video border relative bg-stone-700 overflow-hidden">
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
					<div class="absolute right-2 bottom-2 space-x-1 text-sm">
						<button
							on:click={prev}
							class="border rounded-full w-12 h-12 border-white text-white backdrop-blur-sm bg-black/10"
							>prev</button
						>
						<button
							on:click={next}
							class="border rounded-full w-12 h-12 border-white text-white backdrop-blur-sm bg-black/10"
							>next</button
						>
					</div>
				</div>
				<div class="aspect-video absolute bg-stone-800 -left-4 right-4 top-4 -z-10" />
			</div>
			<div class="space-y-4">
				<h2 class="text-4xl font-bold font-display text-slate-900">Deliverables</h2>
				<h3 class="text-2xl font-bold font-display text-slate-900">Protocol</h3>
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
				<h3 class="text-2xl font-bold font-display text-slate-900">Client Handling</h3>
				<p>
					Firework has to keep track of tons of data about each client, manage logging in to the
					server using Mojang's authentication API, and prevent unauthorized users from logging in.
				</p>
				<p>
					The login sequence is just the tip of the iceberg, though, and our server has to manage
					connected clients as they use and navigate the server, including running all client
					movement and hit packets through a simple anti-cheat.
				</p>
				<h3 class="text-2xl font-bold font-display text-slate-900">Glide Minigame</h3>
				<p>
					In the Glide Minigame, players race to be the first to complete a course, flying through
					on an "elytra", Minecraft's in-game equivalent of a hang glider. They use orange boost
					pads to gain speed, and smoky updrafts to gain altitude. In each of the three maps, there
					are opportunities to increase risk to take a shortcut.
				</p>
				<h3 class="text-2xl font-bold font-display text-slate-900">Battle Minigame</h3>
				<p>
					In the Battle Minigame, players fight to be the last one standing in a free-for-all, using
					weapons and armor that they find in treasure chests around one of three maps.
				</p>
				<p>
					Our team looked through the source code of Minecraft: Java Edition to find the exact logic
					and rules for PVP (player versus player) combat, and we implemented them in Rust. This is
					to make sure that the game is as close to the original as possible, and players with
					previous experience with the game can easily pick it up.
				</p>
				<h3 class="text-2xl font-bold font-display text-slate-900">Lobby & Queue</h3>
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
		</div>
	</section>
</div>
