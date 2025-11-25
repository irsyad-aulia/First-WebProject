const hobiSaya = ["Gaming", "Reading Books", "Cycling", "Coding", "Sleeping"];
const wadahHobi = document.getElementById("daftar-hobi");
for (let hobi of hobiSaya) {
    let itemBaru = document.createElement("li");
    itemBaru.textContent = hobi;
    itemBaru.className = "bg-gray-100 p-3 rounded shadow text-center w-full hover:bg-green-100 cursor-pointer";
    wadahHobi.appendChild(itemBaru);   
}

const targetBelajar = [
    {text: "Become Fluent in English", penting: true },
    {text: "Get a Remote Web Development Job", penting: true },
    {text: "Generate a Nine-Figure Monthly Income", penting: false },
    {text: "Become a Young Millionaire by 2026", penting: false }
];

const wadahTarget = document.getElementById("daftar-target");
for (let target of targetBelajar) {
    let itemTarget = document.createElement("li");
    itemTarget.textContent = target.text;
    if (target.penting) {
        itemTarget.className = "font-bold text-orange-500";
    }
    wadahTarget.appendChild(itemTarget);
}

const inputGoal = document.getElementById("input-goal");
const tombolAdd = document.getElementById("tombol-add");
const daftarTarget = document.getElementById("daftar-target");
function tambahTargetBaru() {
    const isiText = inputGoal.value;
    if (isiText === "") {
        alert("Please type a goal first!");
        return;
    }
    const itemBaru = document.createElement("li");
    itemBaru.textContent = isiText;
    itemBaru.className = "font-bold text-blue-600";
    daftarTarget.appendChild(itemBaru);
    inputGoal.value ="";
}
tombolAdd.addEventListener("click", tambahTargetBaru);