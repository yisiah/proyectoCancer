<style lang="css" scoped>

.imgdoc {
    width: 100%;
}

.col1 {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.col2 {
    background-color: blue;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.row-container{
    height: 100%;
}

.maincontainer{
  height: 100%;
  min-height: 100%;

}
/*box shadow*/
</style>

<template lang="html">

<div class="maincontainer">

    <b-container class="maincontainer">
        <b-row class="row-container">
            <b-col cols="7" class="col1">
            <h1>{{titulo}}</h1>

                <b-form>
                    <b-form-group id="input-group-1" label="Correo electronico:" label-for="input-1">
                        <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Ingresa tu e-mail"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
                        <b-form-input id="input-2" v-model="form.password" type="password" required placeholder="Ingresa tu contraseña"></b-form-input>
                    </b-form-group>
                    <b-row>
                      <b-col>
                        <b-button type="submit" variant="primary">Ingresar</b-button>
                      </b-col>
                      <b-col>
                        <b-button type="reset" variant="danger">Registro</b-button>
                          <!--router-link :to="{ name: 'SingUp'}"></router-link>
                          Registrarse</b-button-->
                      </b-col>
                    </b-row>
                </b-form>
            </b-col>
            <b-col cols="5" class="col2">
                <img src="../assets/doctora.svg" alt="doc" class="imgdoc">
            </b-col>
        </b-row>
    </b-container>
</div>

</template>

<script>

export default {
    data() {
        return {
            titulo: "Incia sesion",
            form: {
              email: '',
              password: ''
            }
        }
    }
}

</script>
