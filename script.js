

const wrapper = document.querySelector(".wrapper"),
	searchInput = wrapper.querySelector("input"),
	volume = wrapper.querySelector(".word i"),
	infoText = wrapper.querySelector(".info-text"),
	synonyms = wrapper.querySelector(".synonyms .list"),
	removeIcon = wrapper.querySelector(".search span"),
	searchBtn = wrapper.querySelector("#search-btn"),
	links = wrapper.querySelector(".links");

searchBtn.addEventListener("click", function(){
	wrapper.classList.add("active");
	links.classList.add("active");
})