const i=(i="Title Missing!",o={body:"Here is a notification body!"})=>{navigator.serviceWorker.getRegistration().then((t=>{t.showNotification(i,o)}))};export{i as notification};
