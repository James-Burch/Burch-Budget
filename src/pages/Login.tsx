import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    IconButton,
    Grid,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const styleOptions = {
    option1: {
        background: '#1F1256',
        cardBackground: '#ffffff',
        accentColor: '#F8C8FF',
        textPrimary: '#1F1256',
        textSecondary: '#ffffff',
        font: '"Poppins", "Roboto", sans-serif',
        buttonHover: '#e0b5e8',
    },

    option2: {
        background: '#121440',
        cardBackground: '#ffffff',
        accentColor: '#64DFDF',
        textPrimary: '#121440',
        textSecondary: '#ffffff',
        font: '"Montserrat", "Roboto", sans-serif',
        buttonHover: '#52c7c7',
    },

    option3: {
        background: 'linear-gradient(135deg, #1F1256 0%, #3E1F79 100%)',
        cardBackground: '#FFFAFD',
        accentColor: '#FFB4B4',
        textPrimary: '#1F1256',
        textSecondary: '#ffffff',
        font: '"Quicksand", "Roboto", sans-serif',
        buttonHover: '#ff9e9e',
    }
};

const currentStyle = styleOptions.option1;

const LoginContainer = styled(Box)({
    display: 'flex',
    minHeight: '100vh',
    background: currentStyle.background,
    padding: '16px',
    fontFamily: currentStyle.font,
});

const LogoContainer = styled(Box)({
    width: 100,
    height: 100,
    borderRadius: 16,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '32px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
});

const LoginCard = styled(Paper)({
    width: '100%',
    maxWidth: 400,
    borderRadius: 24,
    padding: '32px',
    backgroundColor: currentStyle.cardBackground,
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
});

const LoginButton = styled(Button)({
    backgroundColor: currentStyle.accentColor,
    color: currentStyle.textPrimary,
    fontWeight: 'bold',
    borderRadius: 30,
    padding: '12px 0',
    '&:hover': {
        backgroundColor: currentStyle.buttonHover,
    },
});

const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: 30,
    },
    marginBottom: '16px',
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.15)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: currentStyle.accentColor,
    },
});

const SocialBar = styled(Box)({
    backgroundColor: currentStyle.accentColor,
    padding: '8px',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
});

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt with:', { username, password });
    };

    return (
        <LoginContainer>
            <Grid
                container
                spacing={2}
                sx={{
                    minHeight: '100vh',
                    pb: isMobile ? '100px' : '80px'
                }}
            >
                {/* Login Form Section - left on desktop, bottom on mobile */}
                <Grid item xs={12} md={6} order={isMobile ? 2 : 1}
                    sx={{
                        display: 'flex',
                        justifyContent: isMobile ? 'center' : 'flex-end',
                        alignItems: 'center',
                        padding: isMobile ? 2 : 4,
                    }}>
                    <LoginCard elevation={6}>
                        <Typography
                            variant="h4"
                            align="center"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                color: currentStyle.textPrimary,
                                letterSpacing: '0.5px',
                                mb: 3
                            }}
                        >
                            LOG IN
                        </Typography>

                        <form onSubmit={handleLogin}>
                            <StyledTextField
                                fullWidth
                                placeholder="Username"
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                sx={{ mb: 2 }}
                            />

                            <StyledTextField
                                fullWidth
                                placeholder="Password"
                                type="password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ mb: 3 }}
                            />

                            <LoginButton
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                            >
                                LOG IN
                            </LoginButton>

                            <Typography
                                variant="body2"
                                align="center"
                                sx={{
                                    mt: 2,
                                    cursor: 'pointer',
                                    fontWeight: 500,
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
                                }}
                                component={Link}
                                to="/register"
                                color="textPrimary"
                            >
                                Not Registered? Sign up
                            </Typography>
                        </form>
                    </LoginCard>
                </Grid>

                {/* Welcome and Logo Section - right on desktop, top on mobile */}
                <Grid item xs={12} md={6} order={isMobile ? 1 : 2}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isMobile ? 'center' : 'flex-start',
                        justifyContent: 'center',
                        padding: isMobile ? 2 : 4,
                    }}>
                    <Box textAlign={isMobile ? "center" : "left"} mb={4}>
                        <LogoContainer sx={{ mx: isMobile ? 'auto' : 0 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: currentStyle.textPrimary,
                                    fontWeight: 'bold'
                                }}
                            >
                                BB
                            </Typography>
                        </LogoContainer>
                        <Typography
                            variant="h2"
                            sx={{
                                color: currentStyle.textSecondary,
                                fontWeight: 800,
                                letterSpacing: '1px',
                                mb: 1
                            }}
                        >
                            WELCOME
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: currentStyle.textSecondary,
                                opacity: 0.9,
                                letterSpacing: '0.5px'
                            }}
                        >
                            TO YOUR PERSONAL BUDGET GUIDE
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Social Bar fixed at the bottom */}
            <Box sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                zIndex: 10
            }}>
                <SocialBar>
                    <Grid container justifyContent="center" spacing={3}>
                        <Grid item>
                            <IconButton sx={{ color: currentStyle.textPrimary }}>

                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton sx={{ color: currentStyle.textPrimary }}>
                            </IconButton>
                        </Grid>
                    </Grid>
                </SocialBar>
            </Box>
        </LoginContainer>
    );
};

export default Login;