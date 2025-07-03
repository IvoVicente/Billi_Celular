import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import './CriarConta.css';

function CriarConta() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [confirmaSenha, setConfirmaSenha] = React.useState('');
    const [aceitoPolitica, setAceitoPolitica] = React.useState(false);
    const [formValid, setFormValid] = React.useState(false);

    React.useEffect(() => {
        const valido =
            email.trim() !== '' &&
            senha.trim() !== '' &&
            confirmaSenha.trim() !== '' &&
            senha === confirmaSenha &&
            aceitoPolitica;
        setFormValid(valido);
    }, [email, senha, confirmaSenha, aceitoPolitica]);

    return (
        <div className='pos'>
        <div className="CriarConta">
            <div className='header'>
                <h1>Crie a sua conta</h1>
                <button className='fecha-botao'>x</button>
            </div>

            
                <form>
                    <input
                        type='email'
                        placeholder='E-mail'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className='senha'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Senha'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            autoComplete="new-password"
                        />
                        <span className='icon-olho' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </span>
                    </div>

                    <div className='senha'>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder='Confirme sua senha'
                            value={confirmaSenha}
                            onChange={(e) => setConfirmaSenha(e.target.value)}
                            autoComplete="new-password"
                        />
                        <span className='icon-olho' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                            {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </span>
                    </div>

                    <label className='checkbox'>
                        <input
                            type='checkbox'
                            required
                            checked={aceitoPolitica}
                            onChange={(e) => setAceitoPolitica(e.target.checked)}
                        />
                        <span>Li e concordo com a <a href="#">Política de Privacidade</a></span>
                    </label>

                    <div className="botoes-container">
                        <button type='submit' className='submit-botao' disabled={!formValid}>Avançar</button>
                        <div className="login-link">
                            Já é Billi? <a href="#">Acesse a sua conta</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CriarConta;