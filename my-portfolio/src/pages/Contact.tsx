import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', location: '' });
  const [submitted, setSubmitted] = useState(false);
  const [geoStatus, setGeoStatus] = useState('');
  const [coordinates, setCoordinates] = useState<{ lat: number; lon: number } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email.includes('@') && formData.message.length > 10) {
      try {
        await fetch('https://formsubmit.co/ajax/joel.hdz6@hotmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        setSubmitted(true);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setGeoStatus('Geolocation is not supported by your browser.');
    } else {
      setGeoStatus('Locating…');
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lon: longitude });
          try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
            const data = await res.json();
            const city = data.address.city || data.address.town || data.address.village || '';
            const country = data.address.country || '';
            const locationStr = `${city}, ${country}`;
            setFormData({ ...formData, location: locationStr });
            setGeoStatus(`Detected location: ${locationStr}`);
          } catch {
            setGeoStatus('Unable to retrieve location info.');
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
          setGeoStatus('Unable to retrieve your location.');
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    };
  };

  useEffect(() => {
    if (coordinates) {
      const mapElement = document.getElementById('map');
      if (!mapElement) return;
      const map = L.map('map').setView([coordinates.lat, coordinates.lon], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      L.marker([coordinates.lat, coordinates.lon]).addTo(map);
      return () => { map.remove(); };
    }
  }, [coordinates]);

  return (
    <section className="contact">
      {!submitted ? (
        <>
          <h2>Contact Me 👨‍💻</h2>
          <p>Got a question or just want to say hi? Send me a message below! 👇</p> 
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
            <input type="text" name="location" placeholder="Your Location (optional)" value={formData.location} readOnly />
            <button type="button" onClick={detectLocation}>Detect My Location</button>
            <p>{geoStatus}</p>
            <div id="map" style={{ height: '300px', width: '100%', marginTop: '1rem' }}></div>
            <button type="submit">Send</button>
          </form>
        </>
      ) : (
        <div className="last-message">
          <h3>Thank you for your message!</h3>
          <p>I will get back to you soon</p>
        </div>
      )}
    </section>
  );
};

export default Contact;