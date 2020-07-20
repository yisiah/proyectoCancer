<style lang="css" scoped>
/*localstorage*/

.box1 {
  border-radius: 25px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
  width: 100%;
  background-color: white;
}

.box2 {
  border-radius: 25px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
  background-color: white;
  margin-top: 30px;
  margin-bottom: 30px;
}

.box4 {
  border-radius: 25px;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
  background-color: white;
  margin-top: 30px;
  margin-bottom: 30px;
}

.maincontainer {
  display: flex;
  align-items: center;
  /*vertical*/
  justify-content: center;
  /*horizontal*/
  background-color: #f9f9f9;
  padding: 100px 0px 100px 0px;
  flex-direction: column;
}

.maincontainer h2 {
  margin-bottom: 40px;
}

.categoria {
  text-align: left;
}

.img_preview {
  width: 400px;
}

.headerDivider {
  border-left: 2px solid #38546d;
}

.cabezal {
  background-color: #eff2f7;
}
</style>

<template lang="html">
  <div class="">
    <div class="maincontainer">
      <!--primer formulario-->
      <b-row>
        <b-col md="8">
          <h2>{{ titulo }}</h2>
        </b-col>
        <b-col md="4">
          <router-link :to="{ name: 'History' }" class="btn btn-danger"
            >Historial</router-link
          >
          <b-button @click="closeSession" variant="outline-warning"
            >Cerrar sesión</b-button
          >
        </b-col>
      </b-row>
      <b-form @submit="savePacient">
        <div class="box1">
          <b-container fluid>
            <h5 class="categoria">{{ categoria1 }}</h5>
            <b-row>
              <b-col md="4">
                <b-form-group
                  id="input-group-1"
                  label="Nombre:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Nombre"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="input-group-1"
                  label="Apellido Paterno:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.paternalName"
                    type="text"
                    required
                    placeholder="Apellido paterno"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  id="input-group-1"
                  label="Apellido Materno:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.maternalName"
                    type="text"
                    required
                    placeholder="Apellido materno"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="4">
                <b-form-group
                  id="input-group-1"
                  label="Edad:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.age"
                    type="number"
                    required
                    placeholder="Edad"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>
        </div>

        <!--segundo formulario-->
        <div class="box2">
          <b-container fluid>
            <h5>{{ categoria2 }}</h5>
            <b-row>
              <b-col md="4">
                <b-form-group label="¿Presenta bultos en los senos?">
                  <b-form-radio-group
                    id="radio-group-1"
                    v-model="form.sLump"
                    :options="options"
                    name="sintoma1"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group label="¿Presenta hinchazón en los senos?">
                  <b-form-radio-group
                    id="radio-group-2"
                    v-model="form.sSwelling"
                    :options="options"
                    name="sintoma2"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group
                  label="¿Presenta hundimiento en los senos/pezones?"
                >
                  <b-form-radio-group
                    id="radio-group-3"
                    v-model="form.sSinking"
                    :options="options"
                    name="sintoma3"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="4">
                <b-form-group label="¿Presenta secreción?">
                  <b-form-radio-group
                    id="radio-group-4"
                    v-model="form.sSecretion"
                    :options="options"
                    name="sintoma4"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group label="¿Presenta deformación en los senos?">
                  <b-form-radio-group
                    id="radio-group-5"
                    v-model="form.sDeformation"
                    :options="options"
                    name="sintoma5"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
              <b-col md="4">
                <b-form-group label="¿Presenta dolor en los senos?">
                  <b-form-radio-group
                    id="radio-group-6"
                    v-model="form.sPain"
                    :options="options"
                    name="sintoma6"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <!--tercer formulario-->
        <div class="box2">
          <b-container fluid>
            <h5>{{ categoria3 }}</h5>
            <b-row>
              <b-col md="6">
                <b-form-group
                  label="¿Su primera menstruación fue antes de los 12 años?"
                >
                  <b-form-radio-group
                    id="radio-group-7"
                    v-model="form.rMenstruation"
                    :options="options"
                    name="factor1"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="¿Presentó síntomas de menopausia después de los 55 años?"
                >
                  <b-form-radio-group
                    id="radio-group-8"
                    v-model="form.sMenopause"
                    :options="options"
                    name="factor2"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group label="¿Presenta mamas densas?">
                  <b-form-radio-group
                    id="radio-group-9"
                    v-model="form.rDenseBreast"
                    :options="options"
                    name="factor3"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="¿Ha recibido radioterapia?">
                  <b-form-radio-group
                    id="radio-group-10"
                    v-model="form.rRadiotherapy"
                    :options="options"
                    name="factor4"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group
                  label="¿Presenta mutación en el gen BRCA1 o BRCA2?"
                >
                  <b-form-radio-group
                    id="radio-group-11"
                    v-model="form.rMutation"
                    :options="options"
                    name="factor5"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group label="¿Ha tenido cáncer con anterioridad?">
                  <b-form-radio-group
                    id="radio-group-12"
                    v-model="form.antCancer"
                    :options="options"
                    name="factor6"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <b-form-group
                  label="¿El cáncer fue diagnosticado antes de los 50 años?"
                >
                  <b-form-radio-group
                    id="radio-group-13"
                    v-model="form.antDiagnosis"
                    :options="options"
                    name="factor7"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
              <b-col md="6">
                <b-form-group
                  label="¿Algún familiar de primer grado ha sido diagnosticado con cáncer?"
                >
                  <b-form-radio-group
                    id="radio-group-14"
                    v-model="form.antRelative"
                    :options="options"
                    name="factor8"
                  ></b-form-radio-group>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>
        </div>

        <!--tercer formulario-->
        <div class="box4">
          <div class="row">
            <div class="col-md-6">
              <div class="img_preview_container">
                <img :src="imgUrl" alt="image" class="img_preview" />
              </div>
              <div>
                <input
                  class=""
                  type="file"
                  ref="myFile"
                  @change="previewFiles"
                />

                <input
                  type="button"
                  @click="sendImage"
                  class="btn btn-secondary"
                  value="Analizar imagen"
                />
              </div>
            </div>
            <div class="col-md-6 headerDivider">
              <h3>Resultado del análisis</h3>

              <table class="table">
                <tr class="cabezal">
                  <th>Clase</th>
                  <th>Resultado</th>
                </tr>
                <tr v-for="result in ibmResult">
                  <td>{{ result.class }}</td>
                  <td>{{ result.score }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Guardar registro</button>
      </b-form>
    </div>
  </div>
</template>

<script>
import router from "./../router";

export default {
  created() {
    if (localStorage.getItem("sessionToken") == null) {
      alert("No tiene permisos para entrar aquí");
      router.replace("singin");
    }
  },
  data() {
    return {
      titulo: "Registrar información del paciente",
      imgUrl:
        "https://th.bing.com/th/id/OIP.vHpJXWt8lBwvG9c2pjAe2QHaHa?w=169&h=180&c=7&o=5&pid=1.7",
      categoria1: "Información personal del paciente",
      categoria2: "Síntomas",
      categoria3: "Factores de riesgo y antecedentes",
      formData: "",
      ibmResult: "",
      form: {
        name: "",
        paternalName: "",
        maternalName: "",
        age: "",
        sLump: "",
        sSwelling: "",
        sSinking: "",
        sSecretion: "",
        sDeformation: "",
        sPain: "",
        rMenstruation: "",
        sMenopause: "",
        rDenseBreast: "",
        rRadiotherapy: "",
        rMutation: "",
        antCancer: "",
        antRelative: "",
        antDiagnosis: "",
        resMax: "",
        resMid: ""
      },
      /*añadir uno por cada radio boton*/
      selected: "",
      options: [
        {
          text: "Si",
          value: 1
        },
        {
          text: "No",
          value: 0
        }
      ]
    };
  },
  methods: {
    previewFiles(e) {
      const file = e.target.files[0];
      this.imgUrl = URL.createObjectURL(file);

      const formDataCreate = new FormData();
      formDataCreate.append("myImage", file);
      this.formData = formDataCreate;
    },

    closeSession() {
      localStorage.clear();
      router.replace("singin");
    },
    sendImage() {
      const token = localStorage.getItem("sessionToken");
      fetch("https://vr-cancer-api.mybluemix.net/analyzerImage", {
        method: "POST",
        headers: {
          /*formato de lo que se envia o tipo de peticion*/
          Accept: "application/json",
          Authorization: token
        },
        body: this.formData /*que es lo que se esta enviando*/
      })
        .then(response => {
          return response.json();
        })
        .then(jsonResponse => {
          this.ibmResult = jsonResponse;

          if (this.ibmResult.length == 2) {
            if (this.ibmResult[0].score > this.ibmResult[1].score) {
              this.form.resMax = `${this.ibmResult[0].class} - ${this.ibmResult[0].score}`;
              this.form.resMid = `${this.ibmResult[1].class} - ${this.ibmResult[1].score}`;
            } else {
              this.form.resMax = `${this.ibmResult[1].class} - ${this.ibmResult[1].score}`;
              this.form.resMid = `${this.ibmResult[0].class} - ${this.ibmResult[0].score}`;
            }
          } else {
            this.form.resMax = `${this.ibmResult[0].class} - ${this.ibmResult[0].score}`;
          }
          alert("Análisis finalizado");
        });
    },
    savePacient(event) {
      event.preventDefault();
      const token = localStorage.getItem("sessionToken");
      fetch("https://vr-cancer-api.mybluemix.net/pacient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          /*formato de lo que se envia o tipo de peticion*/
          Authorization: token
        },
        body: JSON.stringify(this.form) /*que es lo que se esta enviando*/
      }).then(response => {
        if (response.status == 200) {
          alert("Se registro el paciente correctamente");
        } else {
          alert("Hubo un error al registrar al paciente");
        }
        console.log(response);
      });
    }
  }
};
</script>
