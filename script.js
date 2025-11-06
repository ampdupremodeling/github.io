// Mobile nav with toggle icon
const navBtn = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav');

navBtn?.addEventListener('click', ()=>{
  navMenu?.classList.toggle('open');
  navBtn.textContent = navMenu?.classList.contains('open') ? '✖' : '☰';
});

// Close menu when link tapped
document.querySelectorAll('.nav a').forEach(link=>{
  link.addEventListener('click', ()=>{
    navMenu.classList.remove('open');
    navBtn.textContent = '☰';
  });
});



// Active link highlight
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a=>{
  if(a.getAttribute('href')===path){ a.classList.add('active'); }
});
// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form UX (works with Formspree success redirect or JSON)
const form = document.getElementById('quote-form');
if(form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const success = form.querySelector('.form-success');
    const error = form.querySelector('.form-error');
    success.hidden = true; error.hidden = true;

    try{
      const resp = await fetch(form.action, { method: form.method, body: new FormData(form), headers: { 'Accept':'application/json' }});
      if(resp.ok){
        success.hidden = false;
        form.reset();
      }else{
        error.hidden = false;
      }
    }catch{
      error.hidden = false;
    }
  });
}
