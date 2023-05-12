module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "key.pem",
      user: "ubuntu",
      host: "54.200.60.31",
      ref: "origin/main",
      repo: "git@github.com:travisluong/my-app.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
    staging: {
      key: "key.pem",
      user: "ubuntu",
      host: "54.200.60.31",
      ref: "origin/staging",
      repo: "git@github.com:travisluong/my-app.git",
      path: "/home/ubuntu",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env staging",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
