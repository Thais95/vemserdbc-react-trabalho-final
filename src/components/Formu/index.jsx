import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios'
import styles from './Formu.module.css'

// import {useEffect} from 'react'



const schema = yup.object({
    name: yup.string().notRequired().min(3, 'Nome deve conter mais que 3 letras.'),
    email: yup.string().email('Email inválido!').required('Campo email OBRIGATÓRIO!'),
    // phone: yup.string().required('Telefone obrigatório')
}).required();


function Formu() {


    const { register, handleSubmit, formState: { errors } } =
        useForm({
            resolver: yupResolver(schema)
        })


    function onSubmitForm(data){
        axios.post("http://localhost:5000/info", data)
        window.location.reload()
    }

     

    return (
        <>
            <div className={styles.formu}>
                <h1 className={styles.formh1}>Receba as notícias atualizadas.</h1>

                <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>

                    <div className={styles.field}>
                        <label>Nome: </label>
                        <input className={styles.fieldinput} type="text" {...register('name')} placeholder='Digite seu nome'/>
                    </div>
                    {errors.name && <span>{errors.name.message}</span>}

                    <div className={styles.field}>
                        <label>Email:</label>
                        <input className={styles.fieldinput} type="email" {...register('email')} 
                        placeholder='Digite seu email'/>
                    </div>
                    {errors.email && <span>{errors.email.message}</span>}

                    {/* <div className={styles.field}>
                        <label>Telefone:</label>
                        <input className={styles.fieldinput} name='phone' type="tel" {...register('content')} 
                        placeholder='Digite seu telefone'/>
                    </div>
                    {errors.phone && <span>{errors.phone.message}</span>} */}
                    
                    <div className={styles.check}>
                        <div className={styles.checked}>
                        <input className={styles.espaco}  type="radio" name="checkUm" id="checkUm" />
                        <label htmlFor="">Eu concordo com a Política de Privacidade do Breaking Bad.*</label>
                        </div>

                        <div className={styles.checked}>
                        <input className={styles.espaco} type="radio" name="checkDois" id="checkDois" />
                        <label htmlFor="">Eu aceito receber conteúdo educacional e promocional relacionado com os produtos e serviços do Breaking Bad.*</label>
                        </div>
                    </div>

                    <input type="submit" className={styles.button}  value="Receber notícia" />
                </form>
            </div>
        </>
    )
}

export default Formu;