import React from 'react'
import Styles from './Profile.module.css'
import Image from 'next/image'
import Link from 'next/link'
import settings from '../../asset/settings.png'
import defaultImage from '../../asset/LOGO.png'

export default function ProfileHeader() {
  return (
    <div className={Styles.header}>
        <div className={Styles.headerSection}>
        <div className={Styles.imageSection}>
            <Image className={Styles.img} src={defaultImage} alt="" width={150} height={150}/>

        </div>
        <div className={Styles.profile}>    
            <div className={Styles.firstSection}>
            <h1 className={Styles.userName}>johndoe</h1>
            <Link href='#' className={Styles.editProfile}>Edit profile</Link>
            <Image className={Styles.settings} src={settings} alt='' width={24} height={24} />
            </div>
            <div className={Styles.follower}>
                <p >0 post</p>
                <p>0 followers</p>
                <p>0 following</p>
            </div>
            <h1 className={Styles.name}>john doe</h1>
            <h1 className={Styles.dot}>...</h1>

        </div>
        
        </div>
        <div className={Styles.line}></div>
    </div>
  )
}
