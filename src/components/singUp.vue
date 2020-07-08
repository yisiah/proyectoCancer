<style lang="css" scoped>

.box{
  /*como hacer la caja mas paqueña*/
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 5px 10px 8px #888888

}

</style>

<template lang="html">

<div>
    <div class="box">
        <b-form>
            <h2>{{titulo}}</h2>
            <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.Name" required placeholder="Nombre"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Apellido paterno:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.Name" required placeholder="Apellido paterno"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Apellido materno:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.Name" required placeholder="Apellido materno"></b-form-input>
            </b-form-group>

            <!-- como es una cedula? -->
            <b-form-group id="input-group-1" label="Cedula:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.Name" required placeholder="Cedula"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Correo electronico:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Correo electronico"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.password" type="password" required placeholder="Ingresa tu contraseña"></b-form-input>
            </b-form-group>

            <b-col>
                <b-button type="submit" variant="primary">Registrate</b-button>
            </b-col>
        </b-form>

        <p>¿Ya tienes cuenta?</p><b-button type="submit" variant="primary">Incia sesion</b-button>

    </div>
</div>

</template>

<script>

import router from './../router'
export default {
    data() {
        return {
            titulo: "Registrate",
            form: {
                nombre: '',
                apellidoPaterno: '',
                apellidoMaterno: '',
                cedula: '',
                email: '',
                password: ''
            }
        }

    }
}

</script>
