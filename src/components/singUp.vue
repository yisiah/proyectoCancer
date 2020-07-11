<style lang="css" scoped>

.box {
    /*como hacer la caja mas paqueña*/
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 25px;
    padding: 20px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
    flex-wrap: wrap;
    width: 30%;
    background-color: white;
}

.maincontainer {
    display: flex;
    align-items: center;
    /*vertical*/
    justify-content: center;
    /*horizontal*/
    background-color: #f9f9f9;
    padding: 100px 0px 100px 0px;
}

.formulario {
    width: 80%;
}

.titulo {
    text-align: center;
    margin-bottom: 40px;
}

.boton{
  margin-top: 40px;
  margin-bottom: 20px;
}

</style>

<template lang="html">

<div class="maincontainer">
    <div class="box">
        <b-form @submit="register" class="formulario">
            <h2 class="titulo">{{titulo}}</h2>
            <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.name" type="text" required placeholder="Nombre"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Apellido paterno:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.paternalName" type="text"required placeholder="Apellido paterno"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Apellido materno:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.maternalName" type="text" required placeholder="Apellido materno"></b-form-input>
            </b-form-group>

            <!-- como es una cedula? -->
            <b-form-group id="input-group-1" label="Cedula:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.professionalLicense" type="text" required placeholder="Cedula"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Correo electronico:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Correo electronico"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.password" type="password" required placeholder="Ingresa tu contraseña"></b-form-input>
            </b-form-group>


            <b-button block type="submit" variant="primary" class="boton">Registrate</b-button>

            <p>¿Ya tienes cuenta? da click
                <router-link :to="{ name: 'SingIn'}">
                    Aqui
                </router-link>
            </p>

        </b-form>
    </div>
</div>

</template>

<script>

import router from './../router'
export default {
    data() {
        return {
            titulo: "Registro",
            form: {
                name: '',
                paternalName: '',
                maternalName: '',
                professionalLicense: '',
                email: '',
                password: ''
            }
        }

    },
    methods: {
      register(event){
        event.preventDefault()
        fetch('https://test-ibm-vr.herokuapp.com/register',{
          method: 'POST',
          headers: {
              "Content-Type": "application/json" /*formato de lo que se envia o tipo de peticion*/
          },
          body: JSON.stringify(this.form)

        })
        .then((response) => { /*variabe recibe la informacion servidor en texto plano*/
            console.log(response)/*tipo print*/
            if (response.status == 200){
              alert ("Registro exitoso")
              router.replace('singin')

            }else{
              alert("Error en el registro")
            }
            return response.json() /*formata a json*/

        })

      }

    }

}

</script>
