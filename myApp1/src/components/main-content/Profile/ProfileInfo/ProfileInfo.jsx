import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfoWrapper}>
            <div className={s.profile__headImg}>
                <img src="https://www.joshsteimle.com/wp-content/uploads/2019/04/linkedin-banner-sad-910x224.png"/>
            </div>
            <div className={s.user}>
                <div className={s.user__img}>
                    <img src="https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" />
                </div>
                <div className={s.user__info}>
                    <h2 className={s.user__infoTitle}>Lova A.</h2>
                    <p className={s.user__infoText}><span>Date of Birth</span>:&nbsp;<span>6 december 2001</span></p>
                    <p className={s.user__infoText}><span>City</span>:&nbsp;<span>Tbilisi</span></p>
                    <p className={s.user__infoText}><span>Education</span>:&nbsp;<span>Itvet</span></p>
                    <p className={s.user__infoText}><span>Web Site</span>:&nbsp;<a href='https://lovaarutinovi.github.io' target='_blank'>https://lovaarutinovi.github.io</a></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;