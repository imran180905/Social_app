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
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    const products = await response.json();

    return {
      props: {
        // products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: [], // Return an empty array or handle the error as per your requirement
      },
    };
  }
};
