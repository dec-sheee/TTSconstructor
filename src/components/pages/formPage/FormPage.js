import './FormPage.css'

import {NavLink} from 'react-router-dom';
import * as Yup from 'yup'
import Footer from '../../footer/footer';
import {Formik, Form, Field, useField} from 'formik';
import DiscordWebHook from '../../services/WebHook';
import okIMG from '../../img/ok.png';
import errorIMG from '../../img/error.png'



const MyTextInput = ({label, ...props})=>{

    const [field, meta] = useField(props);

        return(
            <>
                <label htmlFor={props.name}>{label}</label>
                <input className='form-input'
                        {...props}{...field}
                />
                
                {meta.touched && meta.error ? (
                    <div className='error'>{meta.error}</div>
                ) : <div className='empty'></div>}
            </>
        )
    };
    

    const FormPage = () => {
        const {postData,error,success,clearStatus} = DiscordWebHook();
        // console.log(error)
        console.log(success)

        return (
        <>
        <div className='form-wrapper'>
            <div className='form-header'>
                <NavLink  to="/"
                        style={{ textDecoration: 'none' }}
                        >
                    <span className='form-header-span'>TTS constructor</span> 
                </NavLink>   
                </div>

                <div className='form-content'>
                    <Formik
                        initialValues = {{     
                            NAME: '',
                            PLATFORM: '',
                            LINK: '',
                            TEXT: '',           
                        }}
                        validationSchema= {Yup.object({     
                                                        
                            NAME: Yup.string()             
                                    .min(2, 'Минимум 2 символа')   
                                    .required('Обязательное поле'),

                            PLATFORM: Yup.string()             
                                    .min(2, 'Минимум 2 символа')   
                                    .required('Обязательное поле'),    
                            
                            LINK: Yup.string()                          
                                    .required('Обязательное поле'),                                                                              
                        })}
                        
                        // onSubmit= {values => {console.log(JSON.stringify(values, null, 2))}}
                        
                        onSubmit={async (values, { resetForm }) => {

                            let str = JSON.stringify(values, null, 2).replace(/[\""\{\}]/g, '')
                            postData(str);
                            resetForm()
                        }}
                        >


                            <Form className="form">
                                    <div className='form-title'>Форма для подачи заявок</div>

                                    <label className='form-lable'>Ваш никнейм на стримерской платформе</label>
                                    <MyTextInput 
                                            onClick ={()=> clearStatus()}
                                            id= 'NAME'
                                            name='NAME'
                                            text='text'
                                    />

                                    <label className='form-lable'>Платформа (Twitch/YouTube или тд)</label>
                                    <MyTextInput 
                                            onClick ={()=> clearStatus()}
                                            id= 'PLATFORM'
                                            name='PLATFORM'
                                            text='text'
                                    /> 

                                    <label className='form-lable'>Ссылки для связи с вами <br/></label>
                                    <span style ={{"color":"#bbbbbb"}}>ваш дискорд или другие ссылки на соц сети</span>
                                    <MyTextInput 
                                            onClick ={()=> clearStatus()}
                                            id="LINK"
                                            name="LINK"
                                            type="link"
                                    />

                                    <label className='form-lable'>Ваше сообщение</label>
                                    <Field 
                                    className="form-textarea"
                                        onClick ={()=> clearStatus()}
                                        id="TEXT"
                                        name="TEXT"
                                        as='textarea'
                                    />
                                    {/* <ErrorMessage className='error' name='text' component='div'></ErrorMessage> */}

                                    <div className='wrap'>
                                        <button className='btn-submit' type="submit">Отправить</button>

                                        {success ? <div className='form-status-success'>
                                                        <img className='form-status-img' src={okIMG} alt='success'/>
                                                        <span className='form-status-text'>
                                                            Спасибо, мы получили заявку и скоро с вами свяжемся
                                                        </span>
                                                    </div> : null}

                                        {error ? <div className='form-status-error'>
                                        <img className='form-status-img' src={errorIMG} alt='error'/>
                                            <span className='form-status-text'>
                                                Что-то пошло не так :( <br/>
                                                Свяжитесь с нами в дискорде <br/> Sheeet#5168 <br/>declider#9923 
                                            </span>
                                        </div> : null} 
                                    </div>
                                
                                    
                        </Form>
                    </Formik>
                </div>
            <Footer/>
            </div>
        </>
        )
    }
    
    export default FormPage;
