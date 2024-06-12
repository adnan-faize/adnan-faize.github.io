<script>
	// TODO : send message via mail
</script>

<article class="contact-form">
	<form>
		<div class="name" >
			<label for="name"></label>
			<input type="text" placeholder="Name" name="name" required data-cursor-pointer />
		</div>
		<div class="phone" >
			<label for="phone"></label>
			<input type="text" placeholder="Phone number" name="phone" data-cursor-pointer />
		</div>
		<div class="email" >
			<label for="email"></label>
			<input type="email" placeholder="Mail" name="email" required data-cursor-pointer />
		</div>
		<div class="subject" >
			<label for="subject"></label>
			<select placeholder="Subject line" name="subject" required data-cursor-pointer> <!-- TODO : custom dropdown -->
				<option disabled hidden selected>Subject line</option>
				<option data-cursor-pointer>I'd like to make a proposal</option>
				<option data-cursor-pointer>blabla</option>
				<option data-cursor-pointer>Other subject line</option>
			</select>
		</div>
		<div class="custom-subject" data-cursor-pointer> <!-- TODO : only show if custom subject -->
			<label for="custom-subject"></label>
			<input type="text" placeholder="Subject line" name="custom-subject" required />
		</div>
		<div class="message" data-cursor-pointer>
			<label for="message"></label>
			<textarea name="message" placeholder="Message" cols="30" rows="5" required></textarea>
		</div>
		<div class="submit" data-cursor-pointer>
			<input type="submit" value="Send Message" />
		</div>
	</form>
</article>

<style>
	.contact-form {
		border: 3px solid rgb(var(--foreground));
		position: relative;
		font-family: 'Montserrat';
		margin: 60px auto;
		padding: 8rem 4rem;
	}

	input,
	select,
	textarea {
		margin: 0;
		font: inherit;
		color: rgb(var(--foreground));
	}

	input[type='text'],
	[type='email'],
	select,
	textarea {
		background: none;
		border: none;
		border-bottom: 2px solid rgb(var(--foreground));
		letter-spacing: 1px;
		margin-bottom: 1.875em;
		padding-bottom: 0.875em;
		text-transform: uppercase;
		width: 100%;
	}

	input:focus,
	select:focus,
	textarea:focus {
		outline: none;
	}

	input {
		line-height: normal;
	}

	textarea {
		overflow: auto;
		width: 100%;
		height: 150px;
		resize: none;
		line-height: 150%;
	}

	.name {
		float: left;
		width: 45%;
	}

	.phone {
		float: right;
		width: 45%;
	}

	.email {
		width: 100%;
	}

	.subject {
		width: 100%;
	}

	.message {
		float: none;
	}

	.submit {
		display: block;
	}
</style>
