import React, { FC, useState, useEffect } from "react";
import axios, { AxiosResponse } from 'axios';
import { useParams } from "react-router-dom";
import { calculateSizeAdjustValues } from "next/dist/server/font-utils";


type User = {
    id?: number;
    name?: string;
    email?: string;
}



const App: FC = () => {
    const [data, setData] = useState<User>();
    useEffect(() => {

        const user = JSON.parse(sessionStorage.getItem('usuarioLogado') || '{}');
        setData(user[0])

    }, []);

    const user = JSON.parse(sessionStorage.getItem('usuarioLogado') || '{}');
    console.log(user);
    return (
        <><div>
            <h1 className="text-center text-2xl text-blue-800 font-display font-semibold">Usuário logado</h1>
        </div>
            <h3 className="text-center text-2xl text-blue-800 font-display font-semibold">
                ID:{data?.id}

            </h3>
            <h3 className="text-center text-2xl text-blue-800 font-display font-semibold">
                Nome: {data?.name}
            </h3>
            <h3 className="text-center text-2xl text-blue-800 font-display font-semibold">
                Email: {data?.email}
            </h3>
            <div>

            </div></>
    );

};

export default App;