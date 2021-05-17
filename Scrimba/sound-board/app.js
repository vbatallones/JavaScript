const buttons = document.querySelectorAll('button');
let current = '';

const playSoundHandler = (e) => {
	const sound = new Audio(`./sounds/${e.target.id}.mp3`);

	if (current === '') {
		current = sound;
	}
	current.pause();
	current = sound;
	sound.currentTime = 0;
	sound.play();
};

buttons.forEach((button) => {
	button.addEventListener('click', playSoundHandler);
});
