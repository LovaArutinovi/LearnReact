import s from './Header.module.css'

const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.header__logo}>
            <img src="https://2.bp.blogspot.com/-dDn9PC861VQ/We3S32-iG-I/AAAAAAAAFvc/RCF5pDZJRxwPAompNQyoPgv5E2cbGWsegCLcBGAs/s1600/PES%2BLEGENDS%2BLogo%2B256.png" alt="" />
         </div>
      </header>
   );
}

export default Header;