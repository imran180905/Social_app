import { GetServerSidePropsContext } from 'next';
import Profile from '../../components/Profile/Profile'
import React from 'react'

export interface IProduct {
  id: number;
  image: string;
  }
  type Props = {
    products: IProduct[];
  };

export default function index({products}: Props) {
  return (
    <div>
      <Profile products={products}/>
    </div>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
    const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
    
  );

  return {
    props: {
      products,
    },
  };
};