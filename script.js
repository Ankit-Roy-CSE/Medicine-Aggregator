window.onload = function(){
	function medApi(inputValue) {
		for(let i = 0; i < data.length; i++){
		  let name = data[i].name.toLowerCase();
		  if(name === inputValue.toLowerCase()){
			  return i;
		  }
	  }
	  return -1;
  }
  
  const wrapper = document.querySelector(".wrapper"),
  searchInput = wrapper.querySelector("input"),
  volume = wrapper.querySelector(".word i"),
  infoText = wrapper.querySelector(".info-text"),
  synonyms = wrapper.querySelector(".synonyms .list"),
  removeIcon = wrapper.querySelector(".search span"),
  searchBtn = wrapper.querySelector("#search-btn"),
  links = wrapper.querySelector(".links");
  
  searchBtn.addEventListener("click", function(){
	  
	  let inputValue = searchInput.value;
	  let ind ;
	  if(inputValue){
		  ind = medApi(inputValue);
		  if(ind == -1){
			wrapper.classList.remove("active");
			links.classList.remove("active");
			infoText.textContent = "Please enter a valid medicine name";
			infoText.style.color = "red"
		  }
		  else{
			infoText.style.color = "black"
			wrapper.classList.add("active");
	  		links.classList.add("active");
			loadMed(ind);
		  }
	  }
  });
  
  function loadMed(ind){
	  const medicine = data[ind];
		
		  // Populate the medicine name and description
		  document.querySelector('.medi-name p').textContent = medicine.name;
		  document.querySelector('.medi-name span').textContent = medicine.description;
		
		  // Populate the usage and dosage
		  document.querySelector('.meaning span').textContent = medicine.usage;
		  document.querySelector('.example span').textContent = medicine.dosage;
		
		  // Populate the side effects
		  document.querySelector('.side-effects .list div:nth-child(1)').textContent = 'Common: ' + medicine.sideEffects.common;
		  document.querySelector('.side-effects .list div:nth-child(2)').textContent = 'Rare: ' + medicine.sideEffects.rare;
		
		  // Populate the links
		  const links = document.querySelectorAll('.link');
		  for (let i = 0; i < links.length; i++) {
			const link = medicine.links[i];
			links[i].querySelector('.link-img').src = link.img;
			links[i].querySelector('a').href = link.url;
			links[i].querySelector('a').textContent = link.store;
			links[i].querySelector('.price').textContent = 'Price: ' + link.price;
			links[i].querySelector('.quantity').textContent = 'Quantity: ' + link.quantity;
		  }
  }	
}