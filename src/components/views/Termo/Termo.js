import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Termo.css';

function Termo() {


    return (
        <div>
            <div className="Termo">
                <div className='header'>
                    <h1>Política de privacidade</h1>
                    <Link to="/CriarConta" className='voltar'><AiOutlineArrowLeft /></Link >
                </div>
                <div className='texto'>
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>
                        <p>Et cras quam sed lectus in. Aliquam faucibus turpis dictum donec. Sit aliquam molestie elit aliquet accumsan volutpat consequat morbi elementum. Viverra consequat id blandit eu felis scelerisque bibendum pellentesque massa. Nisi at metus tincidunt lectus morbi. Bibendum sem bibendum pellentesque lectus ullamcorper aliquam integer netus sagittis. Sit viverra purus sed nibh hendrerit consequat odio est. Nulla bibendum nibh facilisis sit justo eget porttitor scelerisque. Id vel pharetra mauris gravida netus.</p>

                        <p> Pretium blandit lobortis molestie cras orci euismod id. At volutpat pellentesque tellus ut in. Orci diam dignissim quis volutpat amet purus. Magna risus ultrices tellus cursus urna at. Suspendisse vitae suspendisse cras rutrum condimentum posuere vitae. Elementum magna ut turpis fermentum purus. Feugiat consectetur tincidunt vulputate magnis. Convallis hac ultrices cursus consectetur mattis etiam molestie quis. Vulputate aliquam pharetra aenean faucibus venenatis fermentum ultrices convallis sapien. Tristique tellus sapien suscipit penatibus. Tristique penatibus dictum mattis aliquet dictum quisque vel a vulputate. Consectetur rhoncus ultrices molestie a consectetur. Ac aliquam gravida accumsan at risus metus ornare habitant. Tempus quis pretium diam sed ac condimentum egestas.</p>

                        <p> Dolor pretium scelerisque arcu aliquet. At donec aliquet nibh ultrices. Lorem pellentesque montes nunc nisl nibh ac fermentum tincidunt orci. Enim at dui lectus aliquam sem. Viverra duis phasellus magna urna viverra aliquam tincidunt aenean tristique. Sed nunc sagittis cras molestie porttitor vitae. Donec sed ultrices eget pretium a cursus aliquet tristique.</p>

                        <p>Nec neque erat dignissim cras tincidunt vulputate phasellus at sed. Diam integer nulla sit cras id massa vitae. Risus iaculis viverra dolor nullam. Nec tincidunt amet a pharetra adipiscing donec rhoncus turpis imperdiet. Consectetur consectetur amet eget adipiscing nisi posuere est. Venenatis tincidunt aliquet amet aliquam. Enim consectetur eget integer volutpat duis sit.</p>

                        <p>Consequat pharetra praesent vitae nam tortor euismod. Quam rhoncus rhoncus bibendum adipiscing tortor. Convallis sapien lorem et luctus vulputate ac. Fermentum eget sit eu non vitae ultrices mauris elementum. Scelerisque et quisque dolor nunc. Sem sagittis auctor vitae purus tristique. Suspendisse venenatis donec ante aliquet eros blandit quis pharetra in. Eu odio dolor et consequat semper at hac nunc. Et gravida tristique in tellus. Nulla volutpat etiam porttitor iaculis at nunc duis dignissim. Scelerisque ut sed commodo vitae neque tincidunt id ultrices.</p>
                    </p>
                </div>

            </div>
            <div className='pos'>
                <div className="Termo-link">
                    <Link to="/CriarConta">Aceitar e continuar</Link>
                </div>
            </div>
        </div>
    )
}

export default Termo;
