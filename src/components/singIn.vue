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
  background-color: #00a6ff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.row-container {
  height: 100%;
}

.maincontainer {
  height: 100%;
  min-height: 100%;
}
.formulario {
  width: 50%;
}
/*box shadow*/
</style>

<template lang="html">

<div class="maincontainer">

    <b-container class="maincontainer">
        <b-row class="row-container">
            <b-col cols="7" class="col1">
                <b-form @submit="login" class="formulario">
                  <h1>{{titulo}}</h1>
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
                          <router-link :to="{ name: 'SingUp'}" class="btn btn-danger">Registro</router-link>
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
            titulo: "Iniciar sesión",
            form: {
              email: '',
              password: ''
            }
        }
    },
    methods:{
        login(event){
            event.preventDefault()
            fetch('https://test-ibm-vr.herokuapp.com/login',{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.form)
            })
            .then((response)=>{
                return response.json()
            })
            .then((myJson)=>{
                localStorage.setItem("sessionToken", myJson.token);
            });
        }
    }
}

</script>
