const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.ENVIRONMENT || 'unknown';

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Simple DevOps App</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: ${ENVIRONMENT === 'production' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'};
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          background: white;
          padding: 50px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          text-align: center;
        }
        h1 {
          color: #333;
          margin-bottom: 20px;
        }
        .env-badge {
          display: inline-block;
          padding: 10px 30px;
          background: ${ENVIRONMENT === 'production' ? '#4CAF50' : '#FF9800'};
          color: white;
          border-radius: 25px;
          font-size: 20px;
          font-weight: bold;
          margin: 20px 0;
        }
        .info {
          color: #666;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 DevOps Multi-Environment App</h1>
        <div class="env-badge">${ENVIRONMENT.toUpperCase()}</div>
        <p class="info">Running on port: ${PORT}</p>
        <p class="info">Hostname: ${require('os').hostname()}</p>
        <p>✅ Deployment Successful!</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    environment: ENVIRONMENT,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT} in ${ENVIRONMENT} environment`);
});
// Self-hosted runner - WORKING! 🚀
// Second test
