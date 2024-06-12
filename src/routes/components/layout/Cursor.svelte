<script lang="ts">
	let pointer = { x: 0, y: 0, prev_x: 0, prev_y: 0 };
	let lines = { x1: 40, y1: 40, x2: 60, y2: 60 };
	let is_moving = false;
	let style = '';

	function moveCursor(e: MouseEvent) {
		pointer.prev_x = pointer.x;
		pointer.prev_y = pointer.y;
		pointer.x = e.pageX + document.body.getBoundingClientRect().x;
		pointer.y = e.pageY + document.body.getBoundingClientRect().y;

		const dist_x = (pointer.prev_x - pointer.x) / 1.5;
		const dist_y = (pointer.prev_y - pointer.y) / 1.5;

		lines = {
			x1: Math.min(40, 40 + dist_x),
			y1: Math.min(40, 40 + dist_y),
			x2: Math.max(60, 60 + dist_x),
			y2: Math.max(60, 60 + dist_y)
		};

		style = `transform: translateX(${pointer.x}px) translateY(${pointer.y}px);`;

		checkHover(e.target as Element);

		is_moving ? stopCursor() : (is_moving = true);
	}

	function checkHover(target: Element) {
		if (!target.closest('[data-cursor-pointer]')) return;

		style = `transform: translateX(${pointer.x}px) translateY(${pointer.y}px) rotate(45deg);`;
	}

	function stopCursor() {
		setTimeout(() => {
			lines = { x1: 40, y1: 40, x2: 60, y2: 60 };
			is_moving = false;
		}, 50);
	}
</script>

<svelte:window on:mousemove={moveCursor} />

<div class="cursor" {style}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
		<line class="cursor__line" x1="50" y1={lines.y1} x2="50" y2={lines.y2}></line>
		<line class="cursor__line" x1={lines.x1} y1="50" x2={lines.x2} y2="50"></line>
	</svg>
</div>

<style>
	:global(*) {
		cursor: none !important;
	}

	.cursor {
		z-index: 2147483647;
		user-select: none;
		pointer-events: none;
		overflow: visible;
		position: fixed;
		top: -50px;
		left: -50px;
		width: 100px;
		height: 100px;
		box-sizing: border-box;
		border-radius: 50%;
		mix-blend-mode: difference;
		transition:
			200ms,
			transform 100ms;
	}
	/*
  .pointer::before {
    content: '';
    position: absolute;
    top: 25px;
    left: 25px;
    width: 50px;
    height: 50px;
    border: 1px solid rgb(var(--foreground));
    border-radius: 50%;
  }
  */
	.cursor__line {
		stroke: rgb(var(--foreground));
		stroke-linecap: round;
		stroke-miterlimit: 10;
	}
</style>
