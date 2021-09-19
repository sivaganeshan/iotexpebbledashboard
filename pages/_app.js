import React from "react";
import App from "next/app";
import theme from '../helpers/theme';  // needed for Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';


class MyApp extends App {

   static async getInitialProps({Component, ctx}) {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
      //Anything returned here can be accessed by the client
      return {pageProps: pageProps};
   }

   render() {
      const {Component, pageProps, router} = this.props;

      return (
          <ThemeProvider theme={theme}>
             <CssBaseline />
              {/* default by next js */}
              <Component {...pageProps}/>
          </ThemeProvider>
      )
   }
}

export default MyApp