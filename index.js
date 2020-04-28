const { Tezos } = require('@taquito/taquito')
Tezos.setProvider({ rpc: 'https://carthagenet.tezos.org.ua' });

// Tezos.tz
//   .getBalance('tz1bwsEWCwSEXdRvnJxvegQZKeX5dj6oKEys')
//   .then(balance => console.log(`${balance.toNumber() / 1000000} ꜩ`))
//   .catch(error => println(JSON.stringify(error)));

Tezos.contract
  .at('KT1AcXqxRHWSz4AkvJuRfeBtTYZGN5PG5BjR')
  .then(c => {
    let methods = c.parameterSchema.ExtractSignatures();
    console.log(JSON.stringify(methods));
  })
  .catch(error => console.log(`Error: ${error}`));