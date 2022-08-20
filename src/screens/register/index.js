import React from "react";
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
  name: Yup.string().required("Este campo es obligatorio"),
  id: Yup.number()
    .required("Este campo es obligatorio")
    .typeError("Solo acepta numeros"),
  telefono: Yup.number(),
  email: Yup.string()
    .email("Este correo electrónico es inválido")
    .required("Este campo es obligatorio"),
  password: Yup.string()
    .required("Este campo es obligatorio")
    .min(8, "Debe tener al menos 8 caraacteres"),
});

const Register = () => {
  return (
    <Container>
      <Formik
        initialValues={{
          name: "",
          id: "",
          telefono: "",
          email: "",
          password: "",
        }}
        validationSchema={RegisterSchema}
      >
        {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
          <ContainerForm>
            <Titulo>FORMULARIO DE REGISTRO</Titulo>
            <ContainerInput>
              <Input
                placeholder="Nombre completo"
                name="name"
                onChange={handleChange("name")}
                values={values.name}
              />
              {errors.name && <Error>{errors.name}</Error>}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Número de documento"
                name="id"
                onChange={handleChange("id")}
                values={values.id}
              />
              {errors.id && <Error>{errors.id}</Error>}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Número de telefono"
                name="telefono"
                onChange={handleChange("telefono")}
                values={values.telefono}
              />
              {errors.telefono && <Error>{errors.telefono}</Error>}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Correo electrónico"
                name="email"
                onChange={handleChange("email")}
                values={values.email}
              />
              {errors.email && <Error>{errors.email}</Error>}
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Crea tu contraseña"
                name="password"
                onChange={handleChange("password")}
                values={values.password}
                type="password"
              />
              {errors.password && <Error>{errors.password}</Error>}
            </ContainerInput>
            <ContainerInput>
              <Button>Registrarme</Button>
            </ContainerInput>
          </ContainerForm>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
