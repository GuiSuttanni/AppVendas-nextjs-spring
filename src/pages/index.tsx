import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Teste - App de Vendas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      Bem vindo!

      <button className="button">Button</button>
    </div>
  )
}

export default Home;
