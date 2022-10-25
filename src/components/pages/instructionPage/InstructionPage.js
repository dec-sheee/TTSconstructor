
import Footer from '../../footer/footer';
// import footer from '../../footer/footer'
import './InstructionPage.css'
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';

const InstructionPage = () =>{

    return(
        <>  
        <div className='instruction-wrapper'>
        <div className="instruction-container">

            <div className='instruction-title'>
            <NavLink  to="/"
                      style={{ textDecoration: 'none' }}
                      >
                <span className='instruction-title-span'>TTS constructor</span> 
            </NavLink> 
                
            </div>
            <div className='instruction-content'>
                    <div className='instruction-text'>
                        <div className='instruction-text-faq'>FAQ</div>

                        <div className='instruction-text-caption'>Хочу добавить свой голос! Это возможно? Сколько это стоит?</div> 

                        <div className='instruction-text-sometext'>
                        Чтобы отправить заявку на создание вашего голоса нужно заполнить форму, либо связаться с нами напрямую (в дискорде Sheeet#5168  declider#9923). Денег за это не берём. 
                        </div>

                        <div className='instruction-text-caption'>Что от меня требуется для создания голоса?</div>

                            <div className='instruction-text-sometext'>
                            Для обучения голосовой модели требуется большое количество аудио с голосом, а также исходный текст. <br/>
                                Сценарий следующий:<br/>
                                &nbsp; ●Находите книгу или любой другой большой по объёму текст.<br/>
                                &nbsp; ●Записываете чтение этого текста вслух в любом формате, будь то аудио или видео (подробнее ниже). Минимальная длительность чистой записи - 5 часов. Чем больше - тем лучше.<br/>
                                &nbsp; ●Загружаете всю полученную запись, а также исходный текст в любом копируемом текстовом формате (подробнее ниже) на сервис вроде ЯндексДиска или ГуглДиска.<br/>
                            </div>

                        <div className='instruction-text-caption'>Какие требования к записи и форматам?</div>
                            <div className='instruction-text-sometext'>
                            Для обучения нужно только аудио в хорошем качестве и текст, подробнее:<br/>
                                &nbsp; ●Можно присылать или аудио, или видео с нужной аудиодорожкой, не принципиально, видеоряд не нужен и он будет игнорироваться.
                                Можно разбивать аудио/видео на множество 
                                &nbsp;&nbsp; &nbsp;   частей, если так удобнее, однако вся записанная речь должна соответствовать исходному тексту.<br/>
                                &nbsp; ●Присланный текст должен быть редактируемым или как минимум копируемым. То есть подойдут текстовые файлы .txt, .word и прочие, или же ссылки на прочтённые текста где их 
                                &nbsp; &nbsp; &nbsp; можно выделить и скопировать. А значит никаких "ну я вот тот текст прочитал иди поищи" или "вот тебе скриншоты, перепечатай там вручную плиз", такие случаи в заявках будут 
                                &nbsp; &nbsp; &nbsp; игнорироваться.<br/>
                                &nbsp; ●Сами тексты и их количество Вы выбираете сами, главное чтобы Вам было комфортно читать. Но, опять же, если текстов несколько, нужно прислать все и объяснить к какой <br/>
                                &nbsp; &nbsp; &nbsp; записиотносится каждый текст.
                            </div>

                        <div className='instruction-text-caption'>Хорошо, а как вообще мне записывать голос? Нужно делать что-то неординарное?</div>
                            <div className='instruction-text-sometext'>
                            Здесь главное соблюдать середину, если Вы записываете свой настоящий голос - то и говорите по настоящему. Не надо включать актёра и пытаться наигранно менять интонацию в каждом предложении, выдувая весь воздух из лёгких в упор к микрофону, но и не надо относиться к записи с безразличием, рассевшись в метре от микрофона, отвернувшись и нашёптывая текст себе под нос. Говорите так, как Вы говорите обычно, лишь учитывая то что ваша речь должна быть нормально слышна на записи.
                            </div>

                        <div className='instruction-text-caption'>Я запнулся, оставить это в записи или идти перезаписывать?</div>
                            <div className='instruction-text-sometext'>
                            Очень желательно это исправить.
                            </div>

                            <div className='instruction-text-caption'>Сколько идёт обработка голоса?</div>
                            <div className='instruction-text-sometext'>
                            Долго, неделю, может две, если разработчики заняты чем-то, то и того дольше.
                            </div>

                            <div className='instruction-text-caption'>Как работает синтез голоса?</div>
                            <div className='instruction-text-sometext'>
                            TTS Manager - отдельная программа для ПК, которую нужно держать открытой. Доступ к ней выдаётся всем людям, чьи голоса обучены и используются в программе.
                            </div>

                            <div className='instruction-text-caption'>Какие донатные сервисы поддерживаются?</div>
                            <div className='instruction-text-sometext'>
                            Сейчас поддерживается DonationAlerts, в планах поддержка DonatePay и Donatty.
                            </div>


                    <br/>
                    <br/>

                        <div className='instruction-text-sometext'
                            style={{"fontSize":"20px"}}>
                        Если же вы хотите чтобы ваш голос появился, то заполните форму и мы с вами свяжемся для дальнейшего обсуждения.
                        </div>
                    
                    <div className='open-from'>
                            <NavLink  to="/form"
                                    style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" color="secondary" size="large">
                                    <span className='open-from-span'>ПОДАТЬ ЗАЯВКУ</span>
                                    </Button>
                                    {/* <div className='open-from-btn'>ПОДАТЬ ЗАЯВКУ</div> */}
                            </NavLink> 
                        </div>
                        
                    </div>
                
                </div>
                <Footer/>
            </div>
         
        </div>
        </>
    )
}

export default InstructionPage;