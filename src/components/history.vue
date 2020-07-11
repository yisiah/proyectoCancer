<style lang="css" scoped>

.maincontainer {
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

</style>

<template lang="html">

<div class="">
    <div class="maincontainer">
        <h2>{{titulo}}</h2>

        <!--posible tabla 2-->
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>{{titulo}}</h1> {{pacients}}
                    <table>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido paterno</th>
                            <th>Apellido materno</th>
                            <th>Resultado VR</th>
                        </tr>
                        <tr>
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
                titulo: "Historial de pacientes",
                pacients: []

            }

        },
        methods: {
            getPatient() {
                const token = localStorage.getItem("sessionToken")
                fetch('https://test-ibm-vr.herokuapp.com/pacient', {
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
                            this.pacients = obj.body

                        } else {
                            alert("No se pudo obtener la informacion")
                        }
                    });
            }
        }
}

</script>
