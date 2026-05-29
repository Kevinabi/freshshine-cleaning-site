const businessWhatsAppNumber = "918072735207";

const defaultMessage = encodeURIComponent(
  "Hi, I want to enquire about house cleaning / car wash service."
);

const whatsappUrl = `https://wa.me/${businessWhatsAppNumber}?text=${defaultMessage}`;

document.getElementById("whatsappButton").setAttribute("href", whatsappUrl);
document.getElementById("whatsappButton").setAttribute("target", "_blank");
