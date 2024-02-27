# NextJS Ignite Call
Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.

## Demonstração
Esta demonstração está em formato ".gif", o que significa que sua qualidade está reduzida. Para visualizá-la com melhor definição, [clique aqui](https://www.youtube.com/watch?v=BOq1zcUTQEs).

![Demonstração utilizando o projeto](https://github.com/brayan-jordan/nextjs-ignite-call/blob/main/docs/hero.gif?raw=true)

## Principais tecnologias

1. **NextJS**: Aplicação desenvolvida utilizando o framework NextJS e diversos recursos que ele oferece, como SSR, SSG, Next-auth, entre outros. 
2. **Autenticação OAuth com Google**: A API da Google é utilizada para autenticar o usuário, além de se conectar com o Google Calendar para permitir a criação de agendamentos. 
3. **Refresh Token**: O projeto utiliza uma estratégia refresh token da própria API da Google, para manter o usuário autenticado por mais tempo de forma totalmente automática.
4. **React Query**: O React Query foi utilizado para melhorar a experiência do usuário, permitindo que os dados sejam carregados de forma mais eficiente e com melhor desempenho.
5. **Design System**: Essa aplicação foi construída utilizando um Design System próprio, que pode ser acessado [aqui](https://brayan-jordan.github.io/design-system-experience/).
6. **Vercel**: O projeto está hospedado na Vercel, e pode ser acessado [aqui](https://nextjs-ignite-call-taupe.vercel.app/).

## Suba o projeto localmente

1. Clone o repositório
```bash
git clone https://github.com/brayan-jordan/nextjs-ignite-call.git
```
2. Instale as dependências
```bash
npm install
```
3. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente
```bash
# Informações para conexão com o banco de dados
# docker run --name postgreignitecall -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres
DATABASE_URL="postgresql://postgres:docker@localhost:5433/postgres"
DATABASE_DIRECT_URL="postgresql://postgres:docker@localhost:5433/postgres"

# Informações para conexão com a API da Google
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

NEXTAUTH_SECRET=""
```
4. Execute as migrations
```bash
npx prisma migrate dev
```
5. Execute o projeto
```bash
npm run dev
```
6. Acesse o projeto em http://localhost:3000
