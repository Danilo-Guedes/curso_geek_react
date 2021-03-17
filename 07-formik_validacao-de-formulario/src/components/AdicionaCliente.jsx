import React from "react";
import { Formik } from "formik";

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
