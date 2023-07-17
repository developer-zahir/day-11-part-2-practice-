const user_form = document.querySelector(".user_form");
const msg = document.querySelector(".msg");
// ----------profile image -------------
const profile_input_field = document.getElementById("input_profile_image");
const profile_image_box = document.querySelector(".profile_image_box");

// --------------gallery image ---------------------
const gallery_input_filed = document.getElementById("input_gallery");
const gallery_list = document.querySelector(".gallery-list");
let gallery_images = [];

//  from submite validation and then submite
user_form.onsubmit = (e) => {
  e.preventDefault();
  const from_data = new FormData(e.target);
  const data = Object.fromEntries(from_data);
  if (!data.name || !data.email || !data.phoneNum || !data.profileImage.size || !data.galleryImage.size) {
    msg.innerHTML = message("All fields are requird");
  } else if (!isEmail(data.email)) {
    msg.innerHTML = message("Invalid email address");
  } else if (!isMobile(data.phoneNum)) {
    msg.innerHTML = message("Invalid phone number");
  } else {
    msg.innerHTML = message("Data submite done!", "success");
    user_form.reset();
    gallery_images = [];
    profile_image_box.innerHTML = "";
    displayGalleryImages();
  }
};

// profile image -------------
profile_input_field.onchange = (e) => {
  //  const profile_image = URL.createObjectURL(profile_input_field.value)
  const profile_image_url = URL.createObjectURL(e.target.files[0]);
  if (profile_image_url) {
    profile_image_box.innerHTML = ` <img class="img-fluid img-thumbnail profile_image_preview" src="${profile_image_url}" alt="" />`;
  }
};
profile_image_box.nextElementSibling.onclick = (e) => {
  profile_input_field.value = "";
  profile_image_box.innerHTML = "";
};

// gallery image ---------------------
const delete_image = (index) => {
  gallery_images.splice(index, 1);
  displayGalleryImages();
};

gallery_input_filed.onchange = (e) => {
  const gallery_images_obj = e.target.files;
  const gallery_images_obj_to_array = Array.from(gallery_images_obj);
  gallery_images = gallery_images.concat(gallery_images_obj_to_array);
  displayGalleryImages();
};

function displayGalleryImages() {
  let content = "";
  gallery_images.forEach((item, index) => {
    const gallery_image_url = URL.createObjectURL(item);
    content += `
      <div class="col-2 p-1">
        <div class="img-box position-relative d-flex justify-content-center align-items-center">
          <img class="img-fluid img-thumbnail gallery_image_preview" src="${gallery_image_url}" alt="" />
          <span onclick="delete_image(${index})" class="img-remove d-block position-absolute bg-danger text-white"><i class="bi bi-trash3-fill"></i></span>
        </div>
      </div>
    `;
  });
  gallery_list.innerHTML = content;
}
