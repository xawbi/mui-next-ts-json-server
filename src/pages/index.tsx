import * as React from 'react';
import Content from "../component/Content";
import {GetStaticProps, NextPage} from "next";
import {IGetProducts, IProduct} from "@/component/interfaces/product.interface";
import axios from "axios";
import Header from "@/component/Header";

const Home: NextPage<IGetProducts> = ({products}) => {
  return (
    <>
      <Header/>
      <Content products={products}/>
    </>
  );
}

export default Home

export const getStaticProps:GetStaticProps<IGetProducts> = async () => {
  const {data} = await axios.get<IGetProducts>('http://localhost:3001/products')

  return {
    props: {
      products: data
    },
    revalidate: 10
  }
}