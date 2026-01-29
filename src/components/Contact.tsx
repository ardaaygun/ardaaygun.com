import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const form = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (name !== '' && email !== '' && message !== '') {
      var templateParams = { name, email, message };


      emailjs.send(process.env.REACT_APP_SERVICE_ID as string, process.env.REACT_APP_TEMPLATE_ID as string, templateParams, process.env.REACT_APP_PUBLIC_KEY as string).then(
        (response) => {
          alert("Mesajınız başarıyla gönderildi!");
          setName(''); setEmail(''); setMessage('');
        },
        (error) => { alert("Mesaj gönderilemedi."); }
      );
    } else {
        alert("Lütfen tüm alanları doldurun.");
    }
  };

  // KUTULAR İÇİN SABİT STİL (HEP BEYAZ KUTU, SİYAH YAZI)
  const inputStyle = {
    width: '100%',
    padding: '15px',
    fontSize: '18px',
    color: '#000000',           // Yazı hep SİYAH
    backgroundColor: '#ffffff', // Kutu hep BEYAZ
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
    fontFamily: 'sans-serif',
    outline: 'none'
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p></p>
          
          <Box ref={form} component="form" noValidate autoComplete="off" className='contact-form' style={{marginTop: '30px'}}>
            
            {/* İSİM ALANI */}
            <div style={{marginBottom: '15px'}}>
                {/* className="contact-label" EKLEDİK */}
                <label className="contact-label">Your Name</label>
                <input 
                    type="text" 
                    placeholder="Adınız nedir?" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle} 
                />
            </div>

            {/* EMAIL ALANI */}
            <div style={{marginBottom: '15px'}}>
                <label className="contact-label">Email / Phone</label>
                <input 
                    type="text" 
                    placeholder="Size nasıl ulaşabilirim?" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle} 
                />
            </div>

            {/* MESAJ ALANI */}
            <div style={{marginBottom: '15px'}}>
                <label className="contact-label">Message</label>
                <textarea 
                    placeholder="Mesajınızı buraya yazın..." 
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{...inputStyle, resize: 'vertical'}} 
                />
            </div>

            <Button 
                variant="contained" 
                endIcon={<SendIcon />} 
                onClick={sendEmail}
                sx={{ 
                    float: 'right', 
                    backgroundColor: '#5000ca', 
                    color: 'white', 
                    fontWeight: 'bold', 
                    padding: '10px 30px'
                }}
            >
              Send
            </Button>

          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;