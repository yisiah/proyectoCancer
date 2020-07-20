<style lang="css" scoped>

.maincontainer {
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

.container {
    margin-top: 40px;
}

.cabezal {
    background-color: #EFF2F7;
}

.boton {}

</style>

<template lang="html">

<div class="container">
    <div class="maincontainer">
        <div class="">
            <b-row>
                <b-col md="8">
                    <h2>{{titulo}}</h2>
                </b-col>
                <b-col md="4">
                    <router-link :to="{ name: 'Pacient'}" class="btn pill btn-danger boton">Registro de Pacientes</router-link>
                </b-col>
            </b-row>
        </div>
        <!--posible tabla 2-->
        <div class="container">
            <div class="row">
                <div class="col">
                    <table class="table">
                        <tr class="cabezal">
                            <th>id</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Edad</th>
                            <th>Resultado VR</th>
                        </tr>
                        <tr v-for="pacient in pacients">
                            <td>{{pacient.idPacient}}</td>
                            <td>{{pacient.name}}</td>
                            <td>{{pacient.paternalName}}</td>
                            <td>{{pacient.maternalName}}</td>
                            <td>{{pacient.age}}</td>
                            <td>{{}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {
    created() {
            this.getPatient()
        },
        data() {
            return {
                titulo: "Historial de Pacientes",
                pacients: []

            }

        },
        methods: {
            getPatient() {
                const token = localStorage.getItem("sessionToken")
                fetch('https://vr-cancer-api.mybluemix.net/pacient', {
                        method: 'GET',
                        headers: {
                            "Authorization": token,
                            "Content-Type": "application/json" /*formato de lo que se envia o tipo de peticion*/
                        }

                    })
                    /*respuesta del servidor -> formato json*/
                    /*2do then espera al json y cae en data */
                    .then(response => response.json().then(data => ({
                        /*data retorna el estatus y el cuerpo del json*/
                        status: response.status,
                        body: data
                    })))
                    /*object recibe el objeto que tiene el status y el body*/
                    .then(obj => {
                        console.log(obj)
                        if (obj.status == 200) {
                            this.pacients = obj.body.pacients

                        } else {
                            alert("No se pudo obtener la informacion")
                        }
                    });
            }
        }
}

</script>
