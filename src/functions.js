// Mobile number checking
const isMobile = (mobile) => {
  const pattern = /^(01|\+8801|8801)[0-9]{9}$/;
  return pattern.test(mobile);
};

// Email address checking
const isEmail = (email) => {
  const pattern = /^[a-z0-9\._]{1,}@[a-z]{1,5}\.[a-z]{1,5}$/;

  return pattern.test(email);
};

const message = (msg, type = "danger") => {
  return `
   <div class="alert alert-${type} alert-dismissible fade show" role="alert">
     <span>${msg}</span>
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>
      `;
};

