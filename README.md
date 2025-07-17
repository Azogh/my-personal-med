# 💊 my-personal-med

Este é um aplicativo desenvolvido com *Angular + Ionic + Firebase* para auxiliar no controle de medicamentos, pensado especialmente para *idosos, **pessoas com muitas medicações* ou qualquer pessoa que precise de ajuda para *lembrar dos horários e formas corretas de tomar seus remédios*.

## 📱 Funcionalidades (MVP)

- 📋 Cadastro de remédios com nome, dosagem e posologia.
- ⏰ Agendamento inteligente dos horários com base na posologia (ex: a cada 12h).
- 🗓 Calendário com marcações dos dias e horários para tomar os remédios.
- 🔔 Notificações e lembretes para não esquecer a medicação.
- 🧾 Registro de compras de medicamentos para controle de estoque.
- 📉 Cálculo automático do consumo com base na posologia e estoque atual.

## 🧠 Exemplo de uso

> *Losartana Potássica 50mg*
>
> - Uso contínuo ✔
> - Posologia: A cada 12h
> - Primeiro horário: 08:00
> - Estoque: 1 caixa com 30 comprimidos comprada em 17/07
>
> O sistema automaticamente calcula os horários (08:00 e 20:00), agenda no calendário e mostra quando os comprimidos estão acabando.

## 🔧 Tecnologias utilizadas

- [Angular](https://angular.io/)
- [Ionic](https://ionicframework.com/)
- [Firebase Authentication](https://firebase.google.com/products/auth)
- [Firestore (futuro)] para persistência dos dados
- [Capacitor Local Notifications (futuro)] para lembretes

## 🚧 Em desenvolvimento

Este projeto está em fase inicial. A estrutura base do app e a autenticação com Firebase estão sendo implementadas.
