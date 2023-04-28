import React, { ChangeEvent, useEffect, useState } from "react";
import "./Login.css";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import VendedorLogin from "../../../components/models/VendedorLogin";
import { login } from "../../../components/services/Service"
import { addId, addToken } from "../../../store/tokens/action";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Login() {
    const [token, setToken] = useState('')
    const dispatch = useDispatch()

    let navigate = useNavigate();

    const [vendedorLogin, setVendedorLogin] = useState<VendedorLogin>({
        id: 0,
        nomeVendedor: "",
        usuario: "",
        senha: "",
        foto: "",
        localidade: "",
        dataDeNascimento: "",
        tipoDePagamento: "",
        token: ""
    })

    const [respVendedorLogin, setRespVendedorLogin] = useState<VendedorLogin>({
        id: 0,
        nomeVendedor: "",
        usuario: "",
        senha: "",
        foto: "",
        localidade: "",
        dataDeNascimento: "",
        tipoDePagamento: "",
        token: ""
    })

    const [carregando, setCarregando] = useState(false)

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setVendedorLogin(
            {
                ...vendedorLogin,
                [e.target.name]: e.target.value,
            },

        );
    }

    useEffect(() => {
        if (token != "") {
            dispatch(addToken(token))
            navigate("/home");
        }
    }, [token])

    useEffect(() => {
        if(respVendedorLogin.token !== ''){
       
           dispatch(addToken(respVendedorLogin.token))
           dispatch(addId(respVendedorLogin.id.toString()))
           navigate('/home')
       }
       
       }, [respVendedorLogin.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            setCarregando(true)
            await login(`/vendedor/logar`, vendedorLogin, setRespVendedorLogin);

            toast.success('Vendedor logado com sucesso!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        } catch (error) {
            setCarregando(false)
            toast.error('Dados do vendedor inconsistentes. Erro ao logar!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {/* Foto */}
                <Grid
                    xs={4}
                    style={{
                        backgroundImage: `url(https://ik.imagekit.io/sammylexa/Grafeat/BannerGra_1__1_.png?updatedAt=1681568731971)`,
                        backgroundRepeat: "no-repeat",
                        width: "100vh",
                        minHeight: "100vh",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></Grid>

                {/* Formulario */}
                <Grid
                    xs={8}
                    className="form"
                    style={{
                        backgroundImage: `url(https://ik.imagekit.io/sammylexa/Grafeat/BannerGra_1__2_.png?updatedAt=1681569211924)`,
                        backgroundRepeat: "no-repeat",
                        width: "100vh",
                        minHeight: "100vh",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <Box paddingX={6} >
                        <form onSubmit={onSubmit} className="form_sumit">
                            <Typography
                                variant="h3"
                                gutterBottom
                                component="h3"
                                style={{ fontWeight: "bold", color: "white" }}
                            >
                                Entrar
                            </Typography>
                            <TextField onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                                value={vendedorLogin.usuario}
                                error={vendedorLogin.usuario.length < 7 && vendedorLogin.usuario.length > 0}
                                helperText={vendedorLogin.usuario.length < 7 && vendedorLogin.usuario.length > 0 ? 'o campo usuario precisa ser preenchido' : ''}
                                id="usuario"
                                label="Usuário"
                                variant="outlined"
                                name="usuario"
                                margin="normal"
                                fullWidth
                                type="email"
                                style={{ backgroundColor: "#ffffff25" }}
                                className="campo"></TextField>
                            <TextField onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
                                value={vendedorLogin.senha}
                                error={vendedorLogin.senha.length < 8 && vendedorLogin.senha.length > 0}
                                helperText={vendedorLogin.senha.length < 8 && vendedorLogin.senha.length > 0 ? 'O campo senha precisa ser preenchido' : ''}
                                id="senha"
                                label="Senha"
                                variant="outlined"
                                name="senha"
                                margin="normal"
                                fullWidth
                                type="password"
                                style={{ backgroundColor: "#ffffff25" }}
                                className="campo"
                            ></TextField>
                            <Box marginTop={2}>
                                <Button
                                    disabled={(vendedorLogin.usuario.length < 7 || vendedorLogin.senha.length < 8) || (carregando)}
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    className="form_btn">
                                    {carregando ? (
                                        <section className="dots-container">
                                            <div className="dot"></div>
                                            <div className="dot"></div>
                                            <div className="dot"></div>
                                            <div className="dot"></div>
                                            <div className="dot"></div>
                                        </section>
                                    ) : ('Logar')}
                                </Button>
                            </Box>
                        </form>

                        <Box display="flex" marginTop={2}>
                            <Box marginRight={0.5}>
                                <Typography variant="subtitle1" gutterBottom >
                                    Não tem uma conta?{" "}
                                </Typography>
                            </Box>
                            <Link to="/cadastrar-usuario" >
                                <Typography
                                    variant="subtitle1"
                                    align="center"
                                    style={{ fontWeight: "bold", color: "white" }}
                                >
                                    Cadastre-se
                                </Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;
