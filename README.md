# Academy teste final API

### Routes

- ##### POST /login

Está rota serve para o usuário fazer o login, como se trata de um teste as credenciais são:

email: academy@b8one.com,
password: Academy2022

Ao enviar esses dados como corpo da requisição a API devolvera alguma mensagem de erro caso tenha sido enviado errado, e responderá "true" em caso de sucesso.

- ##### GET /user

Está rota serve para pegar as informações do usuário.

Resposta

| Nome do campo | Tipo do campo | Explicação          |
| ------------- | ------------- | ------------------- |
| username      | string        | Nome do usuário     |
| organization  | string        | Nome da organização |
| photo         | string        | Foto do usuário     |

- ##### GET /menu

Está rota serve para pegar o menu.

Resposta

| Nome do campo | Tipo do campo    |
| ------------- | ---------------- |
| menuTree      | Array de objetos |

Objeto Menu Tree

| Nome do campo | Tipo do campo | Explicação                                   |
| ------------- | ------------- | -------------------------------------------- |
| name          | string        | Nome do item no menu                         |
| hasChildren   | boolean       | Identificação para caso o menu possua filhos |

- ##### GET /products/more-sold

Está rota serve para pegar os produtos mais vendidos.

Resposta

| Nome do campo | Tipo do campo    |
| ------------- | ---------------- |
| products      | Array de objetos |

Objeto product

| Nome do campo | Tipo do campo | Explicação           |
| ------------- | ------------- | -------------------- |
| name          | string        | Nome do produto      |
| orderId       | string        | Número do pedido     |
| department    | boolean       | Nome do departamento |
| price         | number        | Preço do produto     |
| image         | string        | Imagem do produto    |

- ##### GET /resellers/ranking

Está rota serve para pegar os melhores revendedores da organização.

Resposta

| Nome do campo | Tipo do campo    |
| ------------- | ---------------- |
| resellers     | Array de objetos |

Objeto resellers

| Nome do campo | Tipo do campo | Explicação                      |
| ------------- | ------------- | ------------------------------- |
| name          | string        | Nome do revendedor              |
| ordersCount   | number        | Número de pedidos               |
| percentage    | string        | porcentagem de aumento ou queda |

- ##### GET /sales

Está rota serve para pegar as informações de venda da organização.

Resposta

| Nome do campo | Tipo do campo | Explicação                   |
| ------------- | ------------- | ---------------------------- |
| revenues      | number        | Faturamento da organização   |
| totalSales    | number        | Vendas totais da organização |
| averageTicket | number        | Ticket médio da organização  |
