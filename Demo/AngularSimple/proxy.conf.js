const PROXY_CONFIG = [
    {
      context: [
          
          "/api",                
      ],
      target: "https://localhost:44385/",
      secure: false,
      "changeOrigin": true,
      "logLevel": "debug"
    }
]
module.exports = PROXY_CONFIG;