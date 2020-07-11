<style lang="css" scoped>

/*localstorage*/

.box1 {
    border-radius: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
    width: 100%;
    background-color: white;
}

.box2 {
    border-radius: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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

.categoria {
    text-align: left;
}

</style>

<template lang="html">

<div class="">

    <h2>{{titulo}}</h2>

    <div class="maincontainer">
        <!--primer formulario-->

        <b-form>
            <div class="box1">
                <h5 class="categoria">{{categoria1}}</h5>
                <b-row>
                    <b-col>
                        <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                            <b-form-input id="input-1" v-model="form.Name" type="text" required placeholder="Nombre"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="input-group-1" label="Apellido paterno:" label-for="input-1">
                            <b-form-input id="input-1" v-model="form.ApellidoP" type="text" required placeholder="Apellido paterno"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group id="input-group-1" label="Apellido materno:" label-for="input-1">
                            <b-form-input id="input-1" v-model="form.ApellidoM" type="text" required placeholder="Apellido materno"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-form-group id="input-group-1" label="Edad:" label-for="input-1">
                        <b-form-input id="input-1" v-model="form.Edad" type="number" required placeholder="Edad"></b-form-input>
                    </b-form-group>
                </b-row>
            </div>


            <!--segundo formulario-->
            <div class="box2">

                <h5>{{categoria2}}</h5>
                <b-row>
                    <b-col>
                        <b-form-group label="¿Presenta bultos en los senos?">
                            <b-form-radio-group id="radio-group-1" v-model="selected" :options="options" name="sintoma1"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="¿Presenta hinchazon en los senos?">
                            <b-form-radio-group id="radio-group-2" v-model="selected" :options="options" name="sintoma2"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="¿Presenta hundimiento en los senos/pezones?">
                            <b-form-radio-group id="radio-group-3" v-model="selected" :options="options" name="sintoma3"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="¿Presenta secreción?">
                            <b-form-radio-group id="radio-group-4" v-model="selected" :options="options" name="sintoma4"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="¿Presenta deformacion en los senos?">
                            <b-form-radio-group id="radio-group-5" v-model="selected" :options="options" name="sintoma5"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="¿Presenta dolor en los senos?">
                            <b-form-radio-group id="radio-group-6" v-model="selected" :options="options" name="sintoma6"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>

            </div>
            <!--tercer formulario-->
            <div class="box2">

                <h5>{{categoria3}}</h5>
                <b-row>
                    <b-col>
                        <b-form-group label="¿Su primera menstruación fue antes de los 12 años?">
                            <b-form-radio-group id="radio-group-7" v-model="selected" :options="options" name="factor1"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="¿Presento sintomas de menopausia despues de los 55 años?">
                            <b-form-radio-group id="radio-group-8" v-model="selected" :options="options" name="factor2"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="¿Presenta mamas densas?">
                            <b-form-radio-group id="radio-group-9" v-model="selected" :options="options" name="factor3"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="¿Ha recibido radioterapia?">
                            <b-form-radio-group id="radio-group-10" v-model="selected" :options="options" name="factor4"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="¿Presenta mutación en el gen BRCA1 o BRCA2?">
                            <b-form-radio-group id="radio-group-11" v-model="selected" :options="options" name="factor5"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="¿Ha tenido cáncer con anterioridad?">
                            <b-form-radio-group id="radio-group-12" v-model="selected" :options="options" name="factor6"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label="¿El cancer fue diagnosticado antes de los 50 años?">
                            <b-form-radio-group id="radio-group-13" v-model="selected" :options="options" name="factor7"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="¿Algún familiar de primer grado ha sido diagnosticado con cáncer?">
                            <b-form-radio-group id="radio-group-14" v-model="selected" :options="options" name="factor8"></b-form-radio-group>
                        </b-form-group>
                    </b-col>
                </b-row>

            </div>
        </b-form>
        <div class="d-flex justify-content-center">
            <div class="btn btn-mdb-color btn-rounded float-left">
                <span>Choose file</span>
                <input type="file">
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {
    data() {
        return {
            titulo: "Registrar informacion del paciente",
            categoria1: "Información personal del paciente",
            categoria2: "Síntomas",
            categoria3: "Factores de riesgo y antecedentes",
            form: {
                nombre: '',
                apellidoPaterno: '',
                apellidoMaterno: '',

            },
            /*añadir uno por cada radio boton*/
            selected: '',
            options: [{
                text: 'Si',
                value: 'True'
            }, {
                text: 'No',
                value: 'False'
            }]
        }
    }
}

</script>
