import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Head from 'next/head';
import FormNonControl from '@/components/FormNonControl';

export default function Contact() {
  const router = useRouter();
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    if (!currentUser) {
      router.push('/login'); // 🔐 Redirection si non connecté
    }
  }, [currentUser]);

  if (!currentUser) return null;

  return (
    <>
      <Head>
        <meta name="description" content="page de contact" />
        <title>Contact - Portfolio Ouazna</title>
      </Head>
      <FormNonControl />
    </>
  );
}
