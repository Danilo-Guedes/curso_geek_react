import React from "react";
import { Formik, Field, useField } from "formik";
import * as yup from "yup";

//Usar o Fiel no lugar do input para que os métodos de handle sejam abstraídos
// estamos criando o Meucampo usando o hook useFiel para customizar o campo
//e reaproveitar código

const MeuCampo = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {...field}
        {...props}
        className={meta.error && meta.touched ? "is-invalid-input" : ""}
        autoComplete="off"
      />
      {meta.error && meta.touched ? (
        <div className="invalid-input">{meta.error}</div>
      ) : null}
    </div>
  );
};

const AdicionaCliente = () => {
  const esquemaValidacao = yup.object({
    nome: yup
      .string()
      .required("O nome é obrigatório")
      .min(8, "Nome muito pequeno")
      .max(55, "Nome grande de mais"),
    email: yup
      .string()
      .required("O e-mail é obrigatório")
      .email("E-mail inválido"),
    nascimento: yup
      .date()
      .required("O nascimento é obrigatório")
      .max(new Date(), "Digite uma data de nascimento valida..."),
  });

  return (
    <>
      <h1>Cadastro de Clientes</h1>
      <p>Usando React, Formik e o Yup</p>

      <Formik
        initialValues={{ nome: "", email: "", nascimento: "" }}
        validationSchema={esquemaValidacao}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {(props) => (
          <form noValidate onSubmit={props.handleSubmit}>
            <MeuCampo id="nome" name="nome" type="text" label="Nome" />
            <MeuCampo id="email" name="email" type="email" label="Email" />
            <MeuCampo
              id="nascimento"
              name="nascimento"
              type="date"
              label="Data de Nascimento"
            />
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AdicionaCliente;

/*

###COMO ERA O CODIGO ANTES DE USAR O HOOK USEFIELD DO FORMIK 
PARA CRIAR NOSSO PROPRIO CAMPO, E ANTES DE USAR O YUP PARA VALIDACAO 
DO FORMULARIO###

const AdicionaCliente = () => {
  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initialValues={{ nome: "", email: "", nascimento: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.nome) {
            errors.nome = "O nome é obrigatório";
          }
          if (!values.email) {
            errors.email = "O email é obrigatório";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email invalido";
          }
          if (!values.nascimento) {
            errors.nascimento = "O nascimento é obrigatório";
          }
          return errors;
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {(props) => (
          <form noValidate onSubmit={props.handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                name="nome"
                type="text"
                value={props.values.nome}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                  props.errors.nome && props.touched.nome
                    ? "is-invalid-input"
                    : ""
                }
              />
              {props.errors.nome && props.touched.nome ? (
                <div className="invalid-input">{props.errors.nome}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                  props.errors.email && props.touched.email
                    ? "is-invalid-input"
                    : ""
                }
              />
              {props.errors.email && props.touched.email ? (
                <div className="invalid-input">{props.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="date">Data de Nascimento</label>
              <input
                id="nascimento"
                name="nascimento"
                type="date"
                value={props.values.nascimento}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={
                  props.errors.nascimento && props.touched.nascimento
                    ? "is-invalid-input"
                    : ""
                }
              />
              {props.errors.nascimento && props.touched.nascimento ? (
                <div className="invalid-input">{props.errors.nascimento}</div>
              ) : null}
            </div>
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AdicionaCliente;
*/
