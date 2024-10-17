import { FaEnvelope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsTextLeft } from "react-icons/bs";

const Contact = () => {
    return(
        <section>
        <div>
          <h2>Contacta Conmigo</h2>
          <form action="">
            <div>
            <FaUser />
            <input type="text"  placeholder="Nombre"/>
            </div>
            <div>
            <FaEnvelope />
            <input type="email"  placeholder="Email"/>
            </div>
            <div>
            <BsTextLeft />
            <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje" className="resize-none"></textarea>
            </div>
            <button>Enviame un Mensaje</button>
          </form>
        </div>
        <div>
          <div>
            <h2>Más Información</h2>
            <a href="mailto:maricarmeninsurance@gmail.com" target="_blank"><FaEnvelope />maricarmeninsurance@gmail.com</a>
            <a href="msms://12017131341" target="_blank">+1 (201) 713-1341</a>
          </div>
          <div>
            <h2>Mis Redes Sociales</h2>
            <a href="https://www.facebook.com/people/Maricarmen-Insurance/61551806203332/?sk=reels_tab" target="_blank">Meta</a>
            <a href="https://www.instagram.com/maricarmeninsurance" target="_blank">Instagram</a>
          </div>
        </div>
      </section>
    )
};

export default Contact;
