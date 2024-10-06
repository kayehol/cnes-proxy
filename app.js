import express from 'express';
const app = express()

const port = 3000
app.get('/estabelecimentos', async (req, res) => {
  const url = 'https://apidadosabertos.saude.gov.br/cnes/estabelecimentos?limit=20&offset=1';
  const response = await fetch(url);
  const responseJson = await response.json()
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }

  res.writeHead(200, headers)
  res.end(JSON.stringify(responseJson));
});

app.get('/estabelecimentos/:codigo', async (req, res) => {
  const url = `https://apidadosabertos.saude.gov.br/cnes/estabelecimentos/${req.params.codigo}`;
  const response = await fetch(url);
  const responseJson = await response.json()
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }

  res.writeHead(200, headers)
  res.end(JSON.stringify(responseJson));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
