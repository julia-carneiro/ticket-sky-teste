import React, { FC, useState, useEffect } from "react";
import axios, { AxiosResponse } from 'axios';
import Table from './Table';


interface User {
    id: number;
    name: string;
    email: string;
}



const App: FC = () => {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {

        axios.get<User[]>('/api/getUsers').then((response) => {
            setData(response.data);
        });

    }, []);

    return (
        <><div>
            <h1 className="text-center text-2xl text-blue-800 font-display font-semibold">Usuários cadastrados</h1>
        </div>
            <div>
                <Table data={data} />
            </div></>
    );

};

export default App;