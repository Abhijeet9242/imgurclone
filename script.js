randomImages();

var main_cont = document.getElementById("main_cont");

var random;

async function randomImages() {
  try {
    let main_cont = document.getElementById("main_cont");
    main_cont.innerHTML = " ";

    // var random ;
    console.log(random);
    // console.log(page)
    // let res = await fetch(`https://api.unsplash.com/photos/?per_page=12&page=${page}&client_id=MYWR1FgokO69ROjKxCU5ng5WDZNvO2Td4PefxNVNsBw`)
    let res = await fetch(
      `https://api.unsplash.com/search/photos/?query=${random}&per_page=12&page=${page}&client_id=MYWR1FgokO69ROjKxCU5ng5WDZNvO2Td4PefxNVNsBw`
    );
    let data = await res.json();
    data = data.results;
    console.log(data);
    showImages(data);
  } catch (err) {
    console.log(err);
  }
}

// randomImages()

function showImages(data) {
  if (data.length == 0) {
    // let h1 = document.createElement("h1")
    // h1.innerText = "wgfwfguwfgu"
    // main_cont.append(h1)
    alert("NO RESULT FOUND");
  }

  data.forEach((item) => {
    // console.log(item)
    let maindiv = document.createElement("div");
    let imgdiv = document.createElement("div");
    let likediv = document.createElement("div");
    let img = document.createElement("img");
    let div2 = document.createElement("div");

    maindiv.addEventListener("dblclick", dlimg);

    let p = document.createElement("p");

    maindiv.setAttribute("class", "maindiv");
    img.setAttribute("class", "imgsize");
    div2.setAttribute("class", "div2");
    p.setAttribute("class", "ptitle");

    img.src = item.urls.small;
    p.innerHTML = item.alt_description;

    div2.innerHTML = `<p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAUbhqo251aMtx1WmBEBbWuc_P8Gmiinfh4A&usqp=CAU" alt=""/><span>${item.likes}</span></p>
         <p><img  src="https://www.freeiconspng.com/thumbs/comment-png/comment-png-1.png" alt=""/><span>${item.likes}</span></p>
            <p><img  src="https://cdn3.iconfinder.com/data/icons/mixed-all-icons/512/LOOK-512.png" alt=""/><span>${item.likes} K</span></p>`;

    function dlimg() {
      window.open(item.links.download, "_blank");
    }

    imgdiv.append(img);
    likediv.append(p, div2);
    maindiv.append(imgdiv, likediv);

    main_cont.append(maindiv);
  });
}

// searching on query--------------------------------------------------------------
let ipitem = document.getElementById("input_search");
ipitem.addEventListener("click", getip);

function getip() {
  let ans = document.getElementById("ip_content").value;
  console.log(ans.length);
  if (ans.length == undefined) {
    random = "random";
    //  console.log(random)
    randomImages();
  } else {
    random = ans;
    randomImages();
  }
}

// pagination----------------------------------------------------------
var page = 1;
let prevbtn = document.getElementById("prevbtn");
let nextbtn = document.getElementById("nextbtn");
prevbtn.addEventListener("click", prevfun);
nextbtn.addEventListener("click", nextfun);

function prevfun() {
  page -= 1;
  // console.log("hii")
  console.log(page);
  if (page === 0) {
    let prevbtn = document.getElementById("prevbtn");
    prevbtn.disabled = true;
  }
  randomImages();
}
function nextfun() {
  page += 1;

  // console.log(page)
  randomImages();
}
