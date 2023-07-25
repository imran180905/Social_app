import React from 'react'
import ProfileHeader from './ProfileHeader'
import Styles from './Profile.module.css'
import GridOnIcon from '@mui/icons-material/GridOn';
import ItemList from './ItemList';
import { GetServerSidePropsContext } from "next";
import { IProduct } from '@/pages/profile';

  type Props = {
    products: IProduct[];
  };
  
  const Profile = ({products}: Props) => {
  return (
    <div>
      <div style={{margin: '0 200px'}}>
      <ProfileHeader/>
      <div className={Styles.postSection}>
        <GridOnIcon style={{fontSize: '12px'}}/>
        <p className={Styles.post}>posts</p>
      </div>
      <ItemList products={products} />
      </div>
    </div>
  )
}
export default Profile;

