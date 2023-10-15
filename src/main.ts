// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./secrets/cert.key'),
    cert: fs.readFileSync('./secrets/cert.crt'),
  };
  const app = await NestFactory.create(AppModule, { httpsOptions });

  const config = new DocumentBuilder()
    .setTitle('SoS Caramelo')
    .setDescription('Projeto da Turma de 308 de TDS SENAI')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`/api`, app, document, {
    customfavIcon: '<path>/favicon.png', //adding our favicon to swagger
    customSiteTitle: 'Documentação SoS Caramelo', //add site title to swagger for nice SEO
    customCss: `
      .topbar-wrapper img {content:url(\'https://cdn.icon-icons.com/icons2/2225/PNG/512/puppy_icon_134477.png\'); width:200px; height:auto;}
      .swagger-ui .topbar { background-color: #eead2d; } `,
    swaggerOptions: {
      persistAuthorization: true, // this helps to retain the token even after refreshing the (swagger UI web page)
      // swaggerOptions: { defaultModelsExpandDepth: -1 } //uncomment this line to stop seeing the schema on swagger ui
    },
  });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
