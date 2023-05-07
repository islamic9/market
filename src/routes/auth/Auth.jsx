import { Link, Outlet } from 'react-router-dom'
import { Container } from '../../utils/Components'
import c from './Auth.module.scss'

const Auth = () => {
  
  return (
    <Container>
      <div className={c.auth}>
        <div className={c.auth__form}>
          <ul className={c.auth__nav}>
            <li>
              <Link to='/auth/register'>Register</Link>
            </li>
            <li>
              <Link to='/auth/login'>login</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </Container>
  )
}

export default Auth