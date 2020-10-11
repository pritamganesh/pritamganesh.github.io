const url = "https://api.github.com/repos/pritamganesh/pritamganesh.github.io/contents/paintings";
const container = document.querySelector(".photos-container");
const loading = document.querySelector(".lds-heart");
async function GetImages() {
    const response = await fetch(url);
    const images = await response.json();
    loading.style.display = "none";
    return images;
}

GetImages().then(images => {
    images.reverse();
    images.forEach(image => {
        var content = `<div class="col-6 col-md-6 col-lg-4" data-aos="fade-up">
        <a href=${image.download_url} class="d-block photo-item" data-fancybox="gallery">
           <img src=${image.download_url} alt="Image" class="img-fluid">
           <div class="photo-text-more">
              <span class="icon icon-search"></span>
           </div>
        </a>
     </div>`;
        container.innerHTML += content;
    });
});
