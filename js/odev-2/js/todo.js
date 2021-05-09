let counter = 0;

function newElement() {
	let ulElem = document.querySelector("ul");
	// ! input alındı
	let text = document.querySelector("#task").value;
	let liElem = document.createElement("li");
	let textElem = document.createTextNode(text);
	if (text.trim() === "") {
		// ! error toast verildi
		$(".error").toast("show");
	} else {
		// ! "li" ekleniyor
		$(".success").toast("show");
		liElem.appendChild(textElem);
		ulElem.appendChild(liElem);
		localStorage.setItem(counter.toString(), text);
		counter++;

		// ! "x" ekleniyor
		let xsign = document.createTextNode("x");
		let spanElem = document.createElement("span");
		spanElem.className = "close";
		spanElem.appendChild(xsign);
		liElem.appendChild(spanElem);

		// ! "deleteElement" fonksiyonu ekleniyor
		spanElem.setAttribute("onclick", "deleteElement(this)");
	}
	document.querySelector("#task").value = "";
}

// ! çarpıya basılınca liste elemanı siliniyor
function deleteElement(ele) {
	ele.parentElement.remove();
}

// ! liste elemanının üstüne basılınca "yapıldı" olarak işaretleniyor
function checkedElement(ele) {
	ele.classList.toggle("checked");
}
