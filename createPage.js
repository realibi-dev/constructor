const previewBox = document.querySelector("#preview");
const componentsBox = document.querySelector("#components");

const components = JSON.parse(localStorage.getItem("components")) || [];
for (let i = 0; i < components.length; i++) {
    componentsBox.innerHTML += `<p onclick="selectComponent(${i})">${components[i].title}</p>`;
}

const selectComponent = index => {
    previewBox.innerHTML += components[index].html;
    previewBox.innerHTML += `<style>${components[index].styles}</style>`;
}

const savePage = () => {
    let pagesArray = JSON.parse(localStorage.getItem("pages")) || [];
    pagesArray.push({
        title: document.querySelector("#page_title").value,
        html: previewBox.innerHTML,
    });
    localStorage.setItem("pages", JSON.stringify(pagesArray));
    location.href = "pagesList.html";
}