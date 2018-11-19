let search = document.getElementById('filter-search');
let tags = document.getElementById('buttons');
//
let images = [];
let buttons = [];

let gallery = document.getElementById('gallery');
//
let imgAlts = ["Rabbit", "Sea", "Deer", "New York Street Map", "Trumpet Player", "Typographic Study", "Bicycle Japan", "Aqua Logo", "Ghost"];
let imgTags = ["Animators", "Designers", "Photographers","Filmmakers", "Illustrators"];

//
let newButton = document.createElement("BUTTON");
newButton.innerHTML = "Show all";
newButton.className = 'active';
buttons.push(newButton);
tags.appendChild(newButton);



for (i = 0; i < imgAlts.length; i++){
	let myImage = new Image();
	myImage.src = 'img/p'+(i+1)+'.jpg';
	myImage.dataset.tags = "";
	myImage.alt = imgAlts[i];
	myImage.flag1 = "";
	myImage.flag2 = "";
	images.push(myImage);
	gallery.appendChild(myImage);
}

images[0].dataset.tags = "Animators, Illustrators";//imgTags[0]+", "+imgTags[4];
images[1].dataset.tags = "Photographers, Filmmakers";//imgTags[2]+", "+imgTags[3];
images[2].dataset.tags = "Photographers, Filmmakers";//imgTags[2]+", "+imgTags[3];
images[3].dataset.tags = "Designers";//imgTags[1]+", "+imgTags[4];
images[4].dataset.tags = "Photographers, Filmmakers";//imgTags[2]+", "+imgTags[3];
images[5].dataset.tags = "Designers, Illustrators";//imgTags[1]+", "+imgTags[4];
images[6].dataset.tags = "Photographers";//imgTags[2];
images[7].dataset.tags = "Designers";//imgTags[1];
images[8].dataset.tags = "Animators, Illustrators";//imgTags[0]+", "+imgTags[4];

for (i = 0; i < imgTags.length; i++){
	let newButton = document.createElement("BUTTON");
	newButton.innerHTML = imgTags[i];
	buttons.push(newButton);
	tags.appendChild(newButton);
}

function searchFilter(){
	
	let query = search.value.trim().toLowerCase();

	for(i = 0; i<images.length; i++){
		index = images[i].alt.trim().toLowerCase().indexOf(query);
      	if (index === -1){
    		images[i].flag1 = "none";
    	} else {
    		images[i].flag1 = "";
    	}
	}
	update();
}

search.addEventListener("keyup", searchFilter);

tags.onclick = function(event) {
    if (imgTags.indexOf(event.target.innerHTML) > -1 || event.target.innerHTML === "Show all" ){
    	for(i = 0; i<buttons.length; i++){
      		buttons[i].classList.remove("active");
		}
		event.target.className = "active";
    	for(i = 0; i<images.length; i++){
	    	if (images[i].dataset.tags.includes(event.target.innerHTML)){
	    		images[i].flag2 = "";
	    	} else {
	    		images[i].flag2 = "none";
	    	}
	    	if (event.target.innerHTML.includes("Show all")){
	    		images[i].flag2 = "";
	    	}
		}
	update();
    }
}

function update(){
	for(i = 0; i<images.length; i++){
		if (images[i].flag1 === "none" || images[i].flag2 === "none"){
			images[i].style.display = "none";
		} else {
			images[i].style.display = "";
		}
	}
}
