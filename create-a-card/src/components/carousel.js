function Carousel() {
	return (
		<div className="carousel">
			{document.addEventListener("DOMContentLoaded", function () {
				let elems = document.querySelectorAll(".carousel");
				let instances = M.Carousel.init(elems, options);
			})}
		</div>
	);
}

export default Carousel;
