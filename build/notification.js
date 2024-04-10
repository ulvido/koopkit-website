const e=(i="Title Missing!",o={body:"Here is a notification body!"})=>{navigator.serviceWorker.getRegistration().then(t=>{t.showNotification(i,o)})};export{e as notification};
