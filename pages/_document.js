import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <title>Dr. Pedro Fonseca</title>
          <link rel="icon" href="/assets/dourada e fundo.jpg" type="image/png" />
          
          <meta name="description" content="Dr. Pedro Fonseca" />
          
        </Head>
        <body>
          <Main /> 
          <NextScript /> 
        </body>
      </Html>
    );
  }
}

export default MyDocument;
