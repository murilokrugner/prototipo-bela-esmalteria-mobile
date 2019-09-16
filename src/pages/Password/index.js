import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import Input from '~/components/Input';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function Password({ navigation }) {
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
          placeholder="Digite seu e-mail para recuperar"
        />

        <SubmitButton onPress={() => {}}>Enviar</SubmitButton>
        </Form>

        <SignLink onPress={() => {navigation.navigate('SignIn')}}>
          <SignLinkText>Lembrei minha senha</SignLinkText>
        </SignLink>

      </Container>
    </Background>
  );
}
