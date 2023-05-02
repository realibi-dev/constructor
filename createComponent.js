const button = document.querySelector("#create_btn");

button.addEventListener("click", () => {
    let title = document.querySelector("#title_input").value;
    let html = document.querySelector("#html_input").value;
    let styles = document.querySelector("#styles_input").value;

    let component = {
        title,
        html,
        styles,
    }

    let componentsArray = JSON.parse(localStorage.getItem("components")) || [];
    componentsArray.push(component);
    localStorage.setItem("components", JSON.stringify(componentsArray));

    title = "";
    html = "";
    styles = "";
    alert("Компонент успешно создан!");
});