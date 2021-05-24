# API com Nodejs, MongoDb/Mongoose, com encriptografia, autenticação token e simulação de recuperação com mailtrap


Criar APi e conexão com o mongoDb 

encriptar senha do banco
- bcryptjs (biblioteca de hash) 

Autentigicação Token
- jsonwebtoken (define um formato de token )
    outra opção seria o oAuth(define um protocolo, ou seja como os tokens são tratados)

Recuperar Senha
- Utilizar ferramenta 'mailtrap' que simula uma caixa de email `npm install nodemailer`
    Em produção utilizar ferramentas de envio como o 'sparkpost'

Template de email
    `npm install --save nodemailer-express-handlebars `
