import { createTheme } from '@mui/material/styles';

export const buildTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#14b8a6',
      },
      secondary: {
        main: '#f59e0b',
      },
      background: {
        default: mode === 'dark' ? '#071111' : '#f7faf9',
        paper: mode === 'dark' ? '#101b1a' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#eef7f5' : '#10201f',
        secondary: mode === 'dark' ? '#a9bcba' : '#526361',
      },
    },
    typography: {
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: {
        fontSize: 'clamp(2.2rem, 4.4vw, 4.35rem)',
        lineHeight: 1.04,
        fontWeight: 700,
        letterSpacing: 0,
      },
      h2: {
        fontSize: 'clamp(1.7rem, 2.8vw, 2.45rem)',
        lineHeight: 1.15,
        fontWeight: 700,
        letterSpacing: 0,
      },
      h3: {
        fontSize: '2rem',
        lineHeight: 1.16,
        fontWeight: 700,
        letterSpacing: 0,
      },
      h4: {
        fontSize: '1.8rem',
        fontWeight: 700,
        letterSpacing: 0,
      },
      h5: {
        fontSize: '1.2rem',
        lineHeight: 1.55,
        fontWeight: 500,
        letterSpacing: 0,
      },
      h6: {
        fontSize: '1.05rem',
        fontWeight: 700,
        letterSpacing: 0,
      },
      button: {
        textTransform: 'none',
        fontWeight: 650,
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            backgroundImage: 'none',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 600,
          },
        },
      },
    },
  });
