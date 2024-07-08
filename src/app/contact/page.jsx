
import { Metadata } from 'next';
import PageClient from './page.client';

export const metadata ={
  title : "Contact"
}

// the client codes are in seperate file because we cant use metadata in "use client" component

export default function ContactPage() {


  return (
   <PageClient/>
  );
}
