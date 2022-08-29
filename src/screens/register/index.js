import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Container,
  ContainerInput,
  Input,
  ContainerForm,
  Button,
  Titulo,
  Error,
} from "./styles";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Este campo es obligatorio")
    .matches(/(?=\w*[A-z])/, "Solo acepta letras"),
  id: Yup.number()
    .required("Este campo es obligatorio")
    .typeError("Solo acepta numeros")
    .min(30000000, "El DNI debe ser mayor a 30 millones"),
  telefono: Yup.number().typeError("Solo acepta numeros"),
  email: Yup.string()
    .email("Este correo electrónico es inválido")
    .required("Este campo es obligatorio"),
  password: Yup.string()
    .required("Este campo es obligatorio")
    .min(8, "Debe tener al menos 8 caracteres")
    .matches(/(?=\w*[A-Z])/, "Debe tener al menos una letras mayuscula"),
  repeatPassword: Yup.string()
    .required("Este campo es obligatorio")
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
});

const Register = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          id: "",
          telefono: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={values=>console.log(values)}
        validateOnSubmit
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <ContainerForm onSubmit={handleSubmit}>
            <Titulo>FORMULARIO DE REGISTRO</Titulo>
            <ContainerInput>
              <Input
                placeholder="Nombre completo"
                name="name"
                onChange={handleChange("name")}
                // onBlur={handleBlur("name")}
                values={values.name}
              />
              {touched.name && errors.name && <Error>{errors.name}</Error>}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Número de documento"
                name="id"
                onChange={handleChange("id")}
                // onBlur={handleBlur("id")}
                values={values.id}
              />
              {touched.id && errors.id && <Error>{errors.id}</Error>}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Número de telefono"
                name="telefono"
                onChange={handleChange("telefono")}
                // onBlur={handleBlur("telefono")}
                values={values.telefono}
              />
              {touched.telefono && errors.telefono && (
                <Error>{errors.telefono}</Error>
              )}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Correo electrónico"
                name="email"
                onChange={handleChange("email")}
                // onBlur={handleBlur("email")}
                values={values.email}
              />
              {touched.email && errors.email && <Error>{errors.email}</Error>}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Crea tu contraseña"
                name="password"
                onChange={handleChange("password")}
                // onBlur={handleBlur("password")}
                values={values.password}
                type={visible ? "text" : "password"}
              />
              {touched.password && errors.password && (
                <Error>{errors.password}</Error>
              )}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Repeti tu contraseña"
                name="repeatPassword"
                onChange={handleChange("repeatPassword")}
                // onBlur={handleBlur("repeatPassword")}
                values={values.repeatPassword}
                type={visible ? "text" : "password"}
              />
              {touched.repeatPassword && errors.repeatPassword && (
                <Error>{errors.repeatPassword}</Error>
              )}
            </ContainerInput>
            <ContainerInput>
              <Button
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                {visible ? "Ocultar contraseña" : "Mostrar contraseña"}
              </Button>
              <Button type="submit">Registrarme</Button>
            </ContainerInput>
          </ContainerForm>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
