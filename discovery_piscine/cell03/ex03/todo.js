const ft_list = document.getElementById("ft_list");
load()
function newToDo() {
    const text = prompt("");
    if (!text) {
        return;
    }
    add(text)
}

function add(text) {
    const div = document.createElement("div");
    div.textContent = text;
    div.onclick = function () {
        if (confirm("remove?")) {
            div.remove()
            save()
        }
    }
    ft_list.prepend(div)
    save()
}

function save() {
    let box = [];
    for (let i of ft_list.children) {
        box.push(i.textContent)
    }
    document.cookie = "ToDo =" + JSON.stringify(box);
}

function load() {
    const cookies = document.cookie.split(";")
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith("ToDo")) {
            const txt = JSON.parse(cookie.substring(5))
            for (let j = txt.length - 1; j >= 0; j--) {
                add(txt[j])
            }
        }
    }
}