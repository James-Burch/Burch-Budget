import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#1F1256',
        },
        secondary: {
            main: '#8DE5D3',
        },
        accent: {
            main: '#F8C8FF',
            contrastText: '#1F1256',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
            dark: '#1F1256',
        },
        text: {
            primary: '#1F1256',
            secondary: '#666666',
            light: '#ffffff',
        }
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 600,
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 25,
                    padding: '10px 20px',
                },
                containedPrimary: {
                    backgroundColor: '#F8C8FF',
                    color: '#1F1256',
                    '&:hover': {
                        backgroundColor: '#e9b9f0',
                    },
                },
                containedSecondary: {
                    backgroundColor: '#8DE5D3',
                    color: '#1F1256',
                    '&:hover': {
                        backgroundColor: '#7fd0c0',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: 'none',
                },
            },
        },
    },
});

export default Theme