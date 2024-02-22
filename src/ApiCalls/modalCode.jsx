const address = `${window.location.origin}/forms`;

export const modalCode = (campaign_id) => {
  return `<button style="position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; border-radius: 50%; border: none; outline: none; background-color: green; cursor: pointer; z-index: 1000; box-shadow: 2px 2px 10px lightgrey; display: flex; align-items: center; justify-content: center" onClick="document.querySelector(\'.overlay-modal\').style.display = \'flex\';" title="Request a call"><img src = \"https://www.svgrepo.com/show/521544/call-receive.svg\" width=\"30\" style=\"filter: invert(1)\"/></button><div class="overlay-modal" id="lds-overlay-modal" style="width: 100%; height: 100vh; justify-content: center; align-items: center; background-color: #00000050; display: none; position: fixed; inset: 0; z-index: 1001" onClick="document.getElementById(\'lds-overlay-modal\').style.display = \'none\'"><iframe sandbox="allow-scripts allow-popups allow-forms allow-same-origin" src="${address}/${campaign_id}" frameborder="0" width="100%" height="520px" scrolling="no"></iframe></div>`;
};

export const inlineCode = (campaign_id) => {
  return `<iframe sandbox="allow-scripts allow-popups allow-forms allow-same-origin" src="${address}/${campaign_id}" frameborder="0" width="100%" height="520px" scrolling="no"></iframe>`;
};
