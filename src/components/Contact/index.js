import './index.scss'
import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs, { sendForm } from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();
 
    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm("service_7s3c2a5", 'template_ydnzg1c',form.current,"Q_LkAPDNbEjQgGcDg")
        .then(
          (result) => {
            alert('Message successfully sent!')
            window.location.reload(false)
            console.log(result.text);
          },
          (error) => {
            alert('Failed to send the message, please try again')
            console.log(error.text);
          }
        );
    }
    
    useEffect(()=>{
        setTimeout(()=> {
           setLetterClass('text-animate-hover')
       },3000)
   },[])
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters letterClass = {letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e'] } 
                    idx={15}>
                    </AnimatedLetters>
                </h1>
                <p>
                    If you interested to ping me, or if you have any opportunities to discuss please contact me. 
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' placeholder='Name' name= 'name' required>
                                </input>
                            </li>
                            <li className='half'>
                                <input type='email' placeholder='Email' name = 'email' required>
                                </input>
                            </li>
                            <li>
                                <input type='text' placeholder='Subject' name = 'subject'>
                                </input>
                            </li>
                            <li>
                                <textarea type='text' placeholder='Message' name = 'message'>
                                </textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value = 'SEND'></input>
                            </li>
                        </ul>
                    </form>
                </div>
                
            </div>
            <div className="info-map">
                Shiva Hari Gundeti,
                <br />
                350S 200W
                <br />
                Salt Lake City<br />
                Utah, 84101<br/>
                USA <br/>
                <span>shivaharigundeti@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[40.761923, -111.897068]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[40.761923, -111.897068]}>
                    <Popup>I live here :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact