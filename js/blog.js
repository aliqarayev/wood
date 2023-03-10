let blogs = document.querySelector("#blogs-items");

const getdata = async () => {
  const response = await fetch(`blog.json`);
  const data = await response.json();

  let result = "";

  data.forEach((x) => {
    result += `
     <div class="card mb-3 rounded-0 p-1" style="width: 18rem;">
     <img src="${x.img}" class= border-0" alt="blogimg">
     <div class="card-body">
     <div class="line">
       <h5 class="card-title ms-1">${x.name}</h5>
       </div>
       <p class="card-text">${x.decs}</p>
       <a href="${x.link}" class="blog-btn">Tamamilə oxuyun
       </a>
     </div>
   </div>
     `;
    blogs.innerHTML = result;
  });
};

getdata();
