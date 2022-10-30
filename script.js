const i = document.querySelectorAll(".img");
const container = document.querySelector("#container");
const section = document.querySelectorAll("section");

// let l = i.length;
// console.log();
const img = document.createElement("img");

let type = "sfw";
let category = "waifu";

const getSrc = async (el) => {
	fetch(`https://api.waifu.pics/${type}/${category}`)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			// img.src = data.url;
			// container.appendChild(img);
			// // container.appendChild(`<img src="${data.url}" />`);
			i[el].src = data.url;
		});
	// return url;
};
const addsrc = async () => {
	for (let el in i) {
		//console.log(el);
		await getSrc(el);
		//let src = res;
		// console.log(src);
	}
};

// // // console.log();
/*
const getSrc = new Promise((resolve, reject) => {
	fetch("https://api.waifu.pics/nsfw/waifu")
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			// console.table(data);
			// console.log(data.url);
			if (data.url !== "") resolve(data.url);
			else reject("error");
		});
	// return url;
});
const addsrc = async () => {
	for (let el in i) {
		console.log(el);
		await getSrc.then((res) => {
			let src = res;
			// console.log(src);
			i[el].src = src;
		});
	}
};
*/

addsrc();

document.getElementById("nsfw").addEventListener("click", () => {
	type = "nsfw";
	category = "neko";
	addsrc();
	document.getElementById("select1").style.display = "none";
	document.getElementById("select2").style.display = "block";
});
document.getElementById("home").addEventListener("click", () => {
	type = "sfw";
	category = "waifu";
	document.getElementById("select2").style.display = "none";
	document.getElementById("select1").style.display = "block";
	addsrc();
});

const select1 = document.getElementById("select1");
const select2 = document.getElementById("select2");

function update1() {
	category = select1.value;

	addsrc();
}
function update2() {
	category = select2.value;

	addsrc();
}
