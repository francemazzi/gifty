// Copia il link di una lista negli appunti, con fallback su window.prompt.
// (Nel 2017 non esistono ancora navigator.share o navigator.clipboard: si usa
// un input temporaneo + document.execCommand('copy').)
export const shareList = listId => {
  const url = window.location.origin + '/lista/' + listId;

  const input = document.createElement('input');
  input.value = url;
  input.style.position = 'fixed';
  input.style.opacity = '0';
  document.body.appendChild(input);
  input.focus();
  input.select();

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (e) {
    copied = false;
  }
  document.body.removeChild(input);

  if (copied) {
    window.alert('Link copiato negli appunti!');
  } else {
    window.prompt('Copia il link della lista:', url);
  }
};
