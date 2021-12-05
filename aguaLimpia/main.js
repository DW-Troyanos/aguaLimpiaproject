$(document).ready(function () {
  
  if(window.location.href.indexOf("") > -1){
      var posts = [
          {
              title: "ECEEN’s First Step in South Africa | Solar Charger Bag Show",
              date: "06/12/2020",
              content: "The business show was on last Jun.2019, it’s around 1 year now, the time runs so fast, but that trip give me a deep impression for South Africa, the social, cultural, city & country…. so that I still want to write something and share to ECEEN favors.",
              img: "img/post1.jpg",
              link: "post1.html"
          },
          {
              title: "ECEEN Waterproof Backpack Perfect for Kayaking Swim Beach Hiking Boat Sailing Camping Fishingw",
              date: "Date: 04/24/2018",
              content: "ECEEN Waterproof Backpack 20L Dry Bag With Padded Shoulder Straps, Phone Pocket & Bottle & Hiking Stick Holder Perfect for Kayaking Swim Beach Hiking Boat Sailing Camping Fishing",
              img: "img/post2.jpg",
              link: "post2.html"
          },
          {
              title: "Be charming like Morning Sun",
              date: "Date: 02/09/2017",
              content: "I am very happy and satisfied today for a trifle of progress in my duty even though only a trifle. I imaged many working conditions, work smoothly, tired, hard. But everything goes well here, tired but with great passion and confidence.",
              img: "img/post3.jpg",
              link: "../../../assets/logo.png"
          }
      ];

  posts.forEach((item) => {
      var post = `<script type="text/javascript" src="../../../../main.js"></script>

      <div class="container animate__animated animate__slideInUp">
        <h1 class="text-center my-5">Bienvenido</h1>
        <div class="card  w-100">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="../../../assets/logo.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8 text-primary">
              <div class="card-body">
                <h3 class="card-title">${item.title}</h3>
                <hr>
                <p class="card-text text-justify">Nota previa</p>
                <button class="btn btn-primary">Leer más</button>
              </div>
            </div>
          </div>
        </div>   
      </div>`;
  $("#posts").append(post);
  });
}
});

