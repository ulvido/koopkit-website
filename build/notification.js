const notification = (title = "Title Missing!", options = {
  //default options
  body: "Here is a notification body!"
  //   icon: "icon/icon192.png",
  //   vibrate: [100, 50, 100],
  //   data: {
  //     dateOfArrival: Date.now(),
  //     primaryKey: 1,
  //   },
  // actions: [
  //   {
  //     action: "explore",
  //     title: "KEŞFET",
  //     icon: "https://raw.githubusercontent.com/ulvido/koopkit-website/master/images/checkmark-60.png",
  //   },
  //   {
  //     action: "close",
  //     title: "KAPAT",
  //     icon: "https://raw.githubusercontent.com/ulvido/koopkit-website/master/images/xmark-60.png",
  //   },
  // ],
  //   image:
  //     "https://lh3.googleusercontent.com/a-/AOh14GgwHbcIDMRINoI2KnC2-x_DUAFtPPPGc4Ac_PrnVg=s96-c",
  //   badge: "icon/badge.png",
}) => {
  navigator.serviceWorker.getRegistration().then((reg) => {
    reg.showNotification(title, options);
  });
};
export {
  notification
};
