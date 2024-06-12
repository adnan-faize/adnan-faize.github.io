<script lang="ts">
	let nandeee_button: HTMLAnchorElement;
	let nandeee_content: HTMLElement;
	let adnan_button: HTMLElement;
	let adnan_content: HTMLElement;

	function handleSelectionClick(e: Event) {
		e.preventDefault();
		const href = (e.target as HTMLAnchorElement).href;

		if (href === nandeee_button.href) {
			nandeee_button.classList.add('active');
			nandeee_content.classList.remove('hide');
			adnan_button.classList.remove('active');
			adnan_content.classList.add('hide');
			return;
		}

		adnan_button.classList.add('active');
		adnan_content.classList.remove('hide');
		nandeee_button.classList.remove('active');
		nandeee_content.classList.add('hide');
	}
</script>

<ul class="selection">
	<li>
		<a
			href="nandeee"
			class="active"
			bind:this={nandeee_button}
			on:click={handleSelectionClick}
			data-cursor-pointer>NANDEEE</a
		>
	</li>
	<li>
		<a
			href="adnan-faize"
			bind:this={adnan_button}
			on:click={handleSelectionClick}
			data-cursor-pointer>Adnan Faize</a
		>
	</li>
</ul>
<section>
	<div class="content" id="nandeee" bind:this={nandeee_content}>
		<article>nandeee</article>
		<article>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum nemo aliquam porro sint omnis
			animi similique earum corrupti, sapiente veniam ducimus sunt consequuntur quaerat
			necessitatibus quis ipsam voluptates reprehenderit officia. Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Tenetur, commodi quaerat! Commodi totam qui asperiores doloribus
			distinctio, eligendi architecto quisquam praesentium vero optio aspernatur eveniet deserunt
			quis, nisi cum non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo
			consequatur velit nesciunt perferendis atque explicabo laboriosam, dolorum doloremque dicta
			corrupti rerum! Labore veniam, ex sunt qui quibusdam a in! Lorem ipsum dolor sit amet
			consectetur, adipisicing elit. Iste asperiores culpa dolor eligendi deserunt nesciunt tenetur
			quia, adipisci debitis modi ea voluptatibus eveniet doloremque earum nulla accusamus eum a
			cumque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, laudantium commodi
			pariatur placeat debitis dolore voluptates incidunt perspiciatis porro quibusdam, ut sint
			tenetur quam, nemo necessitatibus qui voluptate in omnis! Lorem ipsum dolor sit, amet
			consectetur adipisicing elit. Labore impedit error veritatis praesentium quia doloribus rerum
			delectus laboriosam architecto quibusdam reprehenderit facilis quae et debitis quam voluptate,
			illum iusto molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint
			tempora dolores? In est maxime officiis nostrum itaque, enim repellendus laborum, cupiditate,
			libero necessitatibus cumque vitae nesciunt inventore quam sequi? Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Minima quae culpa perspiciatis asperiores repudiandae quia
			assumenda est, aliquid, atque maxime soluta sint nihil nisi sapiente, eveniet nobis natus
			excepturi ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolor ea
			aliquam. Sunt cum reiciendis aspernatur accusamus maxime quo quis optio quaerat! Sit beatae a
			reiciendis cumque alias quod est! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
			Sunt id nemo tempore, dolores cupiditate in culpa accusamus consequuntur eveniet iure, vel
			quas amet quisquam delectus recusandae ea neque veritatis distinctio!
		</article>
	</div>
	<div class="content hide" id="adnan-faize" bind:this={adnan_content}>
		<article>adnan</article>
		<article>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum nemo aliquam porro sint omnis
			animi similique earum corrupti, sapiente veniam ducimus sunt consequuntur quaerat
			necessitatibus quis ipsam voluptates reprehenderit officia. Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Tenetur, commodi quaerat! Commodi totam qui asperiores doloribus
			distinctio, eligendi architecto quisquam praesentium vero optio aspernatur eveniet deserunt
			quis, nisi cum non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo
			consequatur velit nesciunt perferendis atque explicabo laboriosam, dolorum doloremque dicta
			corrupti rerum! Labore veniam, ex sunt qui quibusdam a in! Lorem ipsum dolor sit amet
			consectetur, adipisicing elit. Iste asperiores culpa dolor eligendi deserunt nesciunt tenetur
			quia, adipisci debitis modi ea voluptatibus eveniet doloremque earum nulla accusamus eum a
			cumque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, laudantium commodi
			pariatur placeat debitis dolore voluptates incidunt perspiciatis porro quibusdam, ut sint
			tenetur quam, nemo necessitatibus qui voluptate in omnis! Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Error architecto ex voluptatum velit quasi consequatur
			accusantium, rerum distinctio autem aliquam veniam fugit voluptatibus incidunt vitae aliquid.
			Officia autem quo aliquid? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
			accusantium cumque rerum quas deserunt, quos odit assumenda, sed id eius dicta sequi
			voluptatibus vel optio hic commodi expedita recusandae modi. Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Quam sapiente, aut ducimus molestiae cum libero provident
			veritatis quasi iure magni ipsam dignissimos repellat voluptatem iste aspernatur. Iure hic
			culpa est! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ex laudantium
			doloremque amet velit nulla sequi recusandae ut, qui asperiores delectus maiores pariatur
			adipisci id veritatis quibusdam voluptate doloribus enim. Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Aliquid, error, ab debitis officiis corporis fuga minus, harum
			dolores voluptatibus provident voluptas dignissimos nostrum exercitationem nam? Deleniti iusto
			ratione culpa explicabo.
		</article>
	</div>
</section>

<!-- image of me or nandee pers with desc & other things (dk) -->

<style>
	.selection {
		font-family: 'Clash Display';
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		list-style: none;
	}

	.selection li {
		margin: 3rem;
		padding: 1rem;
	}

	.selection li a {
		position: relative;
		color: rgb(var(--foreground));
		text-decoration: none;
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.125rem;
		word-spacing: 0.75rem;
		padding: 0 2rem;
		transition: all 500ms ease-out;

		&::before {
			content: '[';
			position: absolute;
			left: -0.75rem;
			top: -55%;
			font-weight: 200;
			font-size: 3rem;
			color: rgb(var(--foreground));
		}

		&::after {
			content: ']';
			position: absolute;
			right: -0.8rem;
			top: -55%;
			font-weight: 200;
			font-size: 3rem;
			color: rgb(var(--foreground));
		}

		&:hover,
		&.active {
			color: rgb(var(--background));
			background: rgb(var(--foreground));
		}
	}

	.content {
		display: block;

		&.hide {
			display: none;
		}
	}

	.content article {
		max-width: 768px; /* TODO */
	}
</style>
