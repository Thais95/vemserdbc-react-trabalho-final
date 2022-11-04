import styles from './Feedback.module.css';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    content: yup.string().required()
}).required();

function Feedback() {
    const { register, handleSubmit, formState: { errors } } =
        useForm({
            resolver: yupResolver(schema)
        })

    const onSubmitForm = data => console.log(data);

    return (
        <>
            <div className={styles.formu}>
                <h1 className={styles.formh1}>Deixe sua opinião sobre a série</h1>

                <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>

                    <div className={styles.field}>
                        <label>Nome</label>
                        <input className={styles.fieldinput} type="text" {...register('name')} />
                        <span className={styles.fielderror}>{errors.name?.message}</span>
                    </div>

                    <div className={styles.field}>
                        <label>Email</label>
                        <input className={styles.fieldinput} type="email" {...register('email')} />
                        <span className={styles.fielderror}>{errors.email?.message}</span>
                    </div>

                    <div className={styles.field}>
                        <label>Conteúdo</label>
                        <input className={styles.fieldinput} type="text" {...register('content')} />
                        <span className={styles.fielderror}>{errors.content?.message}</span>
                    </div>

                    <button className={styles.button} type='submit'>Enviar</button>

                </form>
            </div>
        </>
    )
}

export default Feedback;