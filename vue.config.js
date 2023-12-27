module.exports = {
    // Configuration spécifique du Vue CLI
    devServer: {
      port: 8080, // Port pour le serveur de développement
      proxy: 'http://localhost:3000' // Configuration du proxy pour le développement
    },
    // Configuration pour les options de production
    productionSourceMap: false, // Désactive les source maps en production
    // Autres configurations personnalisées...
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vueapp01/'
        : '/'
  };