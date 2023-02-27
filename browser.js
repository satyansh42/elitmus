fetch('http://api.ipify.org/?format=json')
.then(res=>res.json())
.then(data=> localStorage.setItem("ip",data.ip))

document.fullscreenEnabled
window.onload = () => {
  document.documentElement.requestFullscreen().catch((e)=>{
    console.log(e);
  })
  //  alert(window.location.href)

   chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
    });

    chrome.permissions.request({
      permissions: ["videoCapture", "audioCapture"],
      origins: ['https://www.google.com/']
    }, (granted) => {
      // The callback argument will be true if the user granted the permissions.
      if (granted) {
        console.log('tt');
      } else {
        console.log('ff');
      }
    });


      navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
      })
      .catch((err) => {
        console.error(`you got an error: ${err}`);
      });



      let location; 
      const successCallback = (position) => {
        console.log(position);
        location = position
      };
      const errorCallback = (error) => {
        console.log(error);
      };
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

      localStorage.setItem("memory", `${navigator.deviceMemory} GB`)
      localStorage.setItem("browser", `${navigator.userAgentData.brands[2].brand}`)
      localStorage.setItem("internetSpeed", `${navigator.connection.downlink} Mbps`)
      // localStorage.setItem("location", `${location.coords.latitude}, ${location.coords.longitude}`)
      alert(`${localStorage.ip},${localStorage.memory},${localStorage.browser},${localStorage.internetSpeed}`)
}

// window.onbeforeunload = alert('are you sure?');

// registerOpenTab FUNCTION
const registerOpenTab = () => {
  let tabsOpen = 1;
  while (localStorage.getItem('openTab' + tabsOpen) !== null) {
    tabsOpen++;
  }
  localStorage.setItem('openTab' + tabsOpen, 'open');
  if (localStorage.getItem('openTab2') !== null) {
      window.alert('This application is already running in ' + (tabsOpen - 1) + ' other browser tab(s).')
  }
}

// unregisterOpenTab FUNCTION
const unregisterOpenTab = () => {
  let tabsOpen = 1;
  while (localStorage.getItem('openTab' + tabsOpen) !== null) {
    tabsOpen++;
  }
  localStorage.removeItem('openTab' + (tabsOpen - 1));
}

// EVENT LISTENERS
window.addEventListener('load', registerOpenTab);
window.addEventListener('beforeunload', unregisterOpenTab);