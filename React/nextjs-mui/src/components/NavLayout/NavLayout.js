"use client";
import { Container } from "@mui/material";
import NavBar from "./NavBar";
import NavFooter from "./NavFooter";

export default function NavLayout({children}){
    return(
        <>
        <NavBar />
        <Container sx={{ mt: 4}}>{children}</Container>
        <NavFooter />
        </>
    );
}