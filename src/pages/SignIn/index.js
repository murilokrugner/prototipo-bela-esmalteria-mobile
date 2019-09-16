import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import Input from '~/components/Input';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function SignIn({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} style={{width: 200, height: 120}}/>

        <Form>
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha secreta"
        />

        <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => {navigation.navigate('Password')}}>
          <SignLinkText>Esqueci minha senha</SignLinkText>
        </SignLink>

        <SignLink onPress={() => {navigation.navigate('SignUp')}}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
