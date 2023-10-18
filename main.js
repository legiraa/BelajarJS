// console.log("Hello World")
// alert("Notifikasi")
// prompt("Siapa Namamu?")

//terus harus satu-satu kalau mau var, var aja kalau mau let, let aja. Berlaku juga buat const

// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding not Easy"
// console.log(Promnet)

// Promnet = "Coding is Easy"  //kalau ga ada tipe datanya maka diannggap var
// console.log(Promnet)        

// let Promnet = "Coding is Easy"   
// console.log(Promnet)
                                //kalauu let sama const cuman bisa satu , tidak sama seperti var
// const Promnet = "Coding not Easy" 
// console.log(Promnet)

// let totalPoin = prompt("Masukan Poin Anda")
//     if(totalPoin > ){
//         document.write("Congratulations");
//     }
//     else{
//         document.write("Yahh....");
//     }

// let x = 6;
// let y = 3;

// if (x < 10 && y > 1) {
//   console.log("Kondisi a : True");
// } else {
//   console.log("Kondisi a : False");
// }

// if (x < 10 && y < 1) {
//   console.log("Kondisi b : True");
// } else {
//   console.log("Kondisi b : False");
// }

// if (x == 5 || y == 5) {
//   console.log("Kondisi c : True");
// } else {
//   console.log("Kondisi c : False");
// }

// if (x == 6 || y == 5) {
//   console.log("Kondisi d : True");
// } else {
//   console.log("Kondisi d : False");
// }

// if (!(x == y)) {
//   console.log("Kondisi e : True");
// } else {
//   console.log("Kondisi e : False");
// }

//Cara lainnya
// let x = 6;
// let y = 3;

// console.log (x < 10 && y > 1)
// console.log (x < 10 && y < 1)
// console.log (x < 10 && y < 1)
// console.log (x == 5 || y == 5)
// console.log (x == 6 || y == 5)
// console.log (x == y)

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

document.addEventListener("DOMContentLoaded", function () {
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const label = document.createElement("label");
        label.textContent = taskText;
        const removeButton = document.createElement("button");
        removeButton.textContent = "x";

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        listItem.style.display = "flex";
        listItem.style.margin = "10px 0";
        checkbox.style.marginRight = "30px";
        removeButton.style.marginLeft = "30px";

        taskInput.value = "";

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                label.style.fontWeight = "bold";
            } else {
                label.style.fontWeight = "normal";
            }
        });

        removeButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });
    });
});


