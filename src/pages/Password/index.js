import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import Input from '~/components/Input';

import { recoverPasswordRequest } from '~/store/modules/password/actions';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';

export default function Password({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(recoverPasswordRequest(email));
  };

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
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={email}
          onChangeText={setEmail}
        />

        <SubmitButton loading={loading} onPress={() => {}}>Enviar</SubmitButton>
        </Form>

        <SignLink onPress={() => {navigation.navigate('SignIn')}}>
          <SignLinkText>Lembrei minha senha</SignLinkText>
        </SignLink>

      </Container>
    </Background>
  );
}
