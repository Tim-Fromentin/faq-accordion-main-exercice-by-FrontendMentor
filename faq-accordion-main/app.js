const btnActifFaq = document.querySelectorAll(".btn_actif_faq");
const faqTexts = document.querySelectorAll(".card_faq_txt");

btnActifFaq.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    faqTexts[index].classList.toggle("card_faq_txt--actif");
    btnActifFaq[index].classList.toggle("btn_actif_faq--actif")
  });
});
