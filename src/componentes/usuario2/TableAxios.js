import { useState, useEffect } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";

const TableAxios = () => {
    //configuracion de Hooks
    const [clients, setClients] = useState([]);

    //funcion para mostrar los clientes con axios
    const endpoint = "https://fakestoreapi.com/users";

    const getClients = async () => {
        await axios.get(endpoint).then((response) => {
            const clients = response.data
            console.log(clients)
            setClients(clients)
        })
    }

    useEffect(() => {
        getClients()
    }, [])
    // definimos las columnas
    const columns = [
        {
            name: "id",
            label: "ID",
        },
        {
            name: "lastname",
            label: "Apellido",
        },
        {
            name: "username",
            label: "Nombre",
            
        },
        {
            name: "email",
            label: "Email",
        },
       
    ];
    // renderiza la data table
            return (
                <MUIDataTable
                    title={"Lista de Clientes"}
                    data={clients}
                    columns={columns}
                    />
            )
    }

    export default TableAxios;