import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import DevTree from "../components/DevTree";
import { getUser } from "../api/DevTreeApi";

export default function AppLayout() {

    const { data, isLoading, isError } = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
        retry: 2,
        refetchOnWindowFocus: false,
    })
    
    if(isLoading) return <div className="w-full h-screen flex items-center justify-center">Cargando...</div>
    if(isError) return <Navigate to={'/auth/login'} />

    if(data) return <DevTree data={data} />
}