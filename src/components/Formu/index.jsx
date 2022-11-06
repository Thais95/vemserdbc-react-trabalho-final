import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios'
import styles from './Formu.module.css'

// import {useEffect} from 'react'



const schema = yup.object({
    name: yup.string().notRequired().min(3, 'Nome deve conter no mínimo 3 letras'),
    email: yup.string().email('Email inválido!').required('Campo de email obrigatório!')
}).required();


function Formu() {


    const { register, handleSubmit, formState: { errors } } =
        useForm({
            resolver: yupResolver(schema)
        })


    function onSubmitForm(data) {
        axios.post("http://localhost:5000/info", data)
        window.location.reload()
    }


    return (
        <>
            <div className={styles.formu}>
                <h2 className={styles.formh2}>
                    Receba notícias sobre
                </h2>
                <h3 className={styles.formh3}>
                    o mundo de Breaking Bad
                </h3>

                <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>

                    <div className={styles.field}>
                        <label>Nome: </label>
                        <input className={styles.fieldinput} type="text" {...register('name')} placeholder='Digite seu nome' />
                    </div>
                    {errors.name && <span>{errors.name.message}</span>}

                    <div className={styles.field}>
                        <label>Email:</label>
                        <input className={styles.fieldinput} type="email" {...register('email')}
                            placeholder='Digite seu email' />
                    </div>
                    {errors.email && <span>{errors.email.message}</span>}

                    <div className={styles.check}>
                        <div className={styles.checked}>
                            <input className={styles.espaco} type="checkbox" name="checkUm" id="checkUm" />
                            <label htmlFor="checkUm">Eu concordo com a Política de Privacidade desse Blog.<span>*</span></label>
                        </div>

                        <div className={styles.checked}>
                            <input className={styles.espaco} type="checkbox" name="checkDois" id="checkDois" />
                            <label htmlFor="checkDois">Eu aceito receber conteúdo educacional e promocional relacionado com os produtos e serviços desse Blog.<span>*</span></label>
                        </div>
                    </div>

                    <input type="submit" className={styles.button} value="Receber notícia" />
                </form>
            </div>
        </>
    )
}

export default Formu;