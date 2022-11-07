$(".landingContent").bind("mousewheel", function (event) {
	if (event.originalEvent.wheelDelta <= 0) {
		document.querySelector("#retrobg").classList.add("retrobg-shutdown");
	} else {
		document.querySelector("#retrobg").classList.remove("retrobg-shutdown");
	}
});

window.onload = function () {
	let vh = window.innerHeight;
	document.documentElement.style.setProperty("--vh", `${vh}px`);
};
