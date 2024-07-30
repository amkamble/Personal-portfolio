import React from 'react';
import '../../public/styles.css'

const WhatsAppButton = ({ phoneNumber, message }) => {
  const encodedMessage = encodeURIComponent(message); // Encode the message for the URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className='whatsApp'>
      <ion-icon name="logo-whatsapp" ></ion-icon>
    </a>
  );
};

export default WhatsAppButton;
