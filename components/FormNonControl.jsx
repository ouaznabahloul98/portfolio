
import styles from '@/styles/FormNonControl.module.css';
import { FiMail } from "react-icons/fi";
import { MdPlace } from "react-icons/md";
import { IconContext } from "react-icons";
import emailjs from '@emailjs/browser';

import { useRef, useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function FormNonControl() {
    const notify = () => toast.success('SENT !', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const form = useRef();
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);
    // fonction qui vas s'executer a l'envoie du formulaire 
    const handleSubmit = (event) => {
        // tous les donnes sont dans le event, pour empecher le comportement par default on utilise la fonction preventDefault() 
        // pour forcer la page a se refraichir on utulise    window.location.reload(true)

        //empecher le rafraichement de la page
        event.preventDefault();
        validateName();
        validateEmail();
        validateSubj();
        validateMssg();

        // on vas checker d'abord si les element(les composant) sont la, ensuite on check la validite puis on fais la soumission
        if (nameRef && emailRef && subjectRef && messageRef &&
            event.currentTarget.checkValidity()) {

            // code du soumission du formulaire
            //obtenir la valeur du champ name et l'afficher dans la console
            //console.log(nameRef.current.value);
            notify();

            emailjs.sendForm('service_ok5hygt5', 'template_1pf52tk', form.current, '75gytfR_3srgbh6rY')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    }


    // tester la validite du champ name
    const [mssgErrName, setMssgErrName] = useState('');
    const validateName = () => {
        // si c'est valid
        if (nameRef.current.validity.valid) {
            setMssgErrName('');
        }
        else {
            if (nameRef.current.validity.valueMissing) {
                setMssgErrName('Ce champ est requis.');
            }
        }
    }

    // tester la validite du champ email
    const [mssgErrEmail, setMssgErrEmail] = useState('');
    const validateEmail = () => {
        if (emailRef.current.validity.valid) {
            setMssgErrEmail('');
        }
        else {
            if (emailRef.current.validity.valueMissing) {
                setMssgErrEmail('Ce champ est requis.');
            }
            else if (emailRef.current.validity.typeMismatch) {
                setMssgErrEmail("adresse e-mail non valide.");
            }
        }
    }

    // tester la validite du champ subject
    const [mssgErrSubj, setMssgErrSubj] = useState('');
    const validateSubj = () => {
        // si c'est valid
        if (subjectRef.current.validity.valid) {
            setMssgErrSubj('');
        }
        else {
            if (subjectRef.current.validity.valueMissing) {
                setMssgErrSubj('Ce champ est requis.');
            }
        }
    }

    // tester la validite du champ message
    const [mssgErrMssg, setMssgErrMssg] = useState('');
    const validateMssg = () => {
        // si c'est valid
        if (messageRef.current.validity.valid) {
            setMssgErrMssg('');
        }
        else {
            if (messageRef.current.validity.valueMissing) {
                setMssgErrMssg('Ce champ est requis.');
            }
        }
    }

    return <>

        <form className={styles.form} ref={form} onSubmit={handleSubmit} noValidate>
            <p className={styles.p}>
                Me contacter
            </p>
            <input type="text" name='user_name' placeholder='Nom' required maxLength={35} ref={nameRef} onSubmit={validateName} className={styles.input}/>
            {mssgErrName !== '' &&
                <div className={styles.erreur}>{mssgErrName}</div>
            }
            <input type="email" name='user_email' placeholder='Email' required ref={emailRef} onSubmit={validateEmail} className={styles.input}/>
            {mssgErrEmail !== '' &&
                <div className={styles.erreur}>{mssgErrEmail}</div>
            }
            <input type="text" name='subject' placeholder='Objet' required ref={subjectRef} onSubmit={validateSubj} className={styles.input}/>
            {mssgErrSubj !== '' &&
                <div className={styles.erreur}>{mssgErrSubj}</div>
            }
            <textarea rows={8} name='message' placeholder='Message' required ref={messageRef} onSubmit={validateMssg} className={styles.textarea}></textarea>
            {mssgErrMssg !== '' &&
                <div className={styles.erreur}>{mssgErrMssg}</div>
            }

            <div className={styles.line}></div>

            <input type="submit" value={'Envoyer'} className={styles.btn} />
            <div className={styles.infos}>
                <IconContext.Provider value={{ size: '20px', color: '#1481BA' }}>
                    <FiMail />
                </IconContext.Provider>
                <p className={styles.p2}>ouaznab@gmail.com</p>
            </div>
            <div className={styles.infos}>
                <IconContext.Provider value={{ size: '20px', color: '#1481BA' }}>
                    <MdPlace />
                </IconContext.Provider>
                <p className={styles.p2}>Gatineau, Quebec, Canada</p>
            </div>

            <ToastContainer position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </form>
    </>


}